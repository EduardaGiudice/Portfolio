import React, { useState, useEffect } from "react";
import "./ScrollUp.css"; // Estilo para o ScrollUp

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adiciona um event listener para verificar o scroll da página
    window.addEventListener("scroll", toggleVisibility);
    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Função para verificar a posição do scroll e mostrar ou ocultar o botão
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para fazer o scroll para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scrollup" onClick={scrollToTop}>
          <i className="uil uil-angle-double-up"></i>
        </div>
      )}
    </div>
  );
}

export default ScrollUp;
