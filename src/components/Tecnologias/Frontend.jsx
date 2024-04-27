import React from "react";
import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { FaBootstrap, FaGithub } from "react-icons/fa6";
import {
  SiJavascript,
  SiFigma,
  SiExpo,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";

const Frontend = () => {
  return (
    <div className="tecnologias_content">
      <h3 className="tecnologias_title">Desenvolvimento Frontend</h3>
      <div className="tecnologias_box">
        <div className="tecnologias_group">
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
              <BsFiletypeHtml />
            </div>
            <div>
              <h3 className="tecnologias_nome">HTML</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <BsFiletypeCss />
            </div>
            <div>
              <h3 className="tecnologias_nome">CSS/SCSS</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <FaBootstrap />
           </div> 
           <div>
              <h3 className="tecnologias_nome">Bootstrap</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <SiJavascript />
           </div> 
           <div>
              <h3 className="tecnologias_nome">JavaScript</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <FaReact />
           </div>
            <div>
              <h3 className="tecnologias_nome">React JS</h3>
            </div>
          </div>
        </div>

        <div className="tecnologias_group">
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <FaReact />
           </div>
            <div>
              <h3 className="tecnologias_nome">React Native</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <SiExpo />
           </div> 
           <div>
              <h3 className="tecnologias_nome">Expo</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <RiVuejsFill />
           </div>
            <div>
              <h3 className="tecnologias_nome">Vue js</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <SiFigma />
           </div> 
           <div>
              <h3 className="tecnologias_nome">Figma</h3>
            </div>
          </div>
          <div className="tecnologias_data">
            <div className="tecnologias_icon">
            <FaGithub />
           </div>
            <div>
              <h3 className="tecnologias_nome">Git/Github</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
