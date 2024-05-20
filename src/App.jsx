import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

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
       <NavBar />
       <ItemListContainer titulo="ECommerce" />
    </ChakraProvider>
  )
}

export default App
