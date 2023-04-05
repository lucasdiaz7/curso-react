import { Link, useParams } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.containerNavbar}>
      <Link to="/">
        <img src="https://res.cloudinary.com/dmgvv9nbt/image/upload/v1680536650/curso-react/logo/Logo_sobre_moda_femenina_minimalista_neutral_2_z8maay-removebg-preview_ok0qqd.png" alt="" className={style.img} />
      </Link>
      {/* <h2 className={style.h2} >Nombre del proyecto</h2> */}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
}
