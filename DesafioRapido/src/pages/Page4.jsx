import { useState } from "react";
import { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "../pages/style/Page4.css"

function Page4() {
  const [nome, setNome] = useState(() => JSON.parse(localStorage.getItem("nome")) || [])
  const [email, setEmail] = useState(() => JSON.parse(localStorage.getItem("email")) || [])
  const [genero, setGenero] = useState(() => JSON.parse(localStorage.getItem("genero")) || [])
  const [escolaridade, setEscolaridade] = useState(() => JSON.parse(localStorage.getItem("escolaridade")) || [])
  const [telefone,setTelefone] = useState(() => JSON.parse(localStorage.getItem("telefone")) || [])
  const [pedido,setPedido] = useState(() => JSON.parse(localStorage.getItem("pedido")) || [])

  useEffect(() => {
    localStorage.setItem("nome", JSON.stringify(nome));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("genero", JSON.stringify(genero));
    localStorage.setItem("escolaridade", JSON.stringify(escolaridade));
    localStorage.setItem("telefone", JSON.stringify(telefone));
    localStorage.setItem("pedido", JSON.stringify(pedido));
  }, [nome,email,genero,escolaridade,telefone,pedido]);

  function handleSubmit(e) {
    e.preventDefault(); //pausa e só vai para a próxima fase se estiver tudo 100% ok
    alert(`Cadastro feito!
      Nome: ${nome}
      Email: ${email}
      Gênero: ${genero}
      Escolaridade: ${escolaridade}
      Telefone: ${telefone}
      Escolha do Pedido: ${pedido} `)
  }

  function escolherPrato(e) {
    const prato = e.target.value 
    const encontrarPrato = pedido.find(pratoArray => pratoArray === prato)
    if (encontrarPrato) {
      const novosPratos = pedido.filter((conteudo) => conteudo !== prato)
      setPedido(novosPratos)
    } else {
      const novosPratos = [...pedido, prato]
      setPedido(novosPratos)
    }
  }

  return (
    <>
      <Header />
      <Navbar newyork="ativo" />
      <br />
      <br />

      <section className="contatoBody"> 
        <section className="tituloECard">
          <h1> Contato 👤 </h1>
        </section>

        <br/>

        <section className="contatoCard">
          <form onSubmit={handleSubmit}>
            Nome:
            <br/>
            <input className="input"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <br />
            <br />


            Email:
            <br/>
            <input className="input"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            Gênero:
            <label className="genero">
              <br/>
              <input className="input"
                type="radio"
                value="Masculino"
                checked={genero === "Masculino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              Masculino
              
              <input className="input"
                type="radio"
                value="Feminino"
                checked={genero === "Feminino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              Feminino
            </label>

            <br />

            Escolaridade:
            <br/>
            <select className="input" value={escolaridade} onChange={(e) => setEscolaridade(e.target.value)}>
              <option value=""> Selecione sua escolaridade </option>
              <option value="Ensino Fundamental Incompleto"> Ensino Fundamental Incompleto </option>
              <option value="Ensino Fundamental Completo"> Ensino Fundamental Completo </option>
              <option value="Ensino Médio Incompleto"> Ensino Médio Incompleto </option>
              <option value="Ensino Médio Completo"> Ensino Médio Completo </option>
              <option value="Curso Superior Incompleto"> Curso Superior Incompleto </option>
              <option value="Curso Superior Completo"> Curso Superior Completo </option>
              <option value="Pós-Graduação"> Pós-Graduação </option>

            </select>

            <br />
            <br />

            <label>
              Telefone:
              <br/>
              <input className="input"
              type="tel"
              value={telefone}
              placeholder="Digite seu telefone"
              onChange={(e) => setTelefone(e.target.value)}
              />
            </label>

            <br/>
            <br/>

            <label>
              Escolha seu Prato: 
              <br/>
              <input type="checkbox" value="Pedido1" onChange={(e) => escolherPrato(e)}/>
              <label> Prato 1 </label>
              <br/>
              <input type="checkbox" value="Pedido2" onChange={(e) => escolherPrato(e)}/>
              <label> Prato 2</label>
              <br/>
              <input type="checkbox" value="Pedido3" onChange={(e) => escolherPrato(e)}/>
              <label> Prato 3 </label>
            </label>

            <br />
            <br />

            <center>
              <button className="botao" type="submit"> Cadastrar </button>
            </center>

          </form>
        </section>
        </section>
  

      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </>
  );
}

export default Page4;
