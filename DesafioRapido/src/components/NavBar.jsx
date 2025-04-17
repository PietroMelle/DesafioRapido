import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar(props) {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> <span id={props.home}>Home 🏡</span> </Link>

      <Link className="fonte" id="link" to="/macarrao"> <span id={props.macarrao}>Macarão 🍝</span> </Link>

      <Link className="fonte" id="link" to="/pizza"> <span id={props.pizza}>Pizza 🍕</span> </Link>

      <Link className="fonte" id="link" to="/hamburguer"> <span id={props.hamburguer}>Hamburguer 🍔</span> </Link>

      <Link className="fonte" id="link" to="/contato"> <span id={props.contato}>Contato 📲</span> </Link>
    </nav>
  );
}
export default Navbar;
