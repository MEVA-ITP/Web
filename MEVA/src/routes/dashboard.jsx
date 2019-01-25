// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import Notifications from "@material-ui/icons/Notifications";
import camera_alt from "@material-ui/icons/CameraAlt";
import vertical_split from "@material-ui/icons/VerticalSplit";
import attach_money from "@material-ui/icons/AttachMoney";
import notifications_active from "@material-ui/icons/NotificationsActive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Hardware from "views/Hardware/Hardware.jsx";
import Bundles from "views/Bundles/Bundles.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import admincmdpage from "views/AdminConsole/admincmd.jsx";
import Logout from "@material-ui/icons/KeyboardTab";


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
        icon: "camera_alt",
        component: Hardware
    },
    {
        path: "/Bundles",
        sidebarName: "Bundles",
        navbarName: "Bundles",
        icon: "vertical_split",
        component: Bundles
    },
    {
        path: "/icon",
        sidebarName: "Loaned Products",
        navbarName: "Loaned Products",
        icon: "attach_money",
        component: Icons
    },
    {
        path: "/AdminConsole",
        sidebarName: "AdminCMD",
        navbarName: "AdminCMD",
        icon: "developer_board",
        component: admincmdpage
    },
    {
        path: "/notifications",
        sidebarName: "Notifications",
        navbarName: "Notifications",
        icon: "notifications_active",
        component: NotificationsPage
    },
    {
        path: "/login",
        sidebarName: "Logout",
        navbarName: "Logout",
        icon: "keyboard_tab",
        component: NotificationsPage
    },
    {redirect: true, path: "/", to: "/login", navbarName: "Redirect"}
];

export default dashboardRoutes;
