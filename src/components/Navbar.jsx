import { useLocation, Link } from "react-router-dom";
import spaceLogo from "../assets/images/space_logo.png";

import styles from "./Navbar.module.css";
import NavBurger from "./icon/NavBurger";

function Navbar() {
  const location = useLocation();

  const isActive = parameter => {
    return (location.pathname === parameter) ? styles.active : ''
  }

  const showNavbar = () => {
    const $navbar = document.querySelector('#navbar')
    $navbar.classList.toggle(styles.navbar_active)
  }


  return (
    <header className={styles.nav_container}>
      <img src={spaceLogo} alt="Logo" />
      <NavBurger handleClick={showNavbar} />
      <nav id="navbar" className={styles.navbar}>
        <ul>
          <li className={`${isActive('/home')}`}>
            <Link to="/" className={styles.navlink}>
              <strong>00</strong>
              HOME
            </Link>
          </li>
          <li className={isActive("/destination")}>
            <Link to="/destination" className={styles.navlink}>
              <strong>01</strong>
              DESTINATION
            </Link>
          </li>
          <li className={isActive("/crew")}>
            <Link to="/crew" className={styles.navlink}>
              <strong>02</strong>
              CREW
            </Link>
          </li>
          <li className={isActive("/technology")}>
            <Link to="/technology" className={styles.navlink}>
              <strong>03</strong>
              TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
