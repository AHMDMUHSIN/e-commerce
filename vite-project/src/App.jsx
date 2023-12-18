import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Adminregistration from './components/adminreg/Adminregistration'
import Adminlogin from './components/adminlogin/Adminlogin'
import Forgetadminusername from './components/forgetadminusername/Forgetadminusername'
import Forgetadminpassword from './components/forgetadminpassword/Forgetadminpassword'
import Adminhome from './components/adminhome/Adminhome'
import Category from './components/category/Category'
import Products from './components/productes/Products'
import Editcategory from './components/editcategory/Editcategory'


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' Component={Adminlogin}/>
     <Route path='/adminreg' Component={Adminregistration}/>
     <Route path='/forgetadminusername' Component={Forgetadminusername}/>
     <Route path='/forgetadminpassword' Component={Forgetadminpassword}/>
     <Route path='/adminhome' Component={Adminhome}/>
     <Route path='/category' Component={Category}/>
     <Route path='/products' Component={Products}/>
     <Route path='/editcategory/:id' Component={Editcategory}/>
     




     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
