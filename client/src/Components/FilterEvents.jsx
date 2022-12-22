import { Flex, Select } from "@chakra-ui/react";

export default function FilterEvents({handleSorting, handleFilterig}){
    return(
        <Flex gap="30px" justifyContent={"end"}>
            <Select placeholder="Filter events by City" name="city" onChange={handleFilterig} width="fit-content" >
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Ahmedabad">Ahmedabad</option>
            </Select>
            <Select placeholder="Sort Events by date" name="sort" onChange={handleSorting} width="fit-content">
                <option value="1">Earliest First</option>
                <option value="-1">Later First</option>
            </Select>
            
        </Flex>
    )
}