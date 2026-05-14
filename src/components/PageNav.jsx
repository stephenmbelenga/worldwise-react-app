import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <NavLink to="/pricing">Pricing</NavLink>
      </ul>
      <ul>
        <NavLink to="/product">Product</NavLink>
      </ul>
      <ul>
        <NavLink to="/login" className={styles.ctaLink}>
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default PageNav;
