"use client";

import SectionTitle from "../SectionTitle/sectionTitle";
import { contactChannels } from "../../data/landing";

function Contact() {
  return (
    <section id="contato" className="section contact">
      <SectionTitle tag="05 — CONTATO" title="Fale com a" highlight="equipe JOVI.">
        Dúvidas sobre o projeto ou sobre a solução? Manda uma mensagem ou usa um
        dos canais abaixo.
      </SectionTitle>

      <div className="contact-grid">
        <form className="contact-form" action="#" method="post">
          <div className="form-row">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="voce@email.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Conte o que você quer saber sobre a JOVI"
              required
            ></textarea>
          </div>

          <button type="submit" className="button primary">
            Enviar mensagem
          </button>
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
