import "./CardHome.css"
import { useState } from "react"




function Card (props) {

    const [curtir, setCurtir] = useState("Curtir")
    const [contaCurtida, setContaCurtida] = useState (0)

    function curtindo() {

        if (curtir === "Curtir"){
            setCurtir("Curtido")
            setContaCurtida(contaCurtida+1)

        }
        else {
            setCurtir("Curtir")   // Alterar o estado do botão para seguir
            setContaCurtida (contaCurtida-1)
        }
    }

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
            <a href={props.direcionar} target="_blank" className="explorar">Veja mais</a>
            <p className="valor">{props.valor}</p>
        </section>

        </>
    )

}

export default Card