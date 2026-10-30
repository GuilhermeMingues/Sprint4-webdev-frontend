"use client";

import SectionTitle from "../SectionTitle/sectionTitle";
import FormField from "../FormField/formField";
import useContactForm from "../../hooks/useContactForm";
import { contactChannels } from "../../data/landing";

function Contact() {
  const { valores, erros, enviando, retorno, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section id="contato" className="section contact">
      <SectionTitle tag="05 — CONTATO" title="Fale com a" highlight="equipe JOVI.">
        Dúvidas sobre o projeto ou sobre a solução? Manda uma mensagem ou usa um
        dos canais abaixo.
      </SectionTitle>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <FormField
            id="nome"
            label="Nome"
            placeholder="Seu nome completo"
            value={valores.nome}
            onChange={handleChange}
            error={erros.nome}
          />

          <FormField
            id="email"
            label="E-mail"
            type="email"
            placeholder="voce@email.com"
            value={valores.email}
            onChange={handleChange}
            error={erros.email}
          />

          <FormField
            id="mensagem"
            label="Mensagem"
            multiline
            rows="5"
            placeholder="Conte o que você quer saber sobre a JOVI"
            value={valores.mensagem}
            onChange={handleChange}
            error={erros.mensagem}
          />

          <button
            type="submit"
            className="button primary disabled:opacity-60"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar mensagem"}
          </button>

          {retorno && (
            <p
              className={`text-sm ${retorno.tipo === "sucesso" ? "text-green-400" : "text-red-400"}`}
            >
              {retorno.texto}
            </p>
          )}
        </form>

        <address className="contact-info">
          <h3>Outros canais</h3>

          <ul>
            {contactChannels.map((channel) => (
              <li key={channel.label}>
                <span>{channel.label}</span>
                {channel.value}
              </li>
            ))}
          </ul>
        </address>
      </div>
    </section>
  );
}

export default Contact;
