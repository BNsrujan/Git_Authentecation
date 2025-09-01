import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(

 <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN || "dev-r0gwhgnlyas2rmvo.us.auth0.com"}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || "X8okWa1Kmv7YJ8BKA8mrVNBlQXZA4hJv"}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
