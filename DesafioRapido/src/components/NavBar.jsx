import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar(props) {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> <span id={props.home}>Home 🏡</span> </Link>

      <Link className="fonte" id="link" to="/interlaken-suica"> <span id={props.suica}>Suiça 🛫</span> </Link>

      <Link className="fonte" id="link" to="/paris-franca"> <span id={props.franca}>França 🛬</span> </Link>

      <Link className="fonte" id="link" to="/disney-eua"> <span id={props.disney}>Disney 🛫</span> </Link>

      <Link className="fonte" id="link" to="/newyork-eua"> <span id={props.newyork}>New York 🛬</span> </Link>
    </nav>
  );
}
export default Navbar;
