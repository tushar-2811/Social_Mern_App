import './App.css';
import Login from './Pages/non-auth/Login';
import Home from './Pages/non-auth/Home';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import SignUp from './Pages/non-auth/SignUp';

function App() {

  const router = createBrowserRouter([
    {path : "/" , element : <Home/>},
    {path : "/login" , element : <Login />},
    {path : "/signup", element : <SignUp />}
  ])

  return (
   <>
     <RouterProvider router={router}/>
   </>
  );
}

export default App;
