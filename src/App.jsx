import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './components/PageNotFound/PageNotFound'
import { CartContextProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import ResumeOrder from './components/Checkout/ResumeOrder'

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
      <CartContextProvider>
          <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer title={'Tienda'} texto='soy un texto desde app'/>}/>
                <Route path='/categorias/:categoryId'element={<ItemListContainer title={'Tienda'} />}/>
                <Route path='/producto/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/page_not_found' element={<PageNotFound />}/>
                <Route path='/resumeOrder' element={<ResumeOrder />}/>
                <Route path='*' element={<PageNotFound  />} /> 
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </ChakraProvider>
    
  )
}

export default App
