import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import AboutDepartment from "./components/AboutDepartment";
import Faculty from "./components/Faculty";
import Material from "./components/Material";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: AboutDepartment },
      { path: "faculty", Component: Faculty },
      { path: "material", Component: Material },
    ],
  },
]);
