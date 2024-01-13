import React , { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css'
import Navbar from '../navbar/Navbar';



const Home = () => {

  const [getProducts,setProducts]=useState([])
  const getAllProducts=async()=>{
    const res=await axios.get("http://localhost:3005/snitch/getAllProducts") 
    setProducts(res.data)
    console.log(getProducts);
  }
  useEffect(()=>{
    getAllProducts()
  },[])

 



return (
    <div>

      
      
      


<Navbar/>


 




{/* ///////////////  carousel///////// */}

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../Web-banner_copy_2.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Web-banner_7.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Homepage-Banner_1_OLqQos3.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Homepage-Banner_Hardik-Gangsta_QqsVPG8.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Web-banner_6.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



{/* /////////////////////// */}

<div id='newarrivals' className='catogory2'>New arrivals</div>
<div className="products-customer">





{
   getProducts
   .slice(-5)
   .reverse()
   .map((data, index) => (

<Link  key={index} to={`/productdetailscustomer/${data._id}`} className='link5'>
<div className="productcard">
   <div className='productimg' >
     <img src={data.banner} alt="" />
   </div>
   <div className='productname'>
   {data.productname}
   </div>
   <div className='productprice'>
   R<span className='productpricesub'>s</span> . {data.price}
   </div>
   <div className='productsize'>
     <div className='productsizesub'>S</div>
     <div className='productsizesub'>M</div>
     <div className='productsizesub'>L</div>
     <div className='productsizesub'>XL</div>

   </div>
 </div>
</Link>
   ))
}


 

</div>



{/* //////////////// */}

<div className='catogory2'>Casual Shirts</div>

<div className="products-customer">

{
   getProducts.filter((data) => data.categoryname === 'Casual Shirts')
   .map((data, index) => (

<Link  key={index} to={`/productdetailscustomer/${data._id}`} className='link5'>
<div className="productcard">
   <div className='productimg' >
     <img src={data.banner} alt="" />
   </div>
   <div className='productname'>
   {data.productname}
   </div>
   <div className='productprice'>
   R<span className='productpricesub'>s</span> . {data.price}
   </div>
   <div className='productsize'>
     <div className='productsizesub'>S</div>
     <div className='productsizesub'>M</div>
     <div className='productsizesub'>L</div>
     <div className='productsizesub'>XL</div>

   </div>
 </div>
</Link>
   ))
}





 

</div>

<div className='catogory2'>Casual pants</div>

<div className="products-customer">

{
   getProducts.filter((data) => data.categoryname === 'Casual Pants')
   .map((data, index) => (

<Link  key={index} to={`/productdetailscustomer/${data._id}`} className='link5'>
<div className="productcard">
   <div className='productimg' >
     <img src={data.banner} alt="" />
   </div>
   <div className='productname'>
   {data.productname}
   </div>
   <div className='productprice'>
   R<span className='productpricesub'>s</span> . {data.price}
   </div>
   <div className='productsize'>
     <div className='productsizesub'>S</div>
     <div className='productsizesub'>M</div>
     <div className='productsizesub'>L</div>
     <div className='productsizesub'>XL</div>

   </div>
 </div>
</Link>
   ))
}





 

</div>

{/* <form onSubmit={handleFormSubmit}>
      <input type="text" name="inputField" />
      <button type="submit">Submit</button>
    </form> */}

   



<div className='acheivement'>
  <img src="../1_7bd18f46-c71d-47ab-b852-483ca2a78d70.webp" alt="" />
</div>










 <div id='footer'  className='footer-top-border'></div>

 <div className='footer1'>
   <div className='footer-contents'>
     <div className='footer-contents-head'>VISIT OFFLINE STORE</div>
     <div className='footer-content'>Jayanagar, Bangalore:</div>
     <div className='footer-content'><a href="">Get Directions</a></div>
     <div className='footer-content'></div>

   </div>
   <div className='footer-border'></div>
   <div className='footer-contents'>
     <div className='footer-content'>Contact Us</div>
     <div className='footer-content'>FAQ</div>
     <div className='footer-content'>Blogs</div>
     <div className='footer-content'>Terms & Conditions</div>
     
     <div className='footer-content'></div>

   </div>
   <div className='footer-border'></div>
   <div className='footer-contents'>
     <div className='footer-content'>TRACK ORDER</div>
     <div className='footer-content'>PLACE RETURN/EXCHANGE REQUEST</div>
     <div className='footer-content'>RETURNS/EXCHANGE POLICY</div>
     <div className='footer-content'></div>

   </div>
   <div className='footer-border'></div>
   <div className='footer-contents'>
     <div className='footer-contents-head'>CUSTOMER CARE</div>
     <div className='footer-content'>Timings: 10 AM - 8 PM (Mon - Sun)</div>
     <div className='footer-content'>Whatsapp : +91 6366966283</div>
     <div className='footer-content'>Instagram: @snitch.co.in</div>
    
     <div className='footer-content'></div>

   </div>
  

 </div>

 <div className='copyright'>© 2023 SNITCH | All Rights Reserved</div>


 
    </div>
  )
}

export default Home
