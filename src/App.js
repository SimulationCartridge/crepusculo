import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import "./App.css";

//__________________________________//

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
