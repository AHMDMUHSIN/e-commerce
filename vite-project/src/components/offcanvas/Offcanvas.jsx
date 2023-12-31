import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios';
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";

const Offcanvas = () => {



    const {id}=useParams()
    const [totalPrice,setTotalPrice]=useState(0)
    const [getPrdct,setProdct]=useState([])
    const getPrdctDetails=async()=>{
      const res=await axios.get(` http://localhost:3005/snitch/getCartProduct/${id}`)
      // console.log(res.data);
      setProdct(res.data)
      // console.log(getPrdct);
    }
    useEffect(()=>{
      getPrdctDetails()
    },[])
  
    useEffect(() => {
      const totalPriceSum = getPrdct.reduce((sum, product) => sum + Number(product.price), 0);
      setTotalPrice(totalPriceSum);
    }, [getPrdct]);
  
    const qty = (e, index) => {
      const selectedQuantity = parseInt(e.target.value, 10);
      const productPrice = getPrdct[index].price;
     
      if (!isNaN(productPrice)) {
        console.log(getPrdct[index].price);
        const updatedPrice = selectedQuantity * productPrice
        console.log(updatedPrice);
        const updatedGetPrdct = [...getPrdct];
        updatedGetPrdct[index].price = updatedPrice;
        setProdct(updatedGetPrdct);
      } else {
        console.error('Invalid product price:', productPrice);
      }
    };
  return (
    <div>
      <button className="cartoffcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<div><PiHandbagSimpleThin /></div>
   
</button>

<div className="offcanvas offcanvas-start cartoffcanvas2"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <div className='carthead'>Cart</div>
    
    <button type="button" className='homebtn' data-bs-dismiss="offcanvas" ><VscClose /></button>
  </div>
  <div className='cartheadborderbottom'></div>
  <div className="offcanvas-body">

  
      
  {
    getPrdct.map((data,index)=> 

   
     
<div className='cartbody'  key={index}  >

<div className='cartbodyleft'>

  <div><img src={data.banner} alt="" /></div>

 

</div>
<div className='cartbodyright'>
  <div className='cartproductname'></div>
  <div className='cartproductname'>Size : </div>
  <div className='cartproductname'>Price : </div>

  <select onChange={(e) => qty(e, index)}  className='select3' name="cars" id="cars">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>

<div className='cartbtn'>


<div className='removecart'><button >Remove </button></div>
</div>


</div>

<div className='totalmain'>
  <div className='total'>Subtotal</div>
  {totalPrice ? totalPrice : 0}

</div>

</div>


    )

   }
<div className='removecart2'><button>Buy now</button></div>


   
   
  </div>
</div>
    </div>
  )
}

export default Offcanvas
