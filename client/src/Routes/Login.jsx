import { Box, Button, FormLabel, Grid, Input, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import { userLogin } from "../Redux/auth/auth.actions";

export default function Login(){

    const {loading, error, isAuth} = useSelector((store)=> store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const toast = useToast();

    useEffect(()=>{
        if(isAuth){
            return navigate("/events");
        }
    },[isAuth, navigate])
    function handleData(e){
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }

    function handleSubmit(){
        dispatch(userLogin(formData)).then((res)=>{
            if(res.status){
                toast({
                    title: `Successfully Logged in.`,
                    position: 'top-right',
                    status: 'success',
                    isClosable: true,
                  })
                setTimeout(()=>{
                    navigate("/auth/login");
                },1000)
            }
        }).catch((e)=> console.log(e))
    }
    return(
        <Grid> 
            <Box>
                <FormLabel>Email:</FormLabel>
                <Input type={"text"} placeholder="eample@mail.com" name="email" onChange={handleData} />
            </Box>
            <Box>
                <FormLabel>Password:</FormLabel>
                <Input type={"password"} placeholder="Enter password" name="password" onChange={handleData} />
            </Box>
            {
                error &&
                <Text textAlign={"right"} color={"red"}>{error}</Text>
            }
            <Button isLoading={loading} onClick={handleSubmit}>Login</Button>
        </Grid>
    )
}