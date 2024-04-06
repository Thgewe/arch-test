import React from 'react';
import cl from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            Powered by <a href={"https://shikimori.one/api/doc/1.0"}>ShikimoriAPI</a>
        </footer>
    );
};

export default Footer;