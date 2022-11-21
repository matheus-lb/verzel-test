import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import {
    Box, Button, Image, Input
} from "@chakra-ui/react"

export default function UpdateVehicle(props) {

    const vehiclesData = props.selectedVehicle
    const [image, setImage] = useState(vehiclesData.photo)
    const [endImg, setEndImg] = useState(vehiclesData.photo)
    const [name, setName] = useState(vehiclesData.name)
    const [brand, setBrand] = useState(vehiclesData.brand)
    const [model, setModel] = useState(vehiclesData.model)
    const [price, setPrice] = useState(vehiclesData.price)
    const [description, setDescription] = useState(vehiclesData.description)


    const addImage = (image) => {
        props.setImage(image)
        props.setName(name)
        props.setBrand(brand)
        props.setModel(model)
        props.setPrice(price)
        props.setDescription(description)
        alert('Dados Selecionados')
    }

    useEffect(() => {
    }, [vehiclesData])

    return (
        <Box>


            <Box
                margin={'10px auto'}
            > Imagem :</Box>

            <Box
                margin={'10px auto'}

            >
                <Input type="file" name='image' onChange={e => setImage(e.target.files[0])} />

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '300px',
                    height: '200px'
                }}
            >
                {
                    image ?
                        <Image src={URL.createObjectURL(image)} alt='imagem' width={'300px'} height={'200px'} />
                        :
                        <Image src={endImg} alt='imagem' width={'100px'} height={'50px'} margin={'0 auto'} />

                }

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <label>Titulo</label>
                <Input variant='outline' placeholder={vehiclesData.name} isRequired onChange={(e) => setName(e.target.value)} maxW={'500px'} />
                <label>Marca</label>
                <Input variant='outline' placeholder={vehiclesData.brand} isRequired onChange={(e) => setBrand(e.target.value)} maxW={'500px'} />
                <label>Modelo</label>
                <Input variant='outline' placeholder={vehiclesData.model} isRequired onChange={(e) => setModel(e.target.value)} maxW={'500px'} />
                <label>Preço</label>
                <Input variant='outline' placeholder={vehiclesData.price} isRequired onChange={(e) => setPrice(e.target.value)} maxW={'500px'} />
                <label>Descriçao</label>
                <Input variant='outline' placeholder={vehiclesData.description} isRequired onChange={(e) => setDescription(e.target.value)} height={'80px'} maxW={'500px'} />

            </Box>

            <Button
                onClick={() => addImage(image)}
                margin={'20px auto'}

            >Salvar</Button>

        </Box>
    )
}
