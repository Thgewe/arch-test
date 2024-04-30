import React from 'react';
import cl from "./header.module.css";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../shared/utils/constants";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className={cl.header}>
            <Link to={HOME_ROUTE} className={cl.logo}>SHIKI</Link>
            <Navbar />
        </header>
    );
};

export default Header;