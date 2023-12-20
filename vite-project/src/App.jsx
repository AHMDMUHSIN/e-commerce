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

     




     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
