import React , { useEffect, useState } from 'react'
import axios from 'axios';
import { Link , useParams} from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { CiSquareRemove } from "react-icons/ci";
import './wishlist.scss'

const Wishlist = () => {

    const { id } = useParams();
    const [getPrdct, setProdct] = useState([]);

    const [name, setUser] = useState("");
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
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

    const getPrdctDetails = async () => {
        const res = await axios.get(`http://localhost:3005/snitch/getWishlistProduct/${id}`);
        setProdct(res.data);
        console.log(getPrdct);
    };

    useEffect(() => {
        getPrdctDetails();
    }, []);


    const delProduct = async (id) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this product from the wishlist?");
        if (userConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:3005/snitch/delWishListProduct/${id}`);
                console.log(res.data);
                getPrdctDetails();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
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




   <div className='snitchlogo'><img src="../download.png" alt="" /></div>
   <div className='homeicons'>
    
    <div><Link className='link5' to={`/userlogin`}><CiUser /></Link></div>
    <div><CiSearch /></div>
    <div><CiHeart /></div>
    <div><PiHandbagSimpleThin /></div>
   
   </div>
  </div>
</nav>

     <div className="wishlistmain">

        <div className="wishlistleft">
            <div className="wishlistlefttop">
                <div className='userprofile'></div>
                <div className='username2'>{name}</div>

            </div>
            <div className="wishlistleftbottom">
                <div className="wishlistleftbottomitem">
                    <div className='wishlistleftbottomicon'> <CiUser /></div>
                    <div>my profile</div>
                </div>
                <div className="wishlistleftbottomitem">
                    <div className='wishlistleftbottomicon'> <CiLocationOn /></div>
                    <div>delivery address</div>
                </div>
                <div className='wishlistleftbottomborder'></div>
                <div className="wishlistleftbottomitem">
                    <div className='wishlistleftbottomicon'> <PiHandbagSimpleThin /></div>
                    <div>my orders</div>
                </div>
                <div className='wishlistleftbottomborder'></div>
                <div className="wishlistleftbottomitem2">
                    <div className='wishlistleftbottomicon'> <div><CiHeart /></div></div>
                    <div>my wishlist</div>
                </div>

            </div>
        </div>
        <div className="wishlistright">
            <div className='username '> Good Afternoon! {name}</div>
            <div className="wishlistrightsub">

                 {
                    getPrdct.map((data, index) =>(

                        <div className='wishlistitem' key={index} >
                            <div className='removewishlistitem' onClick={()=>delProduct(data._id)}><CiSquareRemove /></div>
                         
                            <div className='wishlistitemhead'>{data.productname}</div>
                        
                           
                           
                        
                        <div className='wishlistitemimg'><img src={data.banner} alt="" /></div>
                        <div className='wishlistitemprice'>RS . {data.price}</div>
                        <select  className='select5' name="cars" id="cars">
    <option value="s">S</option>
    <option value="m">M</option>
    <option value="l">L</option>
    <option value="xl">XL</option>
    </select>
                        <select  className='select4' name="cars" id="cars">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <div className='removecart3'><button >ADD to cart</button></div>
                    </div>


                     ))
                 }


               
                
                

            </div>


        </div>




     </div>













    </div>
  )
}

export default Wishlist
