import {  Button, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchParticularEvent } from "../Redux/events/events.actions";

export default function EventDetails(){

    const {event, loading, error } = useSelector((store=> store.events))
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(()=>{
        dispatch(fetchParticularEvent(id));
    },[id, dispatch])

    return(
        <Grid width={"300px"} gap="10px" m={"100px auto"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >
            <Image src="https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg" />
            <Text fontWeight={"bold"}>{event?.title}</Text>
            <Text>{event?.description}</Text>
            <Text>Palyers Limit: {event?.limit}</Text>
            <Text>Starts at:{event?.start.split("T")}hrs</Text>
            <Text>Ends at:{event?.start.split("T")}hrs</Text>
            <Text>{event?.end.split("T") - event?.start.split("T")}</Text>
            <Button colorScheme={"teal"} borderRadius="0">Join Event</Button>
        </Grid>
    )
}
