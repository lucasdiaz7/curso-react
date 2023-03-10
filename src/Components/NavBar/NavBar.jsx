import { Link, useParams } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.containerNavbar}>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <h2>Nombre del proyecto</h2>

      <ul className={style.containerList}>
        <Link to="/">
          <li>Todas</li>
        </Link>
        <Link to="/category/urbanas">
          <li>Urbanas</li>
        </Link>
        <Link to="/category/deportivas">
          <li>Deportivas</li>
        </Link>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
}
