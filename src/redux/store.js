import { createStore } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import rootReducer from "./root-reducer";

// const middleware = [logger];

export const store = createStore(
  rootReducer,
  /*applyMiddleware(...middleware)*/ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);

// export default { store, persistor };
