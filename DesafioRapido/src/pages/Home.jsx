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
                <marquee behavior="scroll" direction="left" scrollamount="12" scrolldelay="60"><h1><i className="fa-solid fa-plane"></i>--<span id="bandeira">AS <span id="azul">MELHORES</span> VIAGENS DO <span id="azul">MUNDO INTEIRO</span></span></h1></marquee>
            </section>
            <section className="TituloDosPacotes">
                <h1>Descubra o Mundo: Pacotes de Viagem Imperdíveis para Destinos Incríveis! ⬇ </h1>    
            </section>
            <section className="cards">
                <Card
                    imagem= "https://www.travelmate.com.br/wp-content/uploads/2024/01/Chateau-dOex-Suica-1024x767.png"
                    nomeLugar= "Interlaken - Suiça"
                    breveDescricao= "Interlaken é uma cidade na Suíça, entre os lagos Thun e Brienz, cercada pelos Alpes. Um lugar para quem busca beleza natural e tranquilidade."
                    direcionar= "http://localhost:5173/interlaken-suica"
                    valor= "R$ 4.569.20"
                    estrela= "⭐⭐⭐⭐⭐"
                />

                <Card
                    imagem= "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/"
                    nomeLugar= "Paris - França"
                    breveDescricao= "Paris, a capital da França, é famosa por sua beleza e cultura. Com seus cafés e restaurantes, Paris é um paraíso gastronômico."
                    direcionar= "http://localhost:5173/paris-franca"
                    estrela = "⭐⭐⭐⭐"
                    valor= "R$ 5.000,00"
                />

                <Card
                    imagem= "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/02/comemoracao-disney-e1614010798887.jpg?w=750"
                    nomeLugar= "Disney - EUA"
                    breveDescricao= "A Disney é um destino mágico, conhecido pelos seus parques temáticos e atrações para todas as idades."
                    direcionar= "http://localhost:5173/disney-eua"
                    valor= "R$ 4.895,00"
                    estrela= "⭐⭐⭐⭐⭐"
                />

                <Card
                    imagem= {NewYork}
                    nomeLugar= "Nova Iorque - EUA"
                    breveDescricao= "Nova York é uma cidade globalmente famosa, conhecida pela sua energia vibrante, a Estátua da Liberdade, Times Square e Central Park."
                    direcionar= "http://localhost:5173/newyork-eua"
                    estrela = "⭐⭐⭐⭐"
                    valor= "R$ 2.389.10"
                />
            </section>
            <Footer />
        </>
    )
}

export default Home