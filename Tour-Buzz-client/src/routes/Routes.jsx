import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Profile from "../pages/Profile";
import AddSpot from "../pages/AddSpot";
import MyList from "../pages/MyList";
import Contact from "../pages/Contact";
import AllSpot from "../pages/AllSpot";
import Root from "../layout/Root";
import Update from "../pages/Update";
import Country from "../pages/Country";
import CountrySpot from "../pages/CountrySpot";
import AllSpotNav from "../pages/AllSpotNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allSpots",
        element: <AllSpotNav></AllSpotNav>,
      },

      {
        path: "/allSpot/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/addSpot",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/country/:country",
        element: <CountrySpot></CountrySpot>,
      },
    ],
  },
  {
    path: "/country",
    element: <Country></Country>,
  },
  {
    path: "/allSpot",
    element: <AllSpot></AllSpot>,
    //loader: () => fetch("https://assignment-10-server-amber-sigma.vercel.app/allSpot"),
  },
]);

export default router;
