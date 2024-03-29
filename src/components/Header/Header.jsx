import styles from "./Header.module.scss";
import cookCDA from "../../assets/images/logo.png";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";

function Header({ setPage}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img onClick={() => setPage("homepage")} src={cookCDA} alt="logo cookCDA" />
      </div>
      <ul className={styles.headerList}>
        <button onClick={() => setPage("admin")} className="mr-5 btn btn-primary">Ajouter une recette</button>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu setPage={setPage} />
        </>
      )}
    </header>
  );
}

export default Header;