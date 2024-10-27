import Devops from "./pages/Devops";
import Enterprise from "./pages/Enterprise";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes= [
{path:'/' ,  element:<Home/>},
{path:'/register' ,  element:<Register/>},
{path:'/login' ,  element:<Login/>},
{path:'/enterprise' ,  element:<Enterprise/>},
]
export default routes