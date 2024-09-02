import React from "react";
import {
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiDocker,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiScrum } from "react-icons/di";

const Backend = () => {
  return (
    <div className="tecnologias_content">
      <h3 className="tecnologias_title">Desenvolvimento Backend</h3>
      <div className="tecnologias_box">
        <div className="tecnologias_group">
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <SiTypescript />
            </div>
            <div>
              <h3 className="tecnologias_nome">TypeScript</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <FaNodeJs />
            </div>
            <div>
              <h3 className="tecnologias_nome">Node JS</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <SiExpress />
            </div>
            <div>
              <h3 className="tecnologias_nome">Express JS</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <SiMongodb />
            </div>
            <div>
              <h3 className="tecnologias_nome">MongoDB</h3>
            </div>
          </div>
        </div>

        <div className="tecnologias_group">
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <SiMysql />
            </div>
            <div>
              <h3 className="tecnologias_nome">MySQL</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <BiLogoPostgresql />
            </div>
            <div>
              <h3 className="tecnologias_nome">PostgreSQL</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <SiDocker />
            </div>
            <div>
              <h3 className="tecnologias_nome">Docker</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <DiScrum />
            </div>
            <div>
              <h3 className="tecnologias_nome">SCRUM</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
