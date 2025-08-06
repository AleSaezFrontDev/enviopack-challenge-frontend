import React from "react";
import user from "../../data/profile.json";
import { Link } from "react-router-dom";

const Header = () => {
  const {profile} = user;
    return (<header>
        <ul>
          <h1>Tienda de productos</h1>
          <span>{profile?.firstName}</span>
          <Link to={"/cart"}>Carrito</Link>
          <span>Credito ${profile?.credit}</span>
        </ul>
      </header>)
};

export default Header;