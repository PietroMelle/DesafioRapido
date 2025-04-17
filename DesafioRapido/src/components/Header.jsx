// Style
    import "./Header.css"
//.

// Imagens
    import logo from "../assets/logoG3.png"
    import ImgGitHub from "../assets/github.png"
//.

function Header() {
    return(
        <>
            <header className="headerBox">
                <img className="logoHeader" src={logo} alt="Grupo03" />
                <h1>Avocados Viagens</h1>
                <a href="https://github.com/vitorcecato-sesi/desafio2-react-routes" target="_blank" rel="Link Github Projeto">
                    <img className="imgGithub" src={ImgGitHub} alt="Logo Github" />
                </a>
            </header>
        </>
    )
}

export default Header