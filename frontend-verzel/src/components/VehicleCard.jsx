import React, { useEffect } from "react";
import {
    background,
    Box, Button, Text, Image, GridItem
} from "@chakra-ui/react"
import { BaseUrl } from "../constants/BaseURL";

export default function VehicleCard(props) {
    useEffect(() => {
        console.log(props.photo)
    }, [])

    return (
        <Box
            sx={{
                width: '180px',
                height: '250px',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'black',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '5px',
                backgroundColor: 'lightgrey'
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>{props.title}</Text>
            </Box>

            <Box
                sx={{
                    width: '170px',
                    height: '100px',
                    margin: '5px auto',
                    background: 'tomato'
                }}
            >
                <Image src={props.photo} width={'170px'} height={'100px'} />


            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '10px',
                    alignItems: 'center',
                }}
            >
                <Text margin={'0 3px'}>{props.brand}</Text> <Text margin={'0 3px'}>{props.model}</Text> <Text margin={'0 3px'}>{`R$ ${props.price}`}</Text>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '10px',
                    alignItems: 'center',
                }}
            >
                <Text
                    maxW={'120px'}
                    margin={'10px auto'}
                >{props.description}</Text>
            </Box>

        </Box>
    )
}