import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/NavBar"

function Page3() {
  return (
    <>
      <Header />
      <Navbar disney="ativo"/>

      <br />
      <br />

      <center>
      <section className="tituloECard">
        <h1> Disney </h1>
        <img src="https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-dos-estados-unidos.png/@@images/image.png" alt="Estados Unidos" />
        </section>
        <Card
          Foto="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/02/comemoracao-disney-e1614010798887.jpg?w=750"
          Titulo="Disney - Estados Unidos"
          Descricao="A Disney é um lugar mágico onde sonhos ganham vida! Com parques temáticos incríveis, personagens encantados 
          e atrações para todas as idades, oferece experiências inesquecíveis para toda a família. Seja em Orlando, Paris, 
          Tóquio ou outras localizações, a Disney é um destino perfeito para quem busca diversão, aventura e momentos de pura fantasia."
          Estrelas="⭐⭐⭐⭐⭐"
          Valor="Valor: 4.895,00"
          Proximo="Proximo"
          Link="http://localhost:5173/newyork-eua"
        />
      </center>

      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Page3;
