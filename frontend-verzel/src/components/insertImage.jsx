import React, { useState } from "react";
import {
    Box, Button, Image,Input
} from "@chakra-ui/react"



export default function InsertImage(props) {

    const [image, setImage] = useState('')
    const [endImg, setEndImg] = useState('upload-image.png')
    
   


    const addImage = (image) => {
        props.setImage(image)
        alert('imagem Selecionada')
    }


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
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:'300px',
                height:'200px'
            }}
            >
            {
                image ?
                    <Image src={URL.createObjectURL(image)} alt='imagem' width={'300px'} height={'200px'} />
                    :
                    <Image src={endImg} alt='imagem' width={'100px'} height={'50px'} margin={'0 auto'}/>

            }

            </Box>

            <Box
             sx={{
                display:'flex',
                flexDirection:'column'
             }}
            >
            <label>Titulo</label>
            <Input variant='outline' isRequired onChange={(e)=>props.setName(e.target.value)} maxW={'500px'}/>
            <label>Marca</label>
            <Input variant='outline'  isRequired onChange={(e)=>props.setBrand(e.target.value)}maxW={'500px'}/>
            <label>Modelo</label>
            <Input variant='outline' isRequired onChange={(e)=>props.setModel(e.target.value)}maxW={'500px'}/>
            <label>Preço</label>
            <Input variant='outline'  isRequired onChange={(e)=>props.setPrice(e.target.value)}maxW={'500px'}/>
            <label>Descriçao</label>
            <Input variant='outline'  isRequired onChange={(e)=>props.setDescription(e.target.value)} height={'80px'}maxW={'500px'}/>
          
            </Box>

            <Button
                onClick={() => addImage(image)}
                margin={'20px auto'}

            >Salvar</Button>

        </Box>
    )
}