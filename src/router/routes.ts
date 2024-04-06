import IRoute from "../models/routes/IRoute";
import MainPage from "../pages/MainPage/MainPage";

const routes: IRoute[] = [
    {
        path: "/",
        element: MainPage(),
    },
]

export default routes;