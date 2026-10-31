"use client";

import Section from "../Section/section";
import SectionTitle from "../SectionTitle/sectionTitle";
import FormField from "../FormField/formField";
import Button from "../Button/button";
import useContactForm from "../../hooks/useContactForm";
import { contactChannels } from "../../data/landing";

function Contact() {
  const { valores, erros, enviando, retorno, handleChange, handleSubmit } =
    useContactForm();

  return (
    <Section id="contato" bordered>
      <SectionTitle tag="05 — CONTATO" title="Fale com a" highlight="equipe JOVI.">
        Dúvidas sobre o projeto ou sobre a solução? Manda uma mensagem ou usa um
        dos canais abaixo.
      </SectionTitle>

      <div className="grid gap-[60px] lg:grid-cols-[1.2fr_0.8fr]">
        <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
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

          <Button type="submit" className="justify-self-start" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar mensagem"}
          </Button>

          {retorno && (
            <p
              className={`text-sm ${retorno.tipo === "sucesso" ? "text-green-400" : "text-red-400"}`}
            >
              {retorno.texto}
            </p>
          )}
        </form>

        <address className="grid content-start gap-5 border border-jovi-border bg-jovi-bg-alt p-[35px] not-italic">
          <h3 className="text-lg font-bold">Outros canais</h3>

          <ul className="grid gap-4">
            {contactChannels.map((channel) => (
              <li
                key={channel.label}
                className="border-t border-jovi-border pt-4 text-sm text-jovi-muted [overflow-wrap:anywhere] first:border-t-0 first:pt-0"
              >
                <span className="mb-1 block text-[11px] tracking-[2px] text-jovi-faint">
                  {channel.label}
                </span>
                {channel.value}
              </li>
            ))}
          </ul>
        </address>
      </div>
    </Section>
  );
}

export default Contact;
