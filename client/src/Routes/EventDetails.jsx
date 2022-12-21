import {  Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchParticularEvent } from "../Redux/events/events.actions";
import { AtSignIcon } from '@chakra-ui/icons'


export default function EventDetails(){

    const {event } = useSelector((store=> store.events))
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(()=>{
        dispatch(fetchParticularEvent(id));
    },[id, dispatch])

    return(
        <Box width={"600px"} m={"50px auto"}>
        <Text fontSize={"5rem"}>JOIN US</Text>
        <Grid  width={"500px"} m="auto" gap="10px" textAlign={"left"} p="20px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >
        <Text><AtSignIcon /> {event?.createdBy}</Text>
            <Image src="https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg" />
            <Flex justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>{event?.title}</Text>
                {
                    event?.start.split("T").map((t)=>(
                        <Text key={t}>{t}</Text>
                    ))
                }
            </Flex>
            <Text color={"grey"}>{event?.description}</Text>
            <Text>seats Availale: {event?.limit}</Text>
            <Text>Event Ends at : {event?.end}</Text>
            <Button colorScheme={"teal"} borderRadius="0">Join Event</Button>
        </Grid>
        </Box>
    )
}
