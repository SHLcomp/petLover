import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import CategoryPet from './pages/categories/CategoryPet'
import Pet from './pages/Pet/Pet'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/category/:categoryId",
      element: <CategoryPet />
    },
    {
      path: "/category/:categoryId/:petName",
      element: <Pet />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
