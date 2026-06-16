import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomeDepartment from "./components/Home";
import Faculty from "./components/Faculty";
import Material from "./components/Material";
import About from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeDepartment },
      { path: "about", Component: About },
      { path: "faculty", Component: Faculty },
      { path: "material", Component: Material },
    ],
  },
]);
