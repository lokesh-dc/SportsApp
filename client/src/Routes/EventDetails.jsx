import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchParticularEvent } from "../Redux/events/events.actions";

export default function EventDetails(){

    const {event, loading, error } = useSelector((store=> store.events))
    const { userId } = useSelector((store)=> store.auth)
    const dispatch = useDispatch();
    const {id} = useParams()
    console.log(id, event, loading, error)
    useEffect(()=>{
        dispatch(fetchParticularEvent(id));
    },[id, dispatch])

    console.log("user id: ",userId)

    return(
        <Box>
            <Text fontWeight={"bold"}>{event?.title}</Text>
            <Text>{event?.description}</Text>
            <Text>Limit: {event?.limit}</Text>
            <Text>{event?.timings}hrs</Text>
            <Button>Join Event</Button>
        </Box>
    )
}