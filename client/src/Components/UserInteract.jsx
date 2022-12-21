import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useDispatch } from "react-redux";
import { userLogout } from "../Redux/auth/auth.actions";

export default function UserInteract({userDetails}){

    const dispatch = useDispatch();

    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {userDetails.userName || userDetails.email}
            </MenuButton>
            <MenuList>
                <Flex flexDirection={"column"} gap="10px" alignItems={"start"} px="10px" >
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Profile</MenuItem>
                    <Button colorScheme={"red"} onClick={()=> dispatch(userLogout())} >Sign Out</Button>
                </Flex>
            </MenuList>
        </Menu>  
    )
}