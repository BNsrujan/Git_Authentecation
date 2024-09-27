import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Terminal from './components/terminal.tsx'
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/terminal/:os',
    element: <Terminal />
  }
])


createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-r0gwhgnlyas2rmvo.us.auth0.com"
    clientId="X8okWa1Kmv7YJ8BKA8mrVNBlQXZA4hJv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>

)
