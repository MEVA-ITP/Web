// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Hardware from "views/Hardware/Hardware.jsx";
import Bundles from "views/Bundles/Bundles.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/user",
        sidebarName: "User Profile",
        navbarName: "Profile",
        icon: Person,
        component: UserProfile
    },
    {
        path: "/Hardware",
        sidebarName: "Hardware",
        navbarName: "Hardware",
        icon: "content_paste",
        component: Hardware
    },
    {
        path: "/Bundles",
        sidebarName: "Bundles",
        navbarName: "Bundles",
        icon: LibraryBooks,
        component: Bundles
    },
    {
        path: "/icons",
        sidebarName: "Loaned Products",
        navbarName: "Loaned Products",
        icon: BubbleChart,
        component: Icons
    },
    {
        path: "/notifications",
        sidebarName: "Notifications",
        navbarName: "Notifications",
        icon: Notifications,
        component: NotificationsPage
    },
    {redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect"}
];

export default dashboardRoutes;
