import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function AllRouter(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
        </Routes>
    )
}