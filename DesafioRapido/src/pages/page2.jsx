import "../pages/style/Page2.css"
import Card from "../components/Card"
import Header from "../components/Header";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

function Pagina2 () {
    return (
      <>
      <Header />
      <Navbar pizza="ativo"/>
      <br />
      <br />
      <center>
      <section className="tituloECard">
        <h1> Pizza </h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png" alt="Itália" />
        </section>
      <Card 
       Foto="https://forbes.com.br/wp-content/uploads/2021/07/Life_Dia-da-Pizza-Veridiana-Margherita_8julho2021_Divulgacao.jpg"
       Titulo="Paris - França"
       Descricao="Massa leve e borda crocante, coberta com molho de tomate fresco, queijo derretido e folhas de manjericão. Um clássico italiano 
       que une simplicidade, frescor e sabor em cada fatia."
       Estrelas="⭐⭐⭐⭐⭐"
       Valor="Valores"
       Valor1="Pequena (4 Pedaços): R$ 89,90"
       Valor2="Média (6 Pedaços): R$ 139,90"
       Valor3="Grande (8 Pedaços): R$ 189,90"
       Proximo='Proximo'
       Link="http://localhost:5173/hamburguer"
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