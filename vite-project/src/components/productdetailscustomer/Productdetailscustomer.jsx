import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './productdetailscustomer.scss'
import Navbar  from '../navbar/Navbar'





const Productdetailscustomer = () => {

 

  const [loading, setLoading] = useState(true);

 


    
    const [cartItems,setCartItems]=useState([])
    const [wishlistItems,setWishlistItems]=useState([])
    let product_id
    let Size;
    const {id}=useParams()
    const [getProducts,setProduct]=useState({
        cust_id:"",
        prod_id:"",
        productname:"",
        categoryname:"",
        price:"",
        size:"",
        quantity:"",
        banner:"",
        images:[]
    })

    
    const [userid, setId] = useState("");
    const checkLocalStorage = async () => {
      try {
        const admintoken = JSON.parse(localStorage.getItem("usertoken"));
        if (!admintoken) {
          console.error("Token not found in localStorage");
          return;
        }
        const res = await axios.post(
          "http://localhost:3005/snitch/fetchcustomername",
          null,
          {
            headers: { Authorization: `Bearer ${admintoken}` },
          }
        );
        setId(res.data.id);
      } catch (error) {
        console.error(error);
      } 
    };

    useEffect(() => {
        checkLocalStorage();
      }, []);


      useEffect(() => {
        if (userid) {
          getPrdctDetails();
        }
      }, [userid]);

      const getPrdctDetails = async () => {
        try {
          const res = await axios.get(`http://localhost:3005/snitch/getCartProduct/${userid}`);
          setCartItems(res.data);
          console.log("All prod_id in cartItems:", cartItems.map(item => item.prod_id));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching cart items:", error);
          setLoading(false);
        }
    
      };
      
    
      useEffect(() => {
        getPrdctDetails();
      }, []);

      useEffect(() => {
        if (userid) {
          getwishlistPrdctDetails();
        }
      }, [userid]);

      const getwishlistPrdctDetails = async () => {
        try {
          const res = await axios.get(`http://localhost:3005/snitch/getWishlistProduct/${userid}`);
          setWishlistItems(res.data);
          console.log("All prod_id in cartItems:", wishlistItems.map(wishitem => wishitem.prod_id));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching cart items:", error);
          setLoading(false);
        }
    
      };
     
    
      useEffect(() => {
        getwishlistPrdctDetails();
      }, []);

   

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:3005/snitch/getProduct/${id}` )
        setProduct(res.data)
        product_id=res.data._id
        console.log("prooooood",product_id);
        
       
    }
  
    useEffect(()=>{
        getProduct()
    },[])

    const selectSize=(e)=>{
        Size=e.target.value;
        console.log(Size);
    }

    const addToCart = async () => {
      
        try {
            if (!Size) {
                alert("Please select the size");
                return;
              }
          const res = await axios.post("http://localhost:3005/snitch/addToCart", {...getProducts,size:Size,cust_id:userid,quantity:1,prod_id:getProducts._id});
          console.log(res.data);
          if(res){

            alert("Added To cart")
             window.location.reload();
           
            // toast('Here is your toast.')
          //   success(setTimeout(()=>{
          //     window.location.reload();
          // },1500));
          
          }else{
            alert("Error adding product to cart. Please try again.")
          }
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Error adding product to cart. Please try again.");
        }
      }

      const addToWishList = async () => {
        try {
          const res = await axios.post("http://localhost:3005/snitch/addToWhishList", {...getProducts,size:Size,cust_id:userid,quantity:1,prod_id:getProducts._id});
          console.log(res.data);
          if(res){
            alert("Added To Wishlist")
            window.location.reload();
          }else{
            alert("Error adding product to Wishlist. Please try again.")
          }
        } catch (error) {
            console.error("Error adding product to Wishlist:", error);
            alert("Error adding product to Wishlist. Please try again.");
        }
      };
     

     
  
  return (
    <div>
    
<Navbar/>



        <div className="productfulldetails">
            <div className='productfulldetailssub'>
                <div className="productfulldetailleft">
                    <div className='leftimages'>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[0]} alt="" />)}</div>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[1]} alt="" />)}</div>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[2]} alt="" />)}</div>
                        <div className='leftimagessub'>{getProducts.images && getProducts.images[0] && (<img src={getProducts.images[3]} alt="" />)}</div>
                        
                    </div>
                    <div className='bannerimg'>
                        <img src={getProducts.banner}alt="" />
                    </div>

                </div>
                <div className="productfulldetailright">
                    <div className='righttext'>
                        <div className='righttext-head'>
                        {getProducts.productname}
                        </div>
                        <div className='righttext-description'>
                        {getProducts.description}
                        </div>
                        <div className='price'>Rs .  {getProducts.price}</div>
                        <div className='inc'>(incl. of all taxes)</div>
                        <div className='righttextborder1'></div>

                       <div className='offermain'>
                      
                      
                       <div className='offer'>
                            <div className='offerimg'><img src="../offer_icon-1_20x.webp" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 749 Use Code: SLAY</div>
                                <div>Flat 25% off on minimum order value of Rs. 2499/- Limited Period Offer!</div>
                            </div>
                            
                        </div> 
                        <div className='offer'>
                            <div className='offerimg'><img src="../offer_icon-1_20x.webp" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 849 Use Code: GET15</div>
                                <div>On minimum order value of Rs. 1999/-</div>
                            </div>
                            
                        </div>
                        <div className='offer'>
                            <div className='offerimg'><img src="../offer_icon-1_20x.webp" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 899 Use Code: GET10</div>
                                <div>On minimum order value of Rs. 1499/-</div>
                            </div>
                            
                        </div>
                       
                       </div>

                       <select onChange={selectSize} className='select2' name="size" id="cars">
  <option value="">Select size</option>
  <option value="size_S">S</option>
  <option value="size_M">M</option>
  <option value="size_L">L</option>
  <option value="size_XL">XL</option>
</select>

<div>
{ cartItems.map(item => item.prod_id).includes(getProducts._id)? (
             
              <div className='addtocart'><button ><Link className='gotocart' to={`/cart/${userid}`}>
              Go to Cart 
              </Link></button></div>
            ) : (
              
              <div>
                 <div className='addtocart'><button  onClick={addToCart}>ADD TO CART</button> </div>
               
               

              </div>

              
            )}
</div>


<div>
{ wishlistItems.map(wishitem => wishitem.prod_id).includes(getProducts._id)? (
             
              <div className='addtowishlist2'><button ><Link className='gotocart2' to={`/wishlist/${userid}`}>
                <span className='addtowishlisticon'><CiHeart /></span> 
              Go to Whishlist  
              </Link></button></div>
            ) : (
              
              <div>
                   <div className='addtowishlist'><button onClick={addToWishList}><span className='addtowishlisticon'><CiHeart /></span> Add To Whishlist</button></div>
            

              </div>

              
            )}
</div>
                       



                        <div className='codcheck'>
                          <div className='codcheckhead'>Estimated Delivery Date & COD Checker</div>
                          <div className='codchecksub'>
                            <div className='codcheckinput'><input type="text"  placeholder='enter your pincode'/></div>
                            <div className='codcheckbtn'><button>check</button></div>
                          </div>
                        </div>
            
                        
                    </div>  
                </div>
            </div>
            
        </div>







    </div>
  )
}

export default Productdetailscustomer
