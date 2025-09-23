import {createBrowserRouter} from "react-router-dom"
import Login from "../Auth/login"
import SignUp from "../Auth/signUp"


export const MainRoute = createBrowserRouter([
    {
        path: "", 
         element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    }
])