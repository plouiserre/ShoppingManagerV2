import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import { Stock } from './pages/Stock/Stock';
import { Food } from './pages/Food/Food';
import { List } from './pages/List/List';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/Stock/" element={<Stock/>}/>
        <Route path="/Repas/" element={<Food/>}/>
        <Route path="/Liste/" element={<List/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
