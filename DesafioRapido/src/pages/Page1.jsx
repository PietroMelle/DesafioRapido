import "../pages/style/Page1.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

function Page1() {
  return (
    <>
      <Header />

      <Navbar macarrao="ativo" />

      <br />
      <br />

      <center>

        <section className="tituloECard">
          <h1> Macarrão </h1>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png"
            alt="Itália"
          />
        </section>

        <Card
          Foto="https://pubimg.band.uol.com.br/files/b28b567bb0fe51168a8f.png"
          Titulo="Macarrão"
          Descricao="Um clássico da culinária italiana com um toque especial. A massa al dente é envolta em um molho rústico de tomates maduros e 
          finalizada com pedaços generosos de bacon crocante, que acrescentam sabor defumado e marcante. A cebolinha fresca e o tomate-cereja 
          completam a apresentação com frescor e sofisticação."
          Estrelas="⭐⭐⭐⭐⭐"
          Valor="Valor: R$ 234,90"
          Proximo="Proximo"
          Link="http://localhost:5173/pizza"
        />

      </center>

      <br />
      <br />

      <Footer />
    </>
  );
}

export default Page1;
