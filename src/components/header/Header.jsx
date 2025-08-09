import React, {useContext} from "react";
import user from "../../data/profile.json";
import Links from "../links";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/UserContext";
import styles from "./header.module.css";

const Header = () => {

  const {profile} = user;
  const {addedProduct} = useContext(CartContext);
  const {userCredit} = useContext(UserContext);
  const {headerComponent, headerContent, headerTitle, headerContentSpan, headerContentCart, headerContentCredit} = styles;

    return (<header className={headerComponent}>
        <div className={headerTitle}>
          <Links to={"/"} text="Tienda de productos" />
          </div>
          <div className={headerContent}>
            <span className={headerContentSpan}>{profile?.firstName}</span>
            <span className={headerContentCart}><Links to={"/cart"} text={`Carrito (${addedProduct.length})`} /></span>
            <span className={headerContentCredit}>Credito ${userCredit}</span>
        </div>
      </header>)
};

export default Header;