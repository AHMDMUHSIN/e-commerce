import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import './productdetailscustomer.scss'

const Productdetailscustomer = () => {
    let Size;
    const {id}=useParams()
    const [getProducts,setProduct]=useState({
        cust_id:"",
        productname:"",
        categoryname:"",
        price:"",
        size:"",
        banner:"",
        images:[]
    })

    const [name, setUser] = useState("");
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
        setUser(res.data.msg);
        setId(res.data.id);
      } catch (error) {
        console.error(error);
      } 
    };

    useEffect(() => {
        checkLocalStorage();
      }, []);

   

    const getProduct=async()=>{
        const res=await axios.get(`http://localhost:3005/snitch/getProduct/${id}` )
        setProduct(res.data)
        // console.log(getProducts);
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
          const res = await axios.post("http://localhost:3005/snitch/addToCart", {...getProducts,size:Size,cust_id:userid});
          console.log(res.data);
          if(res){
            alert("Added To Cart")
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
          const res = await axios.post("http://localhost:3005/snitch/addToWhishList", {...getProducts,size:Size,cust_id:userid});
          console.log(res.data);
          if(res){
            alert("Added To Wishlist")
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
      <nav className="navbar navbar-light  navbar-main">
  <div className='navbarcontent'>
   
   <button className='homebtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <div><HiMiniBars3CenterLeft />
   </div></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <div className='offcanvas-header2'>
        <div className='userlogo'><CiUser /></div>
        <div className='userlogotext' ><Link className='link5' >{name} </Link></div>
       
    
    </div>
    
    <button type="button" className='homebtn' data-bs-dismiss="offcanvas" ><VscClose /></button>
  </div>
  <div className='offcanvas-borderbottom' ></div>
  <div className="offcanvas-body">
   <div className='offcanvas-body-content'>NEW ARRAIVALS</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>MOST TRENDING</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>SHOP 
   </div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>TRACK ORDER</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content2main'>
   <div className='offcanvas-body-content2'>PLACE A </div>
   <div className='offcanvas-body-content2'>RETURN  / EXCHANGE</div>
   <div className='offcanvas-body-content2'>REQUEST</div>
   </div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>CUSTOMER SUPPORT</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>VISIT STORE</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>RELOVE</div>
   <div className='offcanvas-borderbottom' ></div>
  </div>
</div>




   <div className='snitchlogo'><img src="../../../public/download.png" alt="" /></div>
   <div className='homeicons'>
    
    <div><Link className='link5' to={`/userlogin`}><CiUser /></Link></div>
    <div><CiSearch /></div>
    <div><CiHeart /></div>
    <div><PiHandbagSimpleThin /></div>
   
   </div>
  </div>
</nav>



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
                        <div className='price'>Rs .  {getProducts.price}</div>
                        <div className='inc'>(incl. of all taxes)</div>
                        <div className='righttextborder1'></div>

                       <div className='offermain'>
                       <div className='offer'>
                            <div className='offerimg'><img src="../../../public/offer_icon-1_20x.webp" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 749 Use Code: SLAY</div>
                                <div>Flat 25% off on minimum order value of Rs. 2499/- Limited Period Offer!</div>
                            </div>
                            
                        </div> 
                        <div className='offer'>
                            <div className='offerimg'><img src="../../../public/offer_icon-1_20x.webp" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 849 Use Code: GET15</div>
                                <div>On minimum order value of Rs. 1999/-</div>
                            </div>
                            
                        </div>
                        <div className='offer'>
                            <div className='offerimg'><img src="../../../public/offer_icon-1_20x.webp" alt="" /></div>
                            <div>
                                <div>Get this for Rs. 899 Use Code: GET10</div>
                                <div>On minimum order value of Rs. 1499/-</div>
                            </div>
                            
                        </div>
                       
                       </div>

                       <select onChange={selectSize} className='select2' name="cars" id="cars">
  <option value="">Select size</option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
</select>



                       

                       

         

                        <div className='addtocart'><button onClick={addToCart}>ADD TO CART</button></div>
                        <div className='addtowishlist'><button onClick={addToWishList}><span className='addtowishlisticon'><CiHeart /></span> Add To Whishlist</button></div>
                        
                    </div>  
                </div>
            </div>
            
        </div>







    </div>
  )
}

export default Productdetailscustomer
