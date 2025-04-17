import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar(props) {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> <span id={props.home}>Home 🏡</span> </Link>

      <Link className="fonte" id="link" to="/macarrao"> <span id={props.macarrao}>Suiça 🛫</span> </Link>

      <Link className="fonte" id="link" to="/pizza"> <span id={props.pizza}>França 🛬</span> </Link>

      <Link className="fonte" id="link" to="/hamburguer"> <span id={props.hamburguer}>Disney 🛫</span> </Link>

      <Link className="fonte" id="link" to="/contato"> <span id={props.contato}>New York 🛬</span> </Link>
    </nav>
  );
}
export default Navbar;
