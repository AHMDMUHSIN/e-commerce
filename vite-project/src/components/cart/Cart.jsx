import React,{ useEffect, useState } from 'react'
import './cart.scss'
import {  useParams } from 'react-router-dom'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import Navbar  from '../navbar/Navbar';

const Cart = () => {



    const {id}=useParams()
    const navigate=useNavigate()
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

    const BuyNow = async (e) => {
        e.preventDefault();
        const userConfirmed = window.confirm("Are you sure you want to proceed to checkout and delete all products?");
        if (userConfirmed) {
          try {
            // Delete all products with the same cust_id
            await axios.delete(`http://localhost:3005/snitch/delAlltProduct/${id}`);
            alert("Order Placed");
            navigate("/")
          } catch (error) {
            console.error("Error deleting products:", error);
            // alert("An error occurred while deleting products");
          }
        }
      };

      const delCartPrdct = async (id) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this product from the cart?");
        if (userConfirmed) {
          try {
            const res = await axios.delete(`http://localhost:3005/snitch/delCartProduct/${id}`);
            console.log(res.data);
            if (res) {
              alert("Product deleted");
            } else {
              alert("Product not deleted");
            }
            getPrdctDetails();
          } catch (error) {
            console.error("Error deleting product:", error);
          }
        }
      };




  return (
    <div>

<Navbar/>

            
      <div className="cartmain">

      <div className='carthead'>Cart</div>
      <div className='cartheadbarder1'></div>

      {getPrdct.length === 0 ? (
                   <>
                    {/* <p className="no-items-message">No items in the cart</p> */}
                    <div className="no-items-message">
                    <div>Cart is empty !</div>
                    <div className='shp-now-btn1' ><Link className='shp-now-btn' to='/'>Shop Now</Link></div>
                    </div>
                   </>
                ) : (
                    <>
                        {getPrdct.map((data, index) => (
                          <div key={index}>
                          <div   className='cartbody'>
                          <div className='cartbodyleft2'>
                              <div className="cartbanner">
                                  <img src={data.banner} alt="" />
                              </div>
                          
                          </div>
                          <div className='cartbodyright2'>
                          <div className='cartproductname'>{data.productname}</div>
                          <div className='cartproductname'>Size : {data.size}</div>
                          <div className='cartproductname'>Price : {data.price}</div>
                          
                          <select onChange={(e) => qty(e, index)}  className='select3' name="cars" id="cars">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          </select>
                          
                          <div className='removecart'><button onClick={()=>delCartPrdct(data._id)} >Remove </button></div>
                          
                          </div>
                          
                          
                          
                          </div>
                          <div className='cartheadbarder2'></div>
                          </div>
                        ))}
                    </>
                )}
  
     

    
      


<div className='totalmain2'>
<div className='total'>total </div>
<div className='total2'>RS . {totalPrice ? totalPrice : 0}</div>
</div>

<div className='totalmain2'>
<div className='total2'>Estimated Delivery Fee </div>
<div className='total2'>RS . 89</div>
</div>

<div className='cartheadbarder3'></div>

<div className='totalmain2'>
<div className='total2'>subtotal</div>
<div className='total2'>RS . {totalPrice ? totalPrice + 99 : 99}</div>
</div>


<div className='removecart2'><button onClick={BuyNow}>Place order</button></div>






      </div>

     

      
 
      

   
      
    
    </div>
  )
}

export default Cart
