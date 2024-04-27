import React from 'react'

const Itens = ({item}) => {
  return (
    <div className="projeto_card" key={item.id}>
      <img src={item.image} alt="" className="projeto_img" />
      <h3 className="projeto_title">{item.title}</h3>
      <a
        href={item.link}
        className="projeto_button"
        target="blank"
      >
        Ver <i className="bx bx-right-arrow-alt projeto_button_icon"></i>
      </a>
    </div>
  );
}

export default Itens