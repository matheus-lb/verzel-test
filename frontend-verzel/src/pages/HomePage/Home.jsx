import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import {
    Box, Button, Center, Wrap, WrapItem
} from "@chakra-ui/react"
import VehicleCard from "../../components/VehicleCard";
import axios from 'axios'
import { Grid, GridItem } from '@chakra-ui/react'
import { BaseUrl } from "../../constants/BaseURL";

export default function Home() {

    const [ads, setAds] = useState([])


    const getAdsVehicles = async () => {

        await axios.get(`${BaseUrl}/vehicle/all`).then((res) => {
            setAds(res.data.vehicles)
        }).catch((err) => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getAdsVehicles()
    }, [])

    const gridCardVehicles = ads.map((item) => {
        return (
            <WrapItem
            >
                <VehicleCard title={item.name} photo={item.photo} brand={item.brand} model={item.model} price={item.price} description={item.description}/>
            </WrapItem>
        )
    })

    return (
        <Box>
            <Header />

            <Center
            marginLeft={'50px'}
            marginTop={'20px'}
            >
                <Wrap
                width={'80%'}
                >
                    {gridCardVehicles}
                </Wrap>
            </Center>


        </Box>
    )
}