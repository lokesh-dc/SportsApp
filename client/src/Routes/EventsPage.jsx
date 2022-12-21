import { useEffect } from "react"

import { Box, Grid, Text } from "@chakra-ui/react"

import { useDispatch, useSelector } from "react-redux"
import { fetchEvents } from "../Redux/events/events.actions";

export default function EventsPage(){

    const {data, loading, error} = useSelector((store)=> store.events);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchEvents());
    },[dispatch])

    console.log(data, loading, error)
    return(
        <Grid>
            {
                data?.map((eve)=>(
                    <Box>
                        <Text>{eve.title}</Text>
                        <Text>{eve.description}</Text>
                        <Text>{eve.limit}</Text>
                    </Box>
                ))
            }
        </Grid>
    )
}