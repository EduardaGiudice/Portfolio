import React from "react";
import "./Tecnologias.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Tecnologias = () => {
  return (
    <section className="tecnologias section" id="tecnologias">
      <h2 className="section_title">Tecnologias</h2>
      <span className="section_subtitle tecnologia_subtitle">
        Incluindo linguagens de programação, frameworks, bancos de dados,
        ferramentas utilizadas em desenvolvimento front-end e back-end.
      </span>

      <div className="tecnologias_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Tecnologias;
