import React, {useContext} from "react";
import user from "../../data/profile.json";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/UserContext";

const Header = () => {

  const {profile} = user;
  const {addedProduct} = useContext(CartContext);
  const {userCredit} = useContext(UserContext);

    return (<header>
        <ul>
          <Link to={"/"}>Tienda de productos</Link>
          <span>{profile?.firstName}</span>
          <Link to={"/cart"}>{`Carrito (${addedProduct.length})`}</Link>
          <span>Credito ${userCredit}</span>
        </ul>
      </header>)
};

export default Header;