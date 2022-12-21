import {  Box, Button, Flex, FormLabel, Grid, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CreateEvent(){

    const dispatch = useDispatch();

    const [event, setEvent] = useState({});

    function handleData(e){
        const {name, value} = e.target;
        setEvent({...event, [name]:value});
    }

    function handleSubmit(){
        
    }

    return(
        <Flex flexDirection={"column"} w="600px" m={"50px auto"} gap="20px" > 
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
                <Button colorScheme={"teal"}>Create Event</Button>
        </Flex>
    )
}