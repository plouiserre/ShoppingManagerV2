import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import { Stock } from './pages/Stock/Stock';
import { Meal } from './pages/Meal/Meal';
import { MealDetail } from './pages/Meal/MealDetail';
import { List } from './pages/List/List';
import { AddStock } from './pages/Stock/AddStock';
import { Provider } from 'react-redux';
import {store, persistor} from "./store"
import { PersistGate } from 'redux-persist/integration/react';
import { StockDetail } from './pages/Stock/StockDetail';
import { StockEdit } from './pages/Stock/StockEdit';
import { AddMeal } from './pages/Meal/AddMeal';
import { MealEdit } from './pages/Meal/MealEdit';
import { AddList } from './pages/List/AddList';


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
            <Route path="/Meal/" element={<Meal/>}/>
            <Route path="/Meal/add" element={<AddMeal/>}/>
            <Route path="Meal/:id" element={<MealDetail/>}/>
            <Route path="Meal/edit/:id" element={<MealEdit/>}/>
            <Route path="List/add" element={<AddList/>}/>
            <Route path="/Liste/" element={<List/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
  </Provider>
);
