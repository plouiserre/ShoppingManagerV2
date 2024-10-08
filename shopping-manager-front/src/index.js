import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import { Stock } from './pages/Stock/Stock';
import { ListMeal } from './pages/Meal/ListMeal';
import { MealDetail } from './pages/Meal/MealDetail';
import { AddStock } from './pages/Stock/AddStock';
import { Provider } from 'react-redux';
import {store, persistor} from "./store"
import { PersistGate } from 'redux-persist/integration/react';
import { StockDetail } from './pages/Stock/StockDetail';
import { StockEdit } from './pages/Stock/StockEdit';
import { AddMeal } from './pages/Meal/AddMeal';
import { MealEdit } from './pages/Meal/MealEdit';
import { AddShoppingList } from './pages/ShoppingList/AddShoppingList';
import { ShoppingList } from './pages/ShoppingList/ListShoppingList';
import { EditShoppingList } from './pages/ShoppingList/EditShoppingList';
import { DetailShoppingList } from './pages/ShoppingList/DetailShoppingList';


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
            <Route path="/Meal/" element={<ListMeal/>}/>
            <Route path="/Meal/add" element={<AddMeal/>}/>
            <Route path="Meal/:id" element={<MealDetail/>}/>
            <Route path="Meal/edit/:id" element={<MealEdit/>}/>
            <Route path="ShoppingList/:id" element={<DetailShoppingList/>}/>
            <Route path="ShoppingList/add" element={<AddShoppingList/>}/>
            <Route path="/ShoppingList/" element={<ShoppingList/>}/>
            <Route path="/ShoppingList/edit/:id" element={<EditShoppingList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
  </Provider>
);
