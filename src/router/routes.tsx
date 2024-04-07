import MainPage from "../pages/MainPage/MainPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import {RouteObject} from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/news/:id",
        element: <NewsPage />,
    }
]

export default routes;