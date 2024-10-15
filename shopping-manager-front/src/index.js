import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import { Stock } from './pages/Stock/Stock';
import { ListMeal } from './pages/Meal/ListMeal';
import { DetailMeal } from './pages/Meal/DetailMeal';
import { AddStock } from './pages/Stock/AddStock';
import { Provider } from 'react-redux';
import {store, persistor} from "./store"
import { PersistGate } from 'redux-persist/integration/react';
import { DetailStock } from './pages/Stock/DetailStock';
import { EditStock } from './pages/Stock/EditStock';
import { AddMeal } from './pages/Meal/AddMeal';
import { EditMeal } from './pages/Meal/EditMeal';
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
            <Route path="/Stock/:id" element={<DetailStock/>}/>
            <Route path="/Stock/edit/:id" element={<EditStock/>}/>
            <Route path="/Meal/" element={<ListMeal/>}/>
            <Route path="/Meal/add" element={<AddMeal/>}/>
            <Route path="Meal/:id" element={<DetailMeal/>}/>
            <Route path="Meal/edit/:id" element={<EditMeal/>}/>
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
