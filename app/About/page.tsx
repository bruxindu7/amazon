"use client";

import Image from "next/image";
import Link from "next/link";
import "./comoFunciona.css";

export default function ComoFunciona() {
  return (
    <main className="como-funciona">
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
      <section className="hero-como-funciona">
        <h1>Como funciona trabalhar na Amazon?</h1>
        <p>
          Descubra como é o processo de candidatura, contratação e o dia a dia
          das funções oferecidas pela Amazon.
        </p>
      </section>

      {/* ETAPAS */}
      <section className="etapas">
        <h2>Etapas do processo</h2>
        <div className="etapas-grid">
          <div className="etapa-card">
            <span className="numero">1</span>
            <h3>Inscrição Online</h3>
            <p>
              Candidate-se para a vaga escolhida diretamente em nosso site em
              poucos minutos.
            </p>
          </div>
          <div className="etapa-card">
            <span className="numero">2</span>
            <h3>Treinamento Remunerado</h3>
            <p>
              Receba todo o suporte e treinamento necessário antes de iniciar as
              atividades.
            </p>
          </div>
          <div className="etapa-card">
            <span className="numero">3</span>
            <h3>Início das Atividades</h3>
            <p>
              Trabalhe no modelo remoto ou presencial, dependendo da vaga
              escolhida, com suporte completo da equipe Amazon.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="beneficios-como">
        <h2>Benefícios de ser parte da Amazon</h2>
        <div className="beneficios-grid">
          <div className="beneficio-card">
        
            <h3>Plano de Saúde</h3>
            <p>Cobertura médica e odontológica para você e sua família.</p>
          </div>
          <div className="beneficio-card">
            <h3>Flexibilidade</h3>
            <p>
              Vagas em turnos variados para se adaptar ao seu estilo de vida.
            </p>
          </div>
          <div className="beneficio-card">
            <h3>Cultura Inclusiva</h3>
            <p>
              Trabalhe em um ambiente seguro, diverso e com oportunidades iguais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Pronto para começar sua jornada?</h2>
        <Link href="/jobSearch" className="btn-candidatar">
          Ver vagas disponíveis →
        </Link>
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
