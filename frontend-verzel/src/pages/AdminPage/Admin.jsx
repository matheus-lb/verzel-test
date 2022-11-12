import {
  Box, Button
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import InsertAd from "../../components/ManageAds"
import { goToAdminPage, goToHomePage } from "../../routes/Coordinator"
import { useEffect } from "react"



export default function AdminPage() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  
  const onClickLogout = () => {
      window.localStorage.clear()
      goToHomePage(navigate)
  }

   
    useEffect(()=>{
      
        if(token){
            goToAdminPage(navigate)
        }else{
            goToHomePage(navigate)
        }
    
    },[token])

  return (
    <>
      <Box
      sx={{
        padding:'10px'
      }}
      >
        <Button

          onClick={onClickLogout}
          sx={{
            width: '50px',
            height: '30px',
            fontSize: '10px',
          }}
        >Logout</Button>


      </Box>
      <Box>
        <InsertAd/>
      </Box>
    </>

  )
}