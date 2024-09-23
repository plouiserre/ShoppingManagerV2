import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { stockSlice } from "./stock/stock-slice"
import { mealSlice } from "./meal/meal-slice"
import { persistStore, persistReducer, 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from "redux-persist";
import { mealItemSlice } from "./meal/mealItem-slice";
import { shoppingListSlice } from "./list/shoppingList-slice";
import { shoppingListItemSlice } from "./list/shoppingListItem-slice";

const persistConfig = {
    key : "root",
    version :1,
    storage
}

const rootReducers = combineReducers({
    STOCK : stockSlice.reducer,
    MEAL : mealSlice.reducer, 
    MEALITEM : mealItemSlice.reducer,
    SHOPPINGLIST : shoppingListSlice.reducer,
    SHOPPINGLISTITEM : shoppingListItemSlice.reducer
})

const persistReducers = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer : persistReducers,
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck : {
                ignoreActions : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
            }
        })
})

const persistor = persistStore(store)

export {store, persistor};