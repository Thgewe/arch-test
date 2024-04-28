import MainPage from "../pages/MainPage/MainPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import {Navigate, RouteObject} from "react-router-dom";
import {
    ALL_ANIME_PAGE_ROUTE,
    ALL_MANGA_PAGE_ROUTE,
    ANIME_PAGE_ROUTE,
    APP_ROUTE,
    HOME_ROUTE, MANGA_PAGE_ROUTE,
    NEWS_PAGE_ROUTE
} from "../utils/constants";
import AnimePage from "../pages/AnimePage/AnimePage";
import App from "../App";
import AllAnimePage from "../pages/AllAnimePage/AllAnimePage";
import AllMangaPage from "../pages/AllMangaPage/AllMangaPage";
import MangaPage from "../pages/MangaPage/MangaPage";

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
                path: ALL_ANIME_PAGE_ROUTE,
                element: <AllAnimePage />
            },
            {
                path: ANIME_PAGE_ROUTE,
                element: <AnimePage />
            },
            {
                path: ALL_MANGA_PAGE_ROUTE,
                element: <AllMangaPage />
            },
            {
                path: MANGA_PAGE_ROUTE,
                element: <MangaPage />
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