import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

import { saveProfileUserGoogle } from "./action";

const persistConfig = {
  storage,
  key: "google",
  stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "saving"],
  version: 1,
};

const initState = {
  userGoogle: {},
};

const google = createReducer(initState, (builder) => {
  builder.addCase(saveProfileUserGoogle, (state, { payload }) => {
    const { user } = payload;
    state.userGoogle = user;
  });
});

export default persistReducer(persistConfig, google);
