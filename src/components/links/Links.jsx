import React from "react";
import { Link } from "react-router-dom";
import styles from "./links.module.css";

const Links = ({to, text = ""}) => {

    const {link} = styles;

    return <Link className={link} to={to}>{text}</Link>
};

export default Links;