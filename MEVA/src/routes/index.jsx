import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "../views/Login/login";

const indexRoutes = [
    {path: "/login", component: Login},
    {path: "/", component: Dashboard},
];

export default indexRoutes;