import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import ProfilPage from "./pages/ProfilPage";
import EvenementsPage from "./pages/EventsPage";
import AProposPage from "./pages/AboutPage";
import ContactsPage from "./pages/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profil",
        element: <ProfilPage />,
      },
      {
        path: "/evenements",
        element: <EvenementsPage />,
      },
      {
        path: "/about",
        element: <AProposPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
