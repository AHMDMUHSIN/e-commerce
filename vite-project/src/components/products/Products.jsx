import React, { useEffect, useState } from 'react'
import './product.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcTimeline } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Products = () => {



  const success = () =>
  toast.success("Product Added",{
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const navigate=useNavigate()

  let Banner="";
  let Images=""
  const [getCat,setCat]=useState([])
  const [val,setVal]=useState({
    productname:"",
    categoryname:"",
    description:"",
    price:"",
    stock:{
      size_S:"",
      size_M:"",
      size_L:"",
      size_XL:"",
    },
    images:[]
  })
  const GetData=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  const getCategory=async()=>{
    const res=await axios.get("http://localhost:3005/snitch/getcategory")
    setCat(res.data)
    console.log(getCat);
  }
  useEffect(()=>{
    getCategory()
  },[])

  
  function convertToBase64Banner(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }

  const GetBanner=async(e)=>{
    e.preventDefault()
  
    Banner=await convertToBase64Banner(e.target.files[0])
    console.log(Banner);
  }



   
  const convertToBase64Images = (files) => {
    return Promise.all(
      Array.from(files).map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener('load', () => resolve(reader.result));
          reader.addEventListener('error', (error) => reject(error));
          reader.readAsDataURL(file);
        });
      })
    );
  };


  const GetImages=async(e)=>{
    e.preventDefault()
  
    Images=await convertToBase64Images(e.target.files)
    console.log(Images);
    // setVal(Images)
  }

  const GetStock=(e)=>{
    setVal((pre) => ({...pre,stock: { ...pre.stock, [e.target.name]: e.target.value },}));
  }



  const addProduct=async(e)=>{
    try {
      e.preventDefault()
      const res = await axios.post("http://localhost:3005/snitch/addproduct",{...val,images:Images,banner:Banner})
      console.log(res.data);
      if(res){
        success();
            setTimeout(()=>{
                navigate("/adminhome");
            },1500);
      }
    } catch (error) {
      console.log(error);
    }
  }







  return (
    <div >
        <div className='cmain'>

<div className="modal2">
<form className="form" onSubmit={addProduct}  >
  <div className='head2'>
  <div><FcTimeline /></div>
  <div className='chead'> Add Product</div>
  </div> 

  <div className='pmain'>

  <div className='pleft'>
  <div className="credit-card-info--form">
    <div className="input_container">
      <label  className="input_label">Product Name</label>
      <input id="password_field" className="input_field" type="text" name="productname" onChange={GetData} title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Category Name</label>
      <select name="categoryname" id="category"  className="select" onChange={GetData}>
      <option value="">Select category</option>
     {
      getCat.map((data,index)=>
         
      
        <option className='option' value={data.category} key={index}>{data.categoryname}</option>
     )
     }
      </select>
    </div>
    <div className="input_container">
      <label  className="input_label">Description</label>
      <textarea className="input_field3" name="description" id="" cols="30" onChange={GetData} rows="10"></textarea>
    </div>
    <div className="input_container">
      <label  className="input_label">Price</label>
      <input id="password_field" className="input_field" type="text" name="price" onChange={GetData} title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Size & Stock</label>
      <div className='sizeboderbottom'></div>
     <div className='sizes'>

     <div className='sizesub'>
        <div> <label  className="input_label">S</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_S" title="Inpit title"  onChange={GetStock} placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">M</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_M" title="Inpit title"  onChange={GetStock} placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">L</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_L" title="Inpit title"  onChange={GetStock} placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">XL</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="size_XL" title="Inpit title"  onChange={GetStock} placeholder=""/> </div>
      
      </div>
     </div>
     
    </div>
    <div className="input_container">
      <label  className="input_label">Banner</label>
      <label  className="footer"> 
    <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg> 
    <div className='choosefile'>Choose File</div>
   <div className='file'> <input id='file'  onChange={GetBanner} multiple type="file" name='images'  /> </div>
    
    
  </label> 
      
    </div>
   
 
  </div>
  </div>
  <div className='pright'>
   
   <div className="input_container2">
    
   <div className="container5"> 
 
  <div className='pimg'>
    <img src="../stylish-young-handsome-man-classy-outfit.jpg" alt="" />
   </div>


  
  <label  className="footer"> 
    <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg> 
    <div className='choosefile'>Choose File</div>
   <div className='file'> <input id='file'  onChange={GetImages}  multiple type="file" name='images'  /> </div>
    
    
  </label> 
  
</div>

  
    </div>
  </div>
  </div>
 

    <button className="purchase--btn">Add</button>
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
</form>
</div>
</div> 
    </div>
  )
}

export default Products
