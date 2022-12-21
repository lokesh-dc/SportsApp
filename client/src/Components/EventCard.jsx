import {  Button, Flex, Img, Skeleton, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"

export default function EventsCard({event, loading}){

    const navigate = useNavigate();

    return(
        <Skeleton isLoaded={!loading}>
            <Flex flexDirection={"column"} border="1px solid rgba(180,180,180,0.5)" gap={"10px"} p="10px">
                <Img src="https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg" w={"100%"} />
                    <Text fontWeight={"bold"} fontSize="1.2rem">{event.title}</Text>
                    <Text color={"grey"}>{event.description}</Text>
                    <Text>{event.limit}</Text>
                    <Button onClick={()=>navigate(`/events/${event._id}`)} variant="outline" colorScheme="blue" rightIcon={<ChevronRightIcon />} >More Information</Button>
            </Flex>
        </Skeleton>
    )
}   