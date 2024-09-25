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
    domain="dev-z5crap14pqk1slzj.us.auth0.com"
    clientId="2GPo6NzNLVvRfbCeYZ0ViWgixmkhwF5F"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>

)
