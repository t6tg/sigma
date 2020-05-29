import App from "./pages/App";
import Home from "./pages/Home";
import Signin from "./pages/Auth/Signin";
import Signout from "./pages/Auth/Signout";
import Task from "./pages/Task";
import RequireAuth from "./pages/Auth/Authentication";
import RequireAuthAdmin from "./pages/Auth/AuthenticationAdmin";
const routes = [
  {
    path: "/",
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      { path: "signin", component: Signin },
      { path: "signout", component: Signout },
      { path: "task", component: RequireAuth(RequireAuthAdmin(Task)) },
    ],
  },
];
export default routes;
