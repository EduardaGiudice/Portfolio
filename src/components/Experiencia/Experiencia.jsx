import React from 'react'
import './Experiencia.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";

const Experiencia = () => {
  return (
    <section className="experiencia section" id="experiencia">
      <h2 className="section_title experiencia_title">Experiência Acadêmica</h2>
      <div className='container'>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#616161" }}
            date="2015 - 2017"
            dateClassName="date-color"
            iconStyle={{ background: "#FB3C6A", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">Ensino Médio</h3>
            <h4 className="vertical-timeline-element-subtitle">
              E. E. Professor Antonio José de Siqueira
            </h4>
            <p className="city">Jacareí, SP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#616161" }}
            date="2020 - 2024"
            dateClassName="date-color"
            iconStyle={{ background: "#FB3C6A", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3>Curso de ADS</h3>
            <h4>Fatec - Professor Jessen Vidal</h4>
            <p className="city">São José dos Campos, SP</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experiencia