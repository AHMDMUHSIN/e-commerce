import React from 'react'
import './product.css'
import { FcTimeline } from "react-icons/fc";

const Products = () => {
  return (
    <div >
        <div className='cmain'>

<div className="modal2">
<form className="form">
  <div className='head2'>
  <div><FcTimeline /></div>
  <div className='chead'> Add Product</div>
  </div> 

  <div className='pmain'>

  <div className='pleft'>
  <div className="credit-card-info--form">
    <div className="input_container">
      <label  className="input_label">Product Name</label>
      <input id="password_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Category Name</label>
      <input id="password_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Description</label>
      <textarea className="input_field3" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div className="input_container">
      <label  className="input_label">Price</label>
      <input id="password_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Size</label>
      <div className='sizeboderbottom'></div>
     <div className='sizes'>

     <div className='sizesub'>
        <div> <label  className="input_label">S</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="input-name" title="Inpit title" placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">M</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="input-name" title="Inpit title" placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">L</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="input-name" title="Inpit title" placeholder=""/> </div>
      
      </div>
      <div  className='sizesub'>
        <div> <label  className="input_label">XL</label></div>
        <div> <input id="password_field" className="input_field4" type="text" name="input-name" title="Inpit title" placeholder=""/> </div>
      
      </div>
     </div>
     
    </div>
    <div className="input_container">
      <label  className="input_label">Stock</label>
      <input id="password_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder=""/>
    </div>
   
 
  </div>
  </div>
  <div className='pright'>
   
   <div className="input_container2">
    
   <div className="container5"> 
 
  <div className='pimg'>
    <img src="../../../public/stylish-young-handsome-man-classy-outfit.jpg" alt="" />
   </div>
  
  <label for="file" className="footer"> 
    <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg> 
    <p>Choose File</p> 
    
  </label> 
  <input id="file" type="file"/> 
</div>

  
    </div>
  </div>
  </div>
 

    <button className="purchase--btn">Add</button>
</form>
</div>
</div> 
    </div>
  )
}

export default Products
