import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/NavBar";

function Page3() {
  return (
    <>
      <Header />
      <Navbar hamburguer="ativo" />

      <br />
      <br />

      <center>

        <section className="tituloECard">
          <h1> Hambúrguer </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
            alt="Alemanha"
          />
        </section>

        <Card
          Foto="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/05/28/shutterstock1471297691-768x539.jpg"
          Titulo="Hambúrguer"
          Descricao="Duas carnes suculentas, cobertas com cheddar derretido e queijo prato, combinadas com bacon crocante e um creme especial 
          que dá o toque final. Servido em um pão macio e tostado, é a pedida certa pra quem busca sabor sem limites."

          Valor="Valor: R$ 105,50"
          Proximo="Proximo"
          Link="http://localhost:5173/contato"
        />
      </center>

      <br />
      <br />

      <Footer />     
    </>
  );
}

export default Page3;
