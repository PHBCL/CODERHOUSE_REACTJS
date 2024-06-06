import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const theme = extendTheme({
  colors: {
    general_color: {
      skyblue: "#56CBF9",
      mayablue: "#7FBEEB",
      powderblue: "#AFBED1",
      fairytail: "#EAC5D8",
      lavender: "#DBD8F0",
      white: "#FFFFFF",
      black:"#000000"
    },
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer titulo="ECommerce" />} /> 
            <Route path='/categorias/:categoryId' element={<ItemListContainer titulo="ECommerce" />} /> 
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
