import App from "./pages/App";
import Home from "./pages/Home";
const routes = [
  {
    path: "/",
    component: App,
    indexRoute: { component: Home },
    // childRoutes: [{ path: "signin", component: Signin }],
  },
];
export default routes;
