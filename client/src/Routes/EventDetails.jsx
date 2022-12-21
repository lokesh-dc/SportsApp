import {  Avatar, Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchParticularEvent, joinEvent } from "../Redux/events/events.actions";
import { AtSignIcon } from '@chakra-ui/icons'
import { useState } from "react";


export default function EventDetails(){

    const {event } = useSelector((store=> store.events))
    const {userId} = useSelector((store)=> store.auth);
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(()=>{
        dispatch(fetchParticularEvent(id));
    },[id, dispatch])

    async function handleJoinEvent(){
        await dispatch(joinEvent({id,userId}))
        dispatch(fetchParticularEvent(id));
    }
    const [show, setShow ] = useState(true);

    useEffect(()=>{
        if(event){
            console.log(event.waitlisted.length)
            if(event.waitlisted.length===0)
                return setShow(true);
            for(let i=0;i<event.waitlisted.length;i++){
                if(event.waitlisted[i].user._id === userId){
                    setShow(false);
                    break;
                }
            }
        }
    },[id, userId, event])

    // console.log(event.waitlisted)

    return(
        <Box width={"600px"} m={"50px auto"}>
        <Text fontSize={"3rem"}>{show ? "JOIN US" : "Thanks for Joining in"}</Text>
            <Grid  width={"500px"} m="auto" gap="10px" textAlign={"left"} p="20px" boxShadow="rgba(100, 100,     111, 0.2) 0px 7px 29px 0px" >
            <Text><AtSignIcon /> {event?.createdBy}</Text>
                <Image src="https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg" />
                <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>{event?.title}</Text>
                    <Text>{event?.start}</Text>
                </Flex>
                <Text color={"grey"}>{event?.description}</Text>
                <Text>seats Availale: {event?.limit}</Text>
                <Text>Event Ends at : {event?.end}</Text>
                {   
                    show &&
                    <Button colorScheme={"teal"} borderRadius="0" onClick={handleJoinEvent}>Join Event</Button>
                }
                    
            </Grid>
            {
                !show &&
                <Flex width={"500px"} m="auto" flexDirection={"column"} textAlign="center" p="20px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >
                <Text fontSize={"2rem"} textAlign="left" mb={"20px"}>Interested</Text>
                    <Grid templateColumns={"repeat(3,1fr)"}>
                        {   
                            event?.waitlisted?.map((p)=>(
                                <Box key={p._id}>
                                    <Avatar name={p.user.userName} src='https://bit.ly/sage-adebayo' />
                                    <Text>@{p.user.userName}</Text>
                                </Box>
                            ))
                        }
                    </Grid>
                </Flex>

            }
        </Box>
    )
}
