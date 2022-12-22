import { useEffect } from "react"

import { Box, Grid, Text } from "@chakra-ui/react"

import { useDispatch, useSelector } from "react-redux"
import { fetchEvents } from "../Redux/events/events.actions";
import EventsCard from "../Components/EventCard";
import FilterEvents from "../Components/FilterEvents";
import { useState } from "react";

export default function EventsPage(){

    const {data, loading} = useSelector((store)=> store.events);
    const dispatch = useDispatch();

    const [sort, setSort] = useState(-1);
    const [city, setCity] = useState("");


    useEffect(()=>{
        dispatch(fetchEvents({sort, city}));
    },[dispatch, sort, city])

    function handleSorting(e){
        setSort(e.target.value);
    }

    function handleFilterig(e){
        setCity(e.target.value);
    }
    return(
        <Box w="80%" m={"50px auto"}>
            <FilterEvents handleSorting={handleSorting} handleFilterig={handleFilterig} />
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