import "./CardHome.css";

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
                
            </section>
            <center>
            <a href={props.direcionar} target="_blank" className="explorar"><strong>Detalhes</strong> </a>
            </center>
            <p className="valor">{props.valor}</p>
        </section>
    </>
  );
}

export default Card;

