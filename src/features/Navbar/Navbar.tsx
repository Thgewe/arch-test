import React from 'react';
import cl from "./navbar.module.css";
import {NavLink} from "react-router-dom";

const main_routes = [{
    path: "/animes",
    name: "Аниме",
}, {
    path: "/mangas",
    name: "Манга",
}];

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            {main_routes.map((route) =>
                <NavLink
                    key={route.name}
                    to={route.path}
                    className={({isActive}) => isActive ? cl.active : ""}>{route.name}</NavLink>)
            }
        </nav>
    );
};

export default Navbar;