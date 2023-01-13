import { createBrowserRouter, Navigate } from "react-router-dom"

import Root from "../pages/Root"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import About from "../pages/About"

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])