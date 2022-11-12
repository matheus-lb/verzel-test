import './App.css';
import Header from './components/header';
import { ChakraProvider } from '@chakra-ui/react'
import Routers from './routes/Router';


function App() {
  return (
    <ChakraProvider>

      <Routers/>
    </ChakraProvider>

  );
}

export default App;
