import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import { Stock } from './pages/Stock/Stock';
import { Food } from './pages/Food/Food';
import { List } from './pages/List/List';
import { AddStock } from './pages/Stock/AddStock';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/Stock/" element={<Stock/>}/>
            <Route path="/Stock/add" element={<AddStock/>}/>
            <Route path="/Repas/" element={<Food/>}/>
            <Route path="/Liste/" element={<List/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  // </Provider>
);
