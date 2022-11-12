import React, { useState } from "react";
import { Box, Input } from '@chakra-ui/react'
import { Typography } from "@mui/material";
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { goToAdminPage, goToHomePage } from "../routes/Coordinator";
import { BaseUrl } from "../constants/BaseURL";



export default function Header() {

    const navigate = useNavigate()

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

const doLogin = () =>{

    const body = {
      "email": login,
      "password": password
    }


    axios.post(`${BaseUrl}/user/login`, body)
    .then((response) => {
      window.localStorage.setItem('token', response.data.token)
        goToAdminPage(navigate)
    }).catch((err)=>{
        alert(err.response.data.message)
        goToHomePage(navigate)
    })


    }

    return (
        <Box
            sx={{
                width:'100%',
                backgroundColor:'tomato',
                display:'flex',
                justifyContent:'space-between',
                padding:'3%',
                alignItems:'center'
            }}
        >
            <Box
            sx={{
                color:'blue.100',
                fontSize:'50px'
            }}
            >
                AutoTOP
            </Box>
            <Box
            sx={{
                color:'blue.100',
                fontSize:'20px'
            }}
            >
                

                <Box
                sx={{
                    color:'blue.100',
                    fontSize:'20px',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth:'1px',
                    width:'100%px',
                    height:'80px',
                    borderRadius:'5px'

                }}
                >
                <Input type='text' backgroundColor={'white'} onChange={(e)=>setLogin(e.target.value)} w={'90%'} height={'20px'} margin={'1px'} fontSize={'14px'} color={'black'}/>
                <Input type='password' backgroundColor={'white'} onChange={(e)=>setPassword(e.target.value)} w={'90%'} height={'20px'} margin={'1px'} fontSize={'14px'} color={'black'}/>
                <Button
                sx={{
                    width:'70px',
                    height:'20px',
                    color:'tomato',
                    fontSize:'14px',
                    margin:'1px'
                }}
                onClick={()=>doLogin()}
                >Login</Button>

                </Box>
                

            </Box>
            
        </Box>
    )
}