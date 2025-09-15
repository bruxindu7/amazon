// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BUCKPAY_BASE_URL = "https://api.realtechdev.com.br";
const PIX_CREATE_PATH = "/v1/transactions";

// 🔐 Domínios permitidos
const allowedOrigins = [
  "https://www.trabalheconosco.site",
  "https://trabalheconosco.site",
];

function isOriginAllowed(request: NextRequest): boolean {
  const referer = request.headers.get("referer") || "";
  const origin = request.headers.get("origin") || "";

  return allowedOrigins.some(
    (allowed) => referer.startsWith(allowed) || origin.startsWith(allowed)
  );
}

export async function POST(req: NextRequest) {
  if (!isOriginAllowed(req)) {
    return NextResponse.json(
      { error: "Origem não autorizada." },
      { status: 403 }
    );
  }

  try {
    const { amount, orderId, description, payer } = await req.json();

    // sempre trabalhar em centavos
    const amountCents = parseInt(amount);

    const payload = {
      external_id: String(orderId),
      payment_method: "pix",
      amount: amountCents,
      buyer: {
        name: payer?.name?.includes(" ")
          ? payer.name
          : `${payer?.name || "Cliente"} Teste`,
        email: payer?.email || "sememail@teste.com",
        document: payer?.document || undefined,
        phone: payer?.phone
          ? "55" + payer.phone.replace(/\D/g, "")
          : undefined,
      },
    };

    console.log("➡ Enviando para BuckPay:", payload);

    const r = await fetch(BUCKPAY_BASE_URL + PIX_CREATE_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BUCKPAY_TOKEN!}`, // ⚠️ precisa setar no .env.local
        "User-Agent": "Buckpay API",
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json();
    console.log("➡ Resposta BuckPay:", r.status, data);

    if (!r.ok) {
      return NextResponse.json({ error: data }, { status: r.status });
    }

    return NextResponse.json(
      {
        id: data.data.id,
        status: data.data.status,
        brcode: data.data.pix.code, // Pix copia e cola
        qrBase64: data.data.pix.qrcode_base64, // QR code em base64
        amount: data.data.total_amount,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("⛔ Erro backend create-pix:", err);
    return NextResponse.json(
      { error: "Falha ao criar cobrança PIX" },
      { status: 500 }
    );
  }
}
