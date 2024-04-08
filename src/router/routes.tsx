import MainPage from "../pages/MainPage/MainPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import {RouteObject} from "react-router-dom";
import {ANIME_PAGE_ROUTE, HOME_ROUTE, NEWS_PAGE_ROUTE} from "../utils/constants";
import AnimePage from "../pages/AnimePage/AnimePage";

const routes: RouteObject[] = [
    {
        path: HOME_ROUTE,
        element: <MainPage />,
    },
    {
        path: NEWS_PAGE_ROUTE,
        element: <NewsPage />,
    },
    {
        path: ANIME_PAGE_ROUTE,
        element: <AnimePage />
    }

]

export default routes;