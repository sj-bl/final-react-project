import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shoppage/shoppage.component";
import "./App.css";
const hatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);
const App = () => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shop" component={Shop} />
  </div>
);
export default App;
