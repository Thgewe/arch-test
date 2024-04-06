import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./router/routes";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <div className="App" data-theme="default" id="root-app">
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    </div>
  );
}

export default App;
