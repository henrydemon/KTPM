import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routers from "./routers";
import { persistor, store } from "./store";

import "./assets/css/style.default.css";
import RoutersAdmin from "./admin/routers";

import "./assets/css/argon.min.css";
import "./assets/css/nucleo-icons.css";

const typeAccount = "admin";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          {/* {typeAccount === ("admin" || "staff") ? (
            <RoutersAdmin />
          ) : ( */}
          <Routers />
          {/* )} */}
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
