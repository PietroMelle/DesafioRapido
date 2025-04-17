import "./Footer.css"
import logoinstagram from "../assets/instagram.png"
import logofacebook from "../assets/facebook.png"
import logoG3 from "../assets/logoG3.png"

function Footer () {
    return (
        <>
        <section className="bodyFooter">
            <section className="infoContatos">

                <section className="redes">

                    <section className="info"> {/*classe para deixar o nome do lado da logo */}
                        <img className="imgRedes" src={logoinstagram} />
                        <p> @avocados_viajantes</p>
                    </section>

                    <section className="info"> 
                        <img className="imgRedes" src={logofacebook} />
                        <p> AvocadosViajantes</p>
                    </section>

                </section>

                <section className="contato"> 
                    <p> 📞 Contado para Vendas: (19) 91234-1234</p>
                    <p> 📩 Email para Contato: avocados.viajantes@gmail.com</p>
                </section>

            </section>

            <section className="informacoes"> 

                <section className="sobreNos"> 
                    <p> <h4> 🏢 Sobre a Empresa  </h4> Nós somos uma empresa de viagem que procura o melhor destino para nossos clientes, de acorodo com seus gostos! Somos uma equipe de 6 pessoas que adoram conhecer o mundo, e dessa forma espalhamos conhecimentos para os que tambem são interresados nessa aréa!</p>
                </section>

                <section className="listas"> 
                    <h4> 📍 Principais Destinos</h4>
                    <a href="http://localhost:5173/interlaken-suica" target="_blank">⛰️ Suiça</a> <br/>
                    <a href="http://localhost:5173/paris-franca" target="_blank">🥐 Paris </a> <br/>
                    <a href="http://localhost:5173/disney-eua" target="_blank">🏰 Disney Word </a> <br/>
                    <a href="http://localhost:5173/newyork-eua" target="_blank">🗽 Nova York </a>
                </section>

                <section className="listas"> 
                    <h4> ✈️ Companhias Aéreas Internacionais </h4>
                        <a href="https://www.flytap.com/pt-br" target="_blank"> Tap Air </a> <br/>
                        <a href="https://www.copaair.com/pt-br/" target="_blank"> Copa Airlines </a> <br/>
                        <a href="https://wwws.airfrance.com.br/" target="_blank"> Air France </a> <br/>
                        <a href="https://www.aa.com.br/homePage.do?locale=pt_BR" target="_blank"> American Arlines</a> <br/>
                        <a href="https://www.airchina.com.br/BR/PO/Home" target="_blank"> Air China </a> <br/>
                        <a href="https://www.emirates.com/br/portuguese/" target="_blank"> Emirates </a>  
                </section>

                <section className="listas">  
                    <h4> ✈️ Companhias Aéreas Nacionais </h4>
                        <a href="https://www.voeazul.com.br/br/pt/home" target="_blank"> Azul </a> <br/>
                        <a href="https://www.voegol.com.br/" target="_blank"> VoeGol </a> <br/>
                        <a href="https://www.latamairlines.com/br/pt" target="_blank"> Latam</a> <br/>
                        <a href="https://www.voepass.com.br/empresa/site/" target="_blank"> VoePass </a> <br/>
                        <a href="https://www.avianca.com/pt/" target="_blank"> Avianca</a>            
                </section>

            </section>

            <img className="imgLogo" src={logoG3}/>

            <hr/>

            <section className="integrantes"> 
                <section> 
                    <h4> Laura Betti Migliaccio </h4>
                    <h4> Lucas Casagrande da Silva </h4>
                    <h4> Milena Oliveira Souza </h4>
                </section>

                <section> 
                    <h4> Pietro Melle Michelin </h4>
                    <h4> Pyetro Joaquim Taborda Nunes </h4>
                    <h4> Vitor Geraldo Cecato </h4>
                </section>
            </section>
        </section>
        </>
    )
}

export default Footer