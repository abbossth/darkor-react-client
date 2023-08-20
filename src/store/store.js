import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import productsReducer from "./reducers/productReducer";
import categoriesReducer from "./reducers/categoryReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const rootReducer = combineReducers({
  productsReducer,
  categoriesReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2, // optional state reconciler
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
