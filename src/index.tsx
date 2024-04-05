import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/index.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./router/routes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(routes);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);