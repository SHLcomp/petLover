import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CategoryPet from "./pages/categories/CategoryPet";
import Pet from "./pages/Pet/Pet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <h1>
          Sorry, this page is not found, or not made yet. Contact me if there's
          something wrong.{" "}
        </h1>
      ),
    },
    {
      path: "/category/:categoryName",
      element: <CategoryPet />,
    },
    {
      path: "/category/:categoryName/:petName",
      element: <Pet />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
