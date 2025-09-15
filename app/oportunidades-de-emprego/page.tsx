import Image from "next/image";
import "./remota.css";

export default function FuncaoRemota() {
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
        
      {/* HERO TITLE */}
      <section className="hero-remota">
        <h1>Empregos de atendimento ao cliente</h1>
  <p>
  Descubra empregos novos e empolgantes com <br />
  nossas funções de atendimento ao cliente
</p>

      </section>

      {/* CARDS DE VAGAS */}
      <section className="cards-vagas">
        <div className="vaga-card">
          <Image
            src="/CS_Associate_1265_800x510._CB1679426133_.jpg"
            alt="Associado remoto"
            width={520}
            height={320}
            className="rounded"
          />
          <h3>Associado remoto de atendimento ao cliente</h3>
          <span className="tag">Remoto</span>
          <p>
            Trabalhe em casa para evitar e resolver problemas levantados pelos nossos clientes.
            Você será o primeiro ponto de contato respondendo solicitações por telefone, chat e e-mail.
          </p>
        </div>

        <div className="vaga-card">
          <Image
            src="/Brazil_associate_TCSA.png"
            alt="Analista de Suporte Técnico"
            width={520}
            height={320}
            className="rounded"
          />
          <h3>Analista de Suporte Técnico</h3>
          <span className="tag">Remoto</span>
          <p>
            Faça parte da Amazon como Analista de Suporte Técnico, oferecendo soluções inovadoras
            e ajudando clientes com dispositivos digitais como Echo, Kindle, Prime e Fire TV.
          </p>
        </div>
      </section>
{/* POR QUE VOCÊ VAI ADORAR */}
<section className="porque">
  <div>
    <h2>Por que você vai adorar esse trabalho</h2>
    <ul>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Mantenha-se ocupado
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Opções de agendamento
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Desenvolvimento de carreira
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Aprenda novas habilidades
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Treinamento no local de trabalho
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Ótimo ambiente de equipe
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Pagamento a qualquer momento
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Remuneração competitiva
      </li>
    </ul>
  </div>

  <div>
    <h2>Por que você vai adorar a Amazon</h2>
    <ul>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Ótimos benefícios
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Equilíbrio entre vida profissional e pessoal
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Avanço na carreira
      </li>
      <li>
        <Image src="/Orange_check_mark.png" alt="check" width={25} height={25} />
        Nossa cultura
      </li>
    </ul>
  </div>
</section>


      {/* VÍDEO */}
      <section className="video-remota">
        <h2>
  Descubra como é ser Associado de atendimento <br />
  ao cliente
</h2>

        <video width="720" controls>
          <source src="/20250603_BP_Job_Fit_US_Remote_Customer_Service_1-06-25.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </section>

{/* ETAPAS */}
<section className="etapas">
  <div className="etapas-texto">
    <h2>Sobre os pedidos de emprego de atendimento ao cliente</h2>
    <p>
      Dependendo da função e do local, o processo pode variar um pouco,
      mas aqui estão algumas das etapas que você pode esperar:
    </p>
  </div>
  <ul className="etapas-lista">
    <li>
      <Image
        src="/hiring_step_1._CB641679402_ (1).png"
        alt="Etapa 1"
        width={58}
        height={58}
      />
      Crie seu perfil
    </li>
    <li>
      <Image
        src="/hiring_step_1._CB641679402_.png"
        alt="Etapa 2"
        width={58}
        height={58}
      />
      Informações de contato e perguntas gerais
    </li>
    <li>
      <Image
        src="/hiring_step_3._CB641679402_.png"
        alt="Etapa 3"
        width={58}
        height={58}
      />
      Upload de currículo (opcional)
    </li>
    <li>
      <Image
        src="/hiring_step_4._CB641679402_.png"
        alt="Etapa 4"
        width={58}
        height={58}
      />
      Perguntas de triagem
    </li>
    <li>
      <Image
        src="/hiring_step_5._CB641679402_.png"
        alt="Etapa 5"
        width={58}
        height={58}
      />
      Avaliação do estilo de trabalho
    </li>
    <li>
      <Image
        src="/hiring_step_6._CB641679402_.png"
        alt="Etapa 6"
        width={58}
        height={58}
      />
      Simulação de trabalho virtual
    </li>
    <li>
      <Image
        src="/hiring_step_7._CB641679402_.png"
        alt="Etapa 7"
        width={58}
        height={58}
      />
      Avaliação técnica para cargos específicos
    </li>
  </ul>
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
              38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
            </svg>
          </a>
        </div>
      
        {/* Linha Colunas */}
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
      
        {/* Linha inferior */}
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
