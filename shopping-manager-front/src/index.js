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
import {store, persistor} from "./store"
import { PersistGate } from 'redux-persist/integration/react';
import { StockDetail } from './pages/Stock/StockDetail';
import { StockEdit } from './pages/Stock/StockEdit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/Stock/" element={<Stock/>}/>
            <Route path="/Stock/add" element={<AddStock/>}/>
            <Route path="/Stock/:id" element={<StockDetail/>}/>
            <Route path="/Stock/edit/:id" element={<StockEdit/>}/>
            <Route path="/Repas/" element={<Food/>}/>
            <Route path="/Liste/" element={<List/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
  </Provider>
);
