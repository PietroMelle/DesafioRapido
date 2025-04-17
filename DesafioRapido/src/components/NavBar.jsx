import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar(props) {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> <span id={props.home}>Home 🏡</span> </Link>

      <Link className="fonte" id="link" to="/interlaken-suica"> <span id={props.suica}>Macarão 🍝</span> </Link>

      <Link className="fonte" id="link" to="/paris-franca"> <span id={props.franca}>Pizza 🍕</span> </Link>

      <Link className="fonte" id="link" to="/disney-eua"> <span id={props.disney}>Hamburguer 🍔</span> </Link>

      <Link className="fonte" id="link" to="/newyork-eua"> <span id={props.newyork}>Contato 📲</span> </Link>
    </nav>
  );
}
export default Navbar;
