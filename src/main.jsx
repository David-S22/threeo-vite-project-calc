import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1- Configurando Router
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import CalculatorPage from './routes/CalculatorPage.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import LoginPage from './routes/LoginPage.jsx'

/*
const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />,
  },
  {
    path: "calculator",
    element: <Calculator />
  },
])
*/

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  //3- Página de erro
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "calculator",
      element: <CalculatorPage />
    },
  ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
