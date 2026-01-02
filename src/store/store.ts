import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { api } from "./api";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import userReducer from "./slice/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

// ============== Persist config ==============//
const userPersistConfig = {
   key:"user",
   storage,
   whitelist:["user","isLoggedIn","isEmailVerified"]
};

// =========== wrap reducer with persists config =============//
const persistsUserReducer = persistReducer(userPersistConfig,userReducer)

// ================= Root reducer =================//

export const store = configureStore({
    reducer:{
        [api.reducerPath] : api.reducer,
        user: persistsUserReducer
    },
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,REGISTER,PURGE] as any,
            },
        }).concat(api.middleware)
    }
);
setupListeners(store.dispatch)

// ================= Persistor =================
export const persistor = persistStore(store);


// ================= TypeScript types =================
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;