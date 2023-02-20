import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./contacts/filterSlice";
import { authReduser } from "./auth/slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

// Persisting token field from auth slice to localstorage

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReduser),
        contacts: contactsReducer,
        filter: filterReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE]
            }
        })
});

export const persistor = persistStore(store);
