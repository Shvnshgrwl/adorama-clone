import {Routes,Route} from "react-router-dom"
import Homepage from "../Pages/Homepage"
import Signup from "../Pages/Signup"
export default function Allroutes(){
    return(
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
    )
}