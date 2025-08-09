import React from "react";
import styles from "./title.module.css";

const Title = ({text}) => {
    const {title} = styles;

    return <h1 className={title}>{text}</h1>
};

export default Title;