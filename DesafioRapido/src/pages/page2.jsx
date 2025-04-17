import "../pages/style/Page2.css"
import Card from "../components/Card"
import Header from "../components/Header";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

function Pagina2 () {
    return (
      <>
      <Header />
      <Navbar franca="ativo"/>
      <br />
      <br />
      <center>
      <section className="tituloECard">
        <h1> França </h1>
        <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-franca-bandeira_53876-27099.jpg" alt="França" />
        </section>
      <Card 
       Foto="https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/"
       Titulo="Paris - França"
       Descricao="Paris, a capital da França, é famosa por sua beleza e cultura. A Torre Eiffel, o Louvre e a Catedral de Notre-Dame são ícones da cidade. Com seus cafés e restaurantes, Paris é um paraíso gastronômico. A cidade é um centro de arte, moda e história. Seu charme romântico atrai visitantes de todo o mundo."
       Estrelas="⭐⭐⭐⭐"
       Valor="Valor: R$ 5000,00"
       Proximo='Proximo'
       Link="http://localhost:5173/disney-eua"
      />
  </center>
  <br/>
  <br/>
  <br/>
  <br/>
  
<Footer/>
      </>
    );
  }
  
  export default Pagina2;