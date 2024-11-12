import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import  Dashboard from './Component/Dashboard.tsx';
import Classes from './Component/Classes.tsx';
import { Datesheet } from './Component/Datesheet.tsx';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Dashboard/>} />
      <Route path="/classes" element={<Classes/>} />
      <Route path='/datesheet'  element={<Datesheet />}/>
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
