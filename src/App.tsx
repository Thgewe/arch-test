import React from 'react';
import cl from './App.module.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={cl.App} data-theme="default" id="root-app">
            <div className={cl.header}>
                <Header />
            </div>
            <main className={cl.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
