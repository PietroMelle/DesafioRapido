// Style
import "./Header.css";
//.

// Imagens
import logo from "../assets/logoG3.png";
import ImgGitHub from "../assets/github.png";
//.

function Header() {
  return (
    <>
      <header className="headerBox">

        <img className="logoHeader" src={logo} alt="Grupo03" />

        <h1>Avocado & Sabor</h1>

        <a href="https://github.com/PietroMelle/DesafioRapido" target="_blank" rel="Link Github Projeto" >

          <img className="imgGithub" src={ImgGitHub} alt="Logo Github" />

        </a>
        
      </header>
    </>
  );
}

export default Header;
