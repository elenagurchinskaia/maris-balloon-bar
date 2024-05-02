import ReactDOM from "react-dom/client";
import App from "./src/App";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import RentalItems from "./RentalItems";
import SeasonalItems from "./SeasonalItems";
import BookEvent from "./BookEvent";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    name: "Home",
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "seasonal-items", element: <SeasonalItems /> },
      { path: "rental-items", element: <RentalItems /> },
      { path: "contact", element: <Contact /> },
      { path: "book-event", element: <BookEvent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
