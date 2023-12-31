import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Forgetadminusername from './components/forgetadminusername/Forgetadminusername'
import Forgetadminpassword from './components/forgetadminpassword/Forgetadminpassword'
import Adminhome from './components/adminhome/Adminhome'
import Category from './components/category/Category'
import Products from './components/products/Products'
import Editcategory from './components/editcategory/Editcategory'
import Home from './components/home/Home'
import Userlogin from './components/userlogin/Userlogin'
import AdminLogin from './components/adminlogin/AdminLogin'
import Adminregister from './components/adminregistration/Adminregister'
import Viewproducts from './components/viewproducts/Viewproducts'
import Editproduct from './components/editproduct/Editproduct'
import Productfulldetails from './components/productfulldetails/Productfulldetails'
import Userreg from './components/userreg/Userreg'
import Productdetailscustomer from './components/productdetailscustomer/productdetailscustomer'
import Cart from './components/cart/Cart'
import Offcanvas from './components/offcanvas/Offcanvas'
import Wishlist from './components/wishlist/Wishlist'





function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' Component={AdminLogin}/>
     <Route path='/forgetadminusername' Component={Forgetadminusername}/>
     <Route path='/forgetadminpassword' Component={Forgetadminpassword}/>
     <Route path='/adminhome' Component={Adminhome}/>
     <Route path='/category' Component={Category}/>
     <Route path='/products' Component={Products}/>
     <Route path='/editcategory/:id' Component={Editcategory}/>
     <Route path='/home' Component={Home}/>
     <Route path='/userlogin' Component={Userlogin}/>
     <Route path='/adminregister' Component={Adminregister}/>
     <Route path='/viewproducts/:categoryname' Component={Viewproducts}/>
     <Route path='/editproduct/:id' Component={Editproduct}/>
     <Route path='/productfulldetails/:id' Component={Productfulldetails}/>
     <Route path='/userreg' Component={Userreg}/>
     <Route path='/productdetailscustomer/:id' Component={Productdetailscustomer}/>
     <Route path='/cart/:id' Component={Cart}/>
     <Route path='/wishlist/:id' Component={Wishlist}/>
     
     

     




     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
