import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box, Button, Table,TableContainer, Tbody, Td, Thead, Tr
} from "@chakra-ui/react"
import InsertImage from "./insertImage";
import UpdateVehicle from "./UpdateVehicle";
import { goToHomePage } from "../routes/Coordinator";
import { BaseUrl } from "../constants/BaseURL";




export default function ManageAds(props) {

    const token = window.localStorage.getItem('token')
   


    const [previewImg] = useState('default-profile.png')
    const [Ads, setAds] = useState([])
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [selectedVehicle,setSelectedVehicle] = useState('')
    const [renderize,setRenderize] = useState()
    const [status,setStatus] = useState('')
    const [updatepage,setUpdatePage] = useState(true)

    let image

    const setImage = (file) => {
        image = file
    }

    const uploadImage = async (e) => {

        e.preventDefault()

        const adImage = image

        const imageData = {
            name: name,
            brand: brand,
            model: model,
            price: price,
            description: description
        }



        const formData = new FormData()
        formData.append('name', imageData.name)
        formData.append('brand', imageData.brand)
        formData.append('model', imageData.model)
        formData.append('price', imageData.price)
        formData.append('description', imageData.description)
        formData.append('file', adImage)


        const headers = {
            headers: {
                authorization: window.localStorage.getItem('token'),

            }
        }

        await axios.post(`${BaseUrl}/vehicle/insert`, formData, headers).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
            setStatus(err.response.message)

        })

    }

    const updateVehicle = async (e) => {

        e.preventDefault()

        const adImage = image

        const imageData = {
            id:selectedVehicle.id,
            name: name,
            brand: brand,
            model: model,
            price: price,
            description: description
        }



        const formData = new FormData()
        formData.append('id',imageData.id)
        formData.append('name', imageData.name)
        formData.append('brand', imageData.brand)
        formData.append('model', imageData.model)
        formData.append('price', imageData.price)
        formData.append('description', imageData.description)
        formData.append('file', adImage)


        const headers = {
            headers: {
                authorization: window.localStorage.getItem('token'),

            }
        }

        await axios.post(`${BaseUrl}/vehicle/update`, formData, headers).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
            setStatus(err.response.message)
        })

    }

    const getAdsVehicles = async () => {

        await axios.get(`${BaseUrl}/vehicle/all`).then((res) => {
            console.log(res)
            setAds(res.data.vehicles)
        }).catch((err) => {
            console.log(err.response)
        })
    }

    const deleteVehicle = async (id) => {
        const headers = {
            headers: {
                authorization: window.localStorage.getItem('token'),

            }
        }
        
        await axios.delete(`${BaseUrl}/vehicle/delete?id=${id}`, headers).then((res) => {
            console.log(res.data)
            setUpdatePage(!updatepage)
        }).catch((err) => {
            console.log(err.response)
            setUpdatePage(!updatepage)
        })
    }

    const getVehicleByID = async (id) => {
        await axios.get(`${BaseUrl}/vehicle/select?search=${id}`).then((res) => {
            setSelectedVehicle(res.data.vehicle)
        }).catch((err) => {
            console.log(err.response)
        })
    }
   

    const editVehicle = async (id) => {
        getVehicleByID(id)
        setRenderize(false)
    }
 

    useEffect(() => {
        if(!token){
            goToHomePage()
        }
        getAdsVehicles()
    }, [selectedVehicle,token,updatepage])


    const printAdsTable = Ads.map((item) => {


        return (

            <Tr
            >
                <Td>{item.name}</Td>
                <Td>{item.brand}</Td>
                <Td>{item.model}</Td>
                <Td>{item.price}</Td>
                <Td><Button
                    sx={{
                        color: 'red',
                        background: 'none',
                        width: '20px'
                    }}
                    onClick={() => deleteVehicle(item.id)}
                >X</Button></Td>
                <Td><Button
                    sx={{
                        color: 'black',
                        background: 'none',
                        width: '50px'

                    }}
                    onClick={() => editVehicle(item.id)}
                >editar</Button></Td>
            </Tr>

        )
    })

    const insertAds = (
        <><Box
            sx={{
                margin: '30px',
                fontSize: '25px',
                color: 'green.400'
            }}
        >
            Inserir Anúncios
        </Box><Box>
                <InsertImage  setImage={setImage} setName={setName} setBrand={setBrand} setModel={setModel} setPrice={setPrice} setDescription={setDescription} />
            </Box><Box
                sx={{
                    margin: '20px'
                }}
            >

                <Box>
                </Box>

                <form
                    onSubmit={uploadImage}
                    className='formulario'
                >


                    <Box
                        sx={{
                            margin: '20px auto',
                            width: '100%'
                        }}
                    >

                        <button>Enviar</button>

                    </Box>
                </form>
            </Box></>
    )

    const updateAds = (
        <><Box
            sx={{
                margin: '30px',
                fontSize: '25px',
                color: 'green.400'
            }}
        >
            Editar Anúncio
        </Box><Box>
                <UpdateVehicle selectedVehicle={selectedVehicle} setImage={setImage} setName={setName} setBrand={setBrand} setModel={setModel} setPrice={setPrice} setDescription={setDescription}/>
            </Box><Box
                sx={{
                    margin: '20px'
                }}
            >

                <Box>
                </Box>

                <form
                    onSubmit={updateVehicle}
                    className='formulario'
                >


                    <Box
                        sx={{
                            margin: '20px auto',
                            width: '100%'
                        }}
                    >

                        <button
                        >Enviar</button>

                    </Box>
                </form>
            </Box></>
    )

    let screen 

   switch (renderize) {
    case true:
        screen = insertAds
        break;
    case false:
        screen = updateAds
        break;
   
    default:
        screen = <></>
        break;
   }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px'
            }}
        >
            
            <Box
                sx={{
                    display: 'flex',
                    alignSelf: 'start'
                }}
            >

            </Box>
            <Box>
                {screen}
            </Box>
            <Box>
                {status}
            </Box>
            <Box
                sx={{
                    margin: '30px',
                    fontSize: '25px',
                    color: 'green.400'
                }}
            >
                Anúncios
            </Box>


            <Box

                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'

                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'

                    }}
                >


                    <TableContainer >
                        <Table variant='striped' size={'sm'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            <Thead>
                                <Box
                                ><Button
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'green.200',
                                        margin: '10px'

                                    }}
                                    onClick={()=>setRenderize(true)}
                                >Adicionar</Button> </Box>
                            </Thead>

                            <Tbody

                            >

                                {printAdsTable}

                            </Tbody>

                        </Table>
                    </TableContainer>

                </Box>

            </Box>




        </Box>
    )
}

