import MainPage from "../pages/MainPage/MainPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import {Navigate, RouteObject} from "react-router-dom";
import {ANIME_PAGE_ROUTE, APP_ROUTE, HOME_ROUTE, NEWS_PAGE_ROUTE} from "../utils/constants";
import AnimePage from "../pages/AnimePage/AnimePage";
import App from "../App";

// TODO: 404 route

const routes: RouteObject[] = [
    {
        path: APP_ROUTE,
        element: <App />,
        children: [
            {
                path: NEWS_PAGE_ROUTE,
                element: <NewsPage />,
            },
            {
                path: ANIME_PAGE_ROUTE,
                element: <AnimePage />
            },
            {
                path: HOME_ROUTE,
                element: <MainPage />,
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to={HOME_ROUTE} />
    }
]

export default routes;