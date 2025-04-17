import "./CardHome.css";
import { useState } from "react";

function Card (props) {


   

  return (
    <>
      <section className="blocoCard">

        <section className="blocoTextos">
            <img className="imagemVia" src={props.imagem}></img>
                <h2>{props.nomeLugar}</h2>
                <p>{props.breveDescricao}</p>
            </section>
            <section className="blocoCard2">
                <button className="botaoCurtida" onClick={curtindo}>{curtir} <span>{contaCurtida}</span></button>
                <p>{props.estrela}</p>
            </section>
            <a href={props.direcionar} target="_blank" className="explorar">Detalhes </a>
            <p className="valor">{props.valor}</p>
        </section>
        
        <a href={props.direcionar} target="_blank" className="explorar"> Detalhes </a>
        <p className="valor">{props.valor}</p>

      </section>
    </>
  );
}

export default Card;
