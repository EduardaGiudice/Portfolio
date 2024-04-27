import React, { useState } from "react";
import "./Header.css";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdSchool } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const Header = () => {

  /* ------------Toggle Menu ---------------*/
  const [toggle, showMenu] = useState(false);

  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Eduarda Giudice
        </a>

        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active_link" : "nav_link"
                }
              >
                <RiHomeHeartFill className="nav_icon"/>Início
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#sobre"
                onClick={() => setActiveNav("#sobre")}
                className={
                  activeNav === "#sobre" ? "nav_link active_link" : "nav_link"
                }
              >
                <FaUser className="nav_icon"/>Sobre
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#tecnologias"
                onClick={() => setActiveNav("#tecnologias")}
                className={
                  activeNav === "#tecnologias"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <GrTechnology className="nav_icon"/>Tecnologias
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#experiencia"
                onClick={() => setActiveNav("#experiencia")}
                className={
                  activeNav === "#experiencia"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <MdSchool className="nav_icon"/>Experiência
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#projeto"
                onClick={() => setActiveNav("#projeto")}
                className={
                  activeNav === "#projeto"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <FaComputer className="nav_icon"/>Projetos
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contato"
                onClick={() => setActiveNav("#contato")}
                className={
                  activeNav === "#contato" ? "nav_link active_link" : "nav_link"
                }
              >
                <IoSend className="nav_icon"/>Contato
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"> </i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
