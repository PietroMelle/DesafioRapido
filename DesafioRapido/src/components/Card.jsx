import "./Card.css"
function Card(props){
    return( 
        <>
        <section className="Blocao">

        <section className="boxCard">

            <section className="ImagemETitulo">
            <img className="imagem" src={props.Foto}></img>
            <h2>{props.Titulo}</h2>
            </section>

            <section className="Descricao">
            <p>{props.Descricao}</p>
            </section>

            <section className="Valor">
            <p> <strong> {props.Valor} </strong> </p>
            <p>{props.Valor1}</p>
            <p>{props.Valor2}</p>
            <p>{props.Valor3}</p>
            </section>

           <section className="BoxBotao">  
            <a className="Botao" href={props.Link}>{props.Proximo}</a>
            </section>
    
            
        </section>
        </section>
        </>
    )
}

export default Card