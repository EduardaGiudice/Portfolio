import React from 'react'
import './Projeto.css'
import Projetos from './Projetos';

const Projeto = () => {
  return (
    <section className="projeto section" id="projeto">
      <h2 className="section_title">Projetos</h2>
      <span className="section_subtitle projeto_subtitle">
        Estes são os últimos projetos que desenvolvi, tanto de forma
        independente quanto em colaboração com minha equipe de desenvolvimento
        utilizando a metodologia SCRUM.
      </span>
      <Projetos/>
    </section>
  );
}

export default Projeto