// if you tryna help me improve my code then lmk

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/videos", element: <App /> },
  { path: "/gallery", element: <App /> },
  { path: "/contact", element: <App /> },
  { path: "/donate", element: <App /> },
  { path: "/blog", element: <App /> },
  { path: "/watch/:slug", element: <App /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
