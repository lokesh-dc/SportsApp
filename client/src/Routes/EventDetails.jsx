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
    const [hasJoined, setHasJoined] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);

    useEffect(()=>{
        if(userId && event){
            for(let i=0;i<event?.waitlisted?.length;i++){
                if(userId===event?.waitlisted[i]?.user?._id){
                    setHasJoined(true);
                    setIsConfirm(false);
                }
            }

            for(let i=0;i<event?.joined?.length;i++){
                if(userId===event.joined[i].user._id){
                    setHasJoined(false);
                    setIsConfirm(true);
                }

            }
        }   
    },[id, userId, event])

    console.log(isConfirm)
    console.log(event)

    return(
        <Box width={"600px"} m={"50px auto"}>
        <Text fontSize={"3rem"}>{userId === event?.createdBy?._id ? "EVENT" : hasJoined ? "Thanks for Joining in" : "Join Event"}</Text>
            <Grid  width={"500px"} m="auto" gap="10px" textAlign={"left"} p="20px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >
            <Flex justifyContent={"space-between"}>
                <Text> Hosted by, <AtSignIcon /> {event?.createdBy?.userName}</Text>
                <Text fontWeight={"bold"}>{event?.city}</Text>
            </Flex>
                <Image src="https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg" />
                <Text fontWeight={"bold"}>{event?.title}</Text>
                <Text>Timings : {event?.startDate} at {event?.startTime}</Text>
                <Text color={"grey"}>{event?.description}</Text>
                <Text>Seats Availale: {event?.limit}</Text>
                <Text>Event Ends at : {event?.endDate} - {event?.endTime}</Text>
                {   
                    userId !== event?.createdBy?._id && (
                        hasJoined ? 
                        <Text border={"1px solid"} p="10px" textAlign={"center"} >You are in waitlist</Text> :
                        isConfirm ? 
                        <Text border={"1px solid"} p="10px" textAlign={"center"} >You have successfully joined.</Text> :
                        <Button colorScheme={"teal"} borderRadius="0" onClick={handleJoinEvent}>Join Event</Button>
                    )
                }
                    
            </Grid>
            {
                userId === event?.createdBy?._id &&
                <Flex width={"500px"} m="auto" flexDirection={"column"} textAlign="center" p="20px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >
                <Text fontSize={"2rem"} textAlign="left" mb={"20px"}>Joined Event ({event?.joined?.length})</Text>
                <Grid templateColumns={"repeat(3,1fr)"} gap="20px">
                    {   
                        event?.joined?.map((p)=>(
                            <Box key={p._id}>
                                <Avatar name={p?.user?.userName} src='https://bit.ly/sage-adebayo' />
                                <Text>@{p?.user?.userName}</Text>
                            </Box>
                        ))
                    }
                </Grid>

                <Text fontSize={"2rem"} textAlign="left" mb={"20px"}>Interested ({event?.waitlisted?.length})</Text>
                    <Grid templateColumns={"repeat(3,1fr)"} gap="20px">
                        {   
                            event?.waitlisted?.map((p)=>(
                                <Box key={p._id}>
                                    <Avatar name={p?.user?.userName} src='https://bit.ly/sage-adebayo' />
                                    <Text>@{p?.user?.userName}</Text>
                                </Box>
                            ))
                        }
                    </Grid>

                </Flex>

            }
        </Box>
    )
}
