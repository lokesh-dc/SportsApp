import {  Box, Button, Flex, FormLabel, Grid, Input, Select, Text, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../Redux/events/events.actions";

export default function CreateEvent(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const {userId} = useSelector((store)=> store.auth);
    const [event, setEvent] = useState({createdBy : userId});

    function handleData(e){
        const {name, value} = e.target;
        if(name==="start"){
            let time = value.split("T");
            setEvent({...event, "startTime":time[1],"startDate":time[0] })
        }else if(name==="end"){
            let time = value.split("T");
            setEvent({...event, "endTime":time[1],"endDate":time[0] })
        }
        else
            setEvent({...event, [name]:value});
    }

    function handleSubmit(){
        dispatch(createEvent(event))
        toast({
            title: `Event successfully posted.`,
            position: 'bottom-right',
            status: 'success',
            isClosable: true,
            duration: 3000,
          })
          setTimeout(()=>{
              navigate("/events");
          },1000)
    }

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
                <FormLabel>City:</FormLabel>
                <Select placeholder="Select Event City" name="city" onChange={handleData}>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                </Select>
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