import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminPage from '../pages/AdminPage/Admin';
import Home from '../pages/HomePage/Home';


const Routers = () => { 
    return(

    <BrowserRouter>
    <Routes> 
        <Route  path="/" element={<Home/>}/>
        <Route  path="/admin" element={<AdminPage/>}/>
        {/* <Route  path="/:id" element={<Details/>}/> */}
    </Routes>
    </BrowserRouter>
    )
}

export default Routers; 
