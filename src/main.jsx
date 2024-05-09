import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import ProfilPage from "./pages/ProfilePage/ProfilPage";
import EvenementsPage from "./pages/EventsPage/EventsPage";
import AProposPage from "./pages/About/AboutPage";
import ContactsPage from "./pages/Contacts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import CookiePolicy from "./pages/CookiePolicy/CookiePolicy";

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
        path: "/profile",
        element: <ProfilPage />,
      },
      {
        path: "/events",
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
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/TermsOfUse",
        element: <TermsOfUse />,
      },
      {
        path: "/CookiePolicy",
        element: <CookiePolicy />,
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
