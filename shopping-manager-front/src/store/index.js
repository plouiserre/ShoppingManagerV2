import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { stockSlice } from "./stock/stock-slice"
import { persistStore, persistReducer
} from "redux-persist";

const persistConfig = {
    key : "root",
    version :1,
    storage
}

const rootReducers = combineReducers({
    STOCK : stockSlice.reducer
})

const persistReducers = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer : persistReducers
})

const persistor = persistStore(store)

export {store, persistor};