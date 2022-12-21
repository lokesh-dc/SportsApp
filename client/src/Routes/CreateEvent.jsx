import {  Box, Button, Flex, FormLabel, Grid, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../Redux/events/events.actions";

export default function CreateEvent(){

    const dispatch = useDispatch();
    const {userDetails} = useSelector((store)=> store.auth);
    const [event, setEvent] = useState({createdBy : userDetails.userName});

    function handleData(e){
        const {name, value} = e.target;
        setEvent({...event, [name]:value});
    }

    function handleSubmit(){
        dispatch(createEvent(event));
    }

    console.log(Event)

    return(
        <Flex flexDirection={"column"} w="600px" m={"50px auto"} gap="20px" > 
            <Text textAlign={"left"} fontSize="2rem" textTransform={"uppercase"} mb="20px">Create Event:</Text>
            <Box>
                <FormLabel>Event: </FormLabel>
                <Input type={"text"} placeholder="Enter Event Title" name="title" onChange={handleData} />
            </Box>
            <Box>
                <FormLabel>Description:</FormLabel>
                <Textarea placeholder="Enter description to let participants know more about event." name="description" onChange={handleData} />
            </Box>
            <Box>
                <FormLabel>Participants Limit: </FormLabel>
                <Input type={"number"} placeholder="Enter Participants Limit" name="limit" onChange={handleData} />
            </Box>
            <Box>
                <FormLabel>Event Timings:</FormLabel>
                <Grid templateColumns={"1fr 1fr"} alignItems="center" gap={"20px"} >
                    <Flex alignItems={"center"} gap="10px">
                        <FormLabel>From</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            name="start"
                            onChange={handleData}
                        />
                    </Flex>
                    <Flex alignItems={"center"} gap="10px">
                        <FormLabel>To</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            name="end"
                            onChange={handleData}
                        />
                    </Flex>
                </Grid>
            </Box>
                <Button colorScheme={"teal"} onClick={handleSubmit}>Create Event</Button>
        </Flex>
    )
}