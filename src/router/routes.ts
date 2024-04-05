import IRoute from "../models/routes/IRoute";
import App from "../App";

const routes: IRoute[] = [
    {
        path: "/",
        element: App(),
    },
]

export default routes;