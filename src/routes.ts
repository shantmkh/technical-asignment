import { WithSuspense } from "app/WithSuspense";
import { lazy } from "react";
import { ObjectGeneric, ObjectType } from "utils/types/generic";

const Home: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import("pages/home/Home"));
const Users = lazy(() => import("pages/users/Users"));
const UserDetails = lazy(() => import("pages/user-details/UserDetails"));

export const routes = [
  {
    name: "Home",
    isMenuItem: true,
    path: "/",
    Component: WithSuspense(Home)
  },
  {
    name: "Users",
    isMenuItem: true,
    path: "/users",
    Component: WithSuspense(Users)
  },
  {
    name: "User-details",
    isMenuItem: false,
    path: "/user/:id",
    Component: WithSuspense(UserDetails)
  }
]

type PathAccumiator = {
  paths?: ObjectGeneric<ObjectType>;
  menuItems: ObjectType[]
}

export const { menuItems }: PathAccumiator = routes.reduce((acc: PathAccumiator, { isMenuItem, name, path }) => {
  const pathItem = { name, path };

  isMenuItem && acc.menuItems.push(pathItem);
  // paths[name] = pathItem;

  return acc;
}, { menuItems: [] })