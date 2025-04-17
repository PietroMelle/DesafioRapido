import Card from "../components/Card"
import Header from "../components/Header"
import NovaYork from "../assets/NewYork.png"
import Footer from "../components/Footer"
import Navbar from "../components/NavBar"

function Page4(){
    return (
        <>
        <Header/>
        <Navbar newyork="ativo"/>
        <br />
      <br />

      <center>
      <section className="tituloECard">
        <h1> New York </h1>
        <img src="https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-dos-estados-unidos.png/@@images/image.png" alt="Estados Unidos" />
        </section>
        <Card 
         Foto={NovaYork}
         Titulo="Nova York - Estados Unidos"
         Descricao="Nova York é uma cidade globalmente famosa, conhecida pela sua energia vibrante, diversidade cultural e marcos como a Estátua da Liberdade, Times Square e Central Park. Composta por cinco distritos, é um centro financeiro, cultural e artístico, com destaque para a Broadway, museus renomados e uma vida urbana intensa."
         Estrelas="⭐⭐⭐⭐"
         Valor="Valor: R$ 2.389.10"
         Proximo='Proximo'
         Link = "http://localhost:5173/interlaken-suica"
        />
    </center>
    
<br></br>
<br></br>
<br></br>

    <Footer/>
        </> 
      );
}

export default Page4