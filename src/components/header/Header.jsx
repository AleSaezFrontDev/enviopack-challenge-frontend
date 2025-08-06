import React from "react";
import user from "../../data/profile.json";
import { Link } from "react-router-dom";

const Header = () => {
  const {profile} = user;
    return (<header>
        <ul>
          <Link to={"/"}>Tienda de productos</Link>
          <span>{profile?.firstName}</span>
          <Link to={"/cart"}>Carrito</Link>
          <span>Credito ${profile?.credit}</span>
        </ul>
      </header>)
};

export default Header;