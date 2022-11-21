import React, { useEffect } from "react";
import {
    background,
    Box, Button, Text, Image, GridItem
} from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'




export default function VehicleCard(props) {

    const linkWhatsApp = () => {

    }

    useEffect(() => {
        console.log(props.photo)
    }, [])

    return (
        <Box
            sx={{
                width: '180px',
                minHeight: '250px',
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
                    justifyContent: 'center',
                    fontSize:'20px',
                    fontWeight:'bold'

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
                    fontSize: '16px',
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


                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Box
                    >
                        <Text
                            maxW={'120px'}
                            margin={'10px auto'}
                        >{props.description}
                        </Text>
                    </Box>
                    <Box

                    >
                        <a
                        href='https://api.whatsapp.com/send?phone=5524992810643&text=Ol%C3%A1%20gostaria%20de%20obter%20um%20or%C3%A7amento.'
                        target='_blank'
                        >
                            <IconButton
                                colorScheme='teal'
                                aria-label='Call Segun'
                                size='sm'
                                backgroundColor={'green'}
                                icon={<PhoneIcon />}
                            />
                        </a>

                    </Box>
                </Box>


            </Box>

        </Box>
    )
}