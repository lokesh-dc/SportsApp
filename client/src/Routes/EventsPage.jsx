import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"

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
        <Grid>
            {
                data?.map((eve)=>(
                   <EventsCard key={eve._id} event={eve} loading={loading} />
                ))
            }
        </Grid>
    )
}