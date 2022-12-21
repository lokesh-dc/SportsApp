import { Box, Button, FormLabel, Grid, Input, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import { userSignup } from "../Redux/auth/auth.actions";

export default function Signup(){

    const {loading, error, isAuth } = useSelector((store)=> store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const [formData, setFormData] = useState({});

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
        dispatch(userSignup(formData)).then((res)=> {
            if(res.status){
                toast({
                    title: `Account Successfully created.`,
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
                <FormLabel>User Name:</FormLabel>
                <Input type={"text"} placeholder="Enter User name" name="userName"  onChange={handleData} />
            </Box> 
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
                <Text>{error}</Text>
            }
            <Button onClick={handleSubmit} isLoading={loading} loadingText="Signing up">Sign up</Button>
        </Grid>
    )
}