import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import KerafoxyPage from "../pages/info/kerafoxy/page";
import KerafoxyPricePage from "../pages/info/kerafoxy-price/page";
import KerafoxyProductPage from "../pages/info/kerafoxy-product/page";
import ComparisonPage from "../pages/info/comparison/page";
import WhyGroutPage from "../pages/info/why-grout/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info/kerafoxy",
    element: <KerafoxyPage />,
  },
  {
    path: "/info/kerafoxy-price",
    element: <KerafoxyPricePage />,
  },
  {
    path: "/info/kerafoxy-product",
    element: <KerafoxyProductPage />,
  },
  {
    path: "/info/comparison",
    element: <ComparisonPage />,
  },
  {
    path: "/info/why-grout",
    element: <WhyGroutPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
