import {Box, Flex, Input, InputGroup, InputRightAddon} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import React, {useState} from "react";

export default function Home() {
    const [searchText, setSearchText] = useState("")

    const onChangeSearchText = (e: React.SyntheticEvent<EventTarget>): void => {
        let target = e.target as HTMLInputElement;
        setSearchText(target.value)
        console.log(searchText)
    }
    return (
        <Flex minH={'100vh'} align={"center"} justify={'center'}>
            <Box>
                <InputGroup size='sm'>
                    <Input placeholder='search' value={searchText} onChange={onChangeSearchText}/>
                    <InputRightAddon children={<SearchIcon/>}/>
                </InputGroup>
            </Box>
        </Flex>
    )
}
