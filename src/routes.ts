import { WithSuspense } from "app/WithSuspense";
import { lazy } from "react";

const Home: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import("pages/home/Home"));
const Users = lazy(() => import("pages/users/Users"));
const UserDetails = lazy(() => import("pages/user-details/UserDetails"));

export const routes = [
  {
    name: "home",
    path: "/",
    Component: WithSuspense(Home)
  },
  {
    name: "users",
    path: "/users",
    Component: WithSuspense(Users)
  },
  {
    name: "user-details",
    path: "/user/:id",
    Component: WithSuspense(UserDetails)
  }
]