
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <Auth0Provider
    domain="dev-7mxdre47q4grkp2o.us.auth0.com"
    clientId="f46pKQ9FOT5ljrLUY5K6IXYcquNBm5XO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
       <App />
    </BrowserRouter> 
  </Auth0Provider>
)
