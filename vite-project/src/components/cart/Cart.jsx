import React,{ useEffect, useState } from 'react'
import './cart.scss'
import {  useParams } from 'react-router-dom'
import {Link } from 'react-router-dom';
import axios from 'axios';
import Navbar  from '../navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Cart = () => {

  const success = () =>
  toast.success("Order Placed",{
    position: "top-right",
autoClose: 1500,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
  })

    const {id}=useParams()
    
    const [totalPrice,setTotalPrice]=useState(0)
    const [getPrdct,setProdct]=useState([])
   
  
    useEffect(() => {
      const totalPriceSum = getPrdct.reduce((sum, product) => sum + Number(product.price * product.quantity), 0);
      setTotalPrice(totalPriceSum);
    }, [getPrdct]);
  
    const updateQuantity=async(id,e)=>{
      try {
        const newQuantity = parseInt(e);
        console.log(newQuantity);
        const res=await axios.patch(`http://localhost:3005/snitch/updateCartItem/${id}`,{quantity:newQuantity})
        console.log(res.data);
        getPrdctDetails()
      } catch (error) {
        console.log(error);
      }
    }

    const getPrdctDetails=async()=>{
      const res=await axios.get(` http://localhost:3005/snitch/getCartProduct/${id}`)
      
      setProdct(res.data)
      
    }
    useEffect(()=>{
      getPrdctDetails()
    },[])


    const BuyNow = async (e) => {
      e.preventDefault();
      const userConfirmed = window.confirm("Are you sure you want to proceed to checkout?");
      if (userConfirmed) {
        try {
  
         
          await axios.post(`http://localhost:3005/snitch/placeOrder/${id}`);
          success(setTimeout(()=>{
            window.location.reload() 
        },1500));
          
         
        } catch (error) {
          console.error("Error deleting products:", error);
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
                          
                          <select  onChange={(e)=>{updateQuantity(data.prod_id,e.target.value)}}  className='select3' name="cars" id="cars">
                          <option >Selected Quantity  : {data.quantity}</option>
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
  
     

  {/* {getPrdct==""?(""):(<div>
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
<div className='total2'>RS . {totalPrice ? totalPrice + 89 : 89}</div>
</div></div>)}    */}

{getPrdct==""?(""):(<div>
<div className='totalmain2'>
<div className='total'>total </div>
<div className='total2'>RS . {totalPrice ? totalPrice : 0}</div>
</div>

{totalPrice>2500?(""):(<div ><div className='totalmain2'>
<div className='total2'>Estimated Delivery Fee </div>
<div className='total2'>RS . 89</div>
</div></div>)}

{/* <div className='totalmain2'>
<div className='total2'>Estimated Delivery Fee </div>
<div className='total2'>RS . 89</div>
</div> */}

<div className='cartheadbarder3'></div>

<div className='totalmain2'>
<div className='total2'>subtotal</div>
<div className='total2'>RS . {totalPrice ? totalPrice + 89 : 89}</div>
</div></div>)} 
      

{getPrdct==""?(""):(<div className='removecart2'><button onClick={BuyNow}>Place order</button>
<ToastContainer 
				
				position="top-right"
autoClose={1500}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
				
				/>



</div>





)}




      </div>

     

      
 
      

   
      
    
    </div>
  )
}

export default Cart
