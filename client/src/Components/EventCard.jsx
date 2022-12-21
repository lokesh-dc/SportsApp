import { Box, Button, Skeleton, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom"

export default function EventsCard({event, loading}){

    const navigate = useNavigate();

    return(
        <Skeleton isLoaded={!loading}>
            <Box>
                <Text>{event.title}</Text>
                <Text>{event.description}</Text>
                <Text>{event.limit}</Text>
                <Button onClick={()=>navigate(`/events/${event._id}`)}>More Information</Button>
            </Box>
        </Skeleton>
    )
}