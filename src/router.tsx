import Home from "./pages/Home";
import Restas from "./pages/Restas";
import Sumas from "./pages/Sumas";
import NotFound from "./pages/NotFound";

export const routers = [
  {
    path: "/",
    name: "home",
    element: <Home />,
  },
  {
    path: "/sumas",
    name: "sumas",
    element: <Sumas />,
  },
  {
    path: "/restas",
    name: "restas",
    element: <Restas />,
  },
  /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
  {
    path: "*",
    name: "404",
    element: <NotFound />,
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
