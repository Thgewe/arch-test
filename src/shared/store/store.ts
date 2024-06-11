import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { shikimoriApi } from "../api/shikimoriAPI";

const rootReducer = combineReducers({
   [shikimoriApi.reducerPath]: shikimoriApi.reducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) =>
    configureStore({
       reducer: rootReducer,
       preloadedState,
       middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shikimoriApi.middleware),})

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']