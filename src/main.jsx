import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import MovieDetail from "./pages/MovieDetail.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chi-siamo",
    element: <About />,
  },
  {
    path: "/movies/:movieID",
    element: <MovieDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
