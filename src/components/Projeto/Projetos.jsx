import React from "react";
import { projectsData } from "./Data";
import { projectNav } from "./Data";
import Itens from "./Itens";

const Projetos = () => {
  return (
    <div>
      <div className="projeto_container container grid">
        {projectsData.map((item) => {
          return <Itens item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projetos;
