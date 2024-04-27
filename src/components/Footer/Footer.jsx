import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Eduarda Giudice</h1>

        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre" className="footer_link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#tecnologias" className="footer_link">
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#experiencia" className="footer_link">
              Experiência
            </a>
          </li>
          <li>
            <a href="#projeto" className="footer_link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" className="footer_link">
              Contato
            </a>
          </li>
        </ul>
        <span className="footer_copy">
          Feito com 🥰 Eduarda Rosa Giudice Mota &copy; 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
