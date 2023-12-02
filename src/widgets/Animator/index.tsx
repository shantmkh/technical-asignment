import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "routes";

export const Animator: React.FC<{}> = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.Component />}
          ></Route>
        ))}
      </Routes>
    </AnimatePresence>
  );
};
