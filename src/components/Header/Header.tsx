import React from 'react';
import cl from "./header.module.css";

const Header = () => {
    return (
        <header className={cl.header}>
            <div>FRONT</div>
            <div>Войти</div>
        </header>
    );
};

export default Header;