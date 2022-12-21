import { useEffect } from "react"

import { Box, Grid, Text } from "@chakra-ui/react"

import { useDispatch, useSelector } from "react-redux"
import { fetchEvents } from "../Redux/events/events.actions";
import EventsCard from "../Components/EventCard";

export default function EventsPage(){

    const {data, loading} = useSelector((store)=> store.events);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchEvents());
    },[dispatch])



    return(
        <Box w="80%" m={"50px auto"}>
            <Text textAlign={"left"} fontSize="2rem" textTransform={"uppercase"}>All Events</Text>
            <Grid gap={"20px"}  templateColumns="repeat(4,1fr)" p={"20px 0"}>
                {
                    data?.map((eve)=>(
                    <EventsCard key={eve._id} event={eve} loading={loading} />
                    ))
                }
            </Grid>
        </Box>
    )
}