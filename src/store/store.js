import { configureStore } from "@reduxjs/toolkit";

import api from "./api";

// Configure the Redux store
export default configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
