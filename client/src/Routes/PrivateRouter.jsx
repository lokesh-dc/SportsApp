import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PrivateRouter({children}){
    const {isAuth} = useSelector((store)=> store.auth);
    const navigate = useNavigate();


    useEffect(()=>{
        if(!isAuth){
            return navigate("/auth/login")
        }
    },[isAuth, navigate])

    return(
        children
    )
}