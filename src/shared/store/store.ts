import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { shikimoriApi } from "../api/shikimoriAPI";

// export const store = configureStore({
//    reducer: {
//       [shikimoriApi.reducerPath]: shikimoriApi.reducer,
//    },
//    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shikimoriApi.middleware),
// });
const rootReducer = combineReducers({
   [shikimoriApi.reducerPath]: shikimoriApi.reducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) =>
    configureStore({
       reducer: rootReducer,
       preloadedState,
       middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shikimoriApi.middleware),})

export const store = setupStore();

// setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;