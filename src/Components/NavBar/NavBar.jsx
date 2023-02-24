import CartWidget from "../CartWidget/CartWidget";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.containerNavbar}>
      <h3>Logo</h3>
      <h2>Nombre del proyecto</h2>

      <ul className={style.containerList}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>

      <CartWidget />
    </div>
  );
}
