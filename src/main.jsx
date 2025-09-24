import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || "/"
  );
};

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-7mxdre47q4grkp2o.us.auth0.com"
    clientId="f46pKQ9FOT5ljrLUY5K6IXYcquNBm5XO"
    authorizationParams={{
      redirect_uri: window.location.origin, // ✅ must match your Auth0 dashboard callback URL
    }}
    onRedirectCallback={onRedirectCallback} // ✅ handles appState.returnTo
  >
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
