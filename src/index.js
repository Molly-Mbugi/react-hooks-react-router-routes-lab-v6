import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from "./routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    {routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ))}
  </Router>
);
