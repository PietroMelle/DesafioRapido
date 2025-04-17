import "./Footer.css";
import { Link } from "react-router-dom"
import logoinstagram from "../assets/instagram.png";
import logofacebook from "../assets/facebook.png";
import logoG3 from "../assets/logoG3.png";

function Footer() {
  return (
    <>
      <section className="bodyFooter">

        <section className="infoContatos">

          <section className="redes">

            <section className="info">
              {/*classe para deixar o nome do lado da logo */}
              <img className="imgRedes" src={logoinstagram} />
              <p> @avocados_sabor</p>
            </section>

            <section className="info">
              <img className="imgRedes" src={logofacebook} />
              <p> AvocadosSabor</p>
            </section>

          </section>

          <section className="contato">
            <p> 📞 Contado para Vendas: (19) 91234-1234</p>
            <p> 📩 Email para Contato: avocados.sabor@gmail.com</p>
          </section>

        </section>

        <section className="informacoes">

          <section className="sobreNos">
            <p>
              <h4> 🏢 Sobre a Empresa </h4> Nós somos uma empresa de entregas que
              procura realiazas as melhores entregas para nossos clientes, de acordo com suas
              localizações! Somos uma equipe de 6 pessoas que adoram comidas do mundo,
              e dessa forma buscamos levar a culinariapara os que tambem estão longe!
            </p>
          </section>

          <section className="listas">

            <h4> 📍 Principais Destinos</h4>

            <a href="https://www.vinhedo.sp.gov.br/" target="_blank"> 🍇 Vinhedo </a>

            <br />

            <a href="https://www.valinhos.sp.gov.br/" target="_blank"> ✨ Valinhos </a>

            <br />

            <a href="https://campinas.sp.gov.br/" target="_blank"> 🍊 Campinas </a>

            <br />

            <a href="https://www.louveira.sp.gov.br/" target="_blank"> 🌭 Louveira </a>

          </section>

          <section className="listas">

            <h4> 🍳 Recomendações </h4>

            <Link id="link" to="/macarrao" target="_blank"> Macarrão </Link>

            <br />

            <Link id="link" to="/pizza" target="_blank"> Pizza </Link>

            <br />

            <Link id="link" to="/hamburguer" target="_blank"> Hambúrguer </Link>

          </section>

          <section className="listas">

            <h4> 🛒 Principais Restaurantes </h4>

            <a href="https://www.mcdonalds.com.br/" target="_blank"> McDonald's </a>

            <br />

            <a href="https://www.burgerking.com.br/" target="_blank"> Burguer King </a>

            <br />

            <a href="https://pizzahut.com.br/" target="_blank"> Pizza Hut </a>

            <br />

            <a href="https://www.smokeysburger.com.br/smokeysburguerbar/smokeysburguerbar?dd=menu" target="_blank"> Smokeys Burguer </a>

            <br />

            <a href="https://www.macarronada.com.br/" target="_blank"> Macarronada Italiana </a>

          </section>
          
        </section>

        <img className="imgLogo" src={logoG3} />

        <hr />

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
  );
}

export default Footer;
