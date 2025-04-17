// Style
import "./style/Home.css"
//.

// Componentes
    import Header from "../components/Header"
    import Navbar from "../components/NavBar"
    import Card from "../components/CardHome"
    import Footer from "../components/Footer"
//.

// Fotos
    import NewYork from "../assets/NewYork.png"
//.

function Home(){
    return(
        <>
            <Header />
            <Navbar home="ativo" />
            <section className="banner">
                <marquee behavior="scroll" direction="left" scrollamount="12" scrolldelay="60"><h1><i className="fa-solid fa-car-side"></i>--<span id="bandeira">AS <span id="azul">MELHORES</span> COMIDAS DO MUNDO <span id="azul">MUNDO INTEIRO</span></span></h1></marquee>
            </section>
            <section className="TituloDosPacotes">
                <h1>Seu prato favorito a um clique de distância! ⬇ </h1>    
            </section>
            <section className="cards">
                <Card
                    imagem= "https://static.itdg.com.br/images/auto-auto/c1180110f60a81e69c3abebb26c8095d/shutterstock-451962982.jpg"
                    nomeLugar= "Macarão"
                    breveDescricao= "Macarrão cremoso, cheio de sabor e feito com aquele toque especial.
Bateu a fome? Pede o seu e deixa a gente cuidar do resto! 🍝"
                    direcionar= "http://localhost:5173/interlaken-suica"
    
                />

                <Card
                    imagem= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SofOZHMjOuyes_ICN-LM8SPrUEsoPIj24A&s"
                    nomeLugar= "Pizza"
                    breveDescricao= "Massa leve, borda crocante e recheio que transborda sabor.
A pizza dos seus sonhos tá só a um pedido de distância! 🍕"
                    direcionar= "http://localhost:5173/paris-franca"
                  
                />

                <Card
                    imagem= "https://gourmetdemexico.com.mx/wp-content/uploads/2015/11/food-porn-hamburguesa.jpg"
                    nomeLugar= "Hamburguer"
                    breveDescricao= "Hambúrguer suculento, queijo derretendo e muito sabor em cada mordida.
Pede agora e deixa a explosão de sabor chegar até você! 🍔"
                    direcionar= "http://localhost:5173/disney-eua"
                   
                />

               
            </section>
            <Footer />
        </>
    )
}

export default Home