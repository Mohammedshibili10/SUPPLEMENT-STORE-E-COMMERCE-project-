import Login from "./pages/Login"
import Navbar from "./compoents/Navbar"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Productpage from "./pages/Productpage"
import Contact from "./pages/Contact"
import NewPeoducts from "./compoents/NewPeoducts"
import FeaturedProducts from "./compoents/FeaturedProducts"
import ProductDetails from "./pages/ProductDetails"
import Addcart from "./pages/Addcart"
import Seemore from "./compoents/Seemore"
import Benfits from "./pages/Benfits"


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Productpage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<Addcart />} />
          <Route path='/benfits' element={<Benfits/>}/>
          <Route path='/products' element={<Productpage />}>
            {/* <Route path="new" element={<NewPeoducts/>}/>
        <Route path="featured" element={<FeaturedProducts/>}/> */}
          </Route>
          

          <Route path='/contact' element={<Contact />} />



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
