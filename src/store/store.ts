import { configureStore } from "@reduxjs/toolkit";
import { shikimoriApi } from "../services/shikimoriAPI";

export const store = configureStore({
   reducer: {
      [shikimoriApi.reducerPath]: shikimoriApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shikimoriApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;