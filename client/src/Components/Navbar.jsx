import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <Flex justifyContent={"space-between"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" px={"50px"} py="20px" fontWeight={"bold"}>
            <Link to="/">Playo App</Link>
            <Flex justifyContent={"center"} gap="30px">
                <Link to="/auth/signup">Signup</Link>
                <Link>Events</Link>
            </Flex>
        </Flex>
    )
}