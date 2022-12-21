import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserDetails } from "../Redux/auth/auth.actions";
import UserInteract from "./UserInteract";

export default function Navbar(){

    const { isAuth, userId, userDetails } = useSelector((store)=> store.auth);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(isAuth)
            dispatch(fetchUserDetails(userId));
    },[isAuth, dispatch, userId])


    return(
        <Flex justifyContent={"space-between"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" px={"50px"} py="20px" fontWeight={"bold"}>
            <Link to="/">Playo App</Link>
            {
                !isAuth ? 
                <Flex justifyContent={"center"} gap="30px">
                    <Link to="/auth/signup">Signup</Link>
                    <Link>Events</Link>
                </Flex> : 
                <Flex alignItems={"center"} gap="30px">
                    <Link to="/add_event"> Create Event</Link>
                    <UserInteract />
                </Flex>
            }

        </Flex>
    )
}