import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
