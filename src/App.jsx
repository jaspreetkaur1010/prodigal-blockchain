import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<div>
        <HomePage/>
      </div>,
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
