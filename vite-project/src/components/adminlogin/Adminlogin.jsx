import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import './adminlogin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Adminlogin = () => {

    const success = () =>
    toast.success("Login succesful",{
       position: "top-right",
       autoClose:2500 ,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true, 
       draggable: true,
       progress: undefined, 
       theme: "dark",
    })
   
   
   
   
   const navigate=useNavigate()
   const [username,setUser]=useState("");
   const [password,setPassword]=useState("");
   
   const handleLogin = async (e) => {
     e.preventDefault()
     try {
       const response = await axios.post("http://localhost:3005/snitch/adminlogin", {
   
       username: username,
       password: password
       });
   
       const data = response.data;
       console.log(data);
   
       if (response.status !== 404) {
       const token = data.token;
       localStorage.setItem("admintoken", JSON.stringify(token));
       success(setTimeout(()=>{
           navigate("/adminhome");
       },3000),{ state: { username } });
       } else {
       alert(data.msg);
       }
     } catch (error) {
       alert("Server not connected");
     }
   };






  return (
    <div>
            <div className="container">
	<div className="screen2">
		<div className="screen__content">
            <div className='head'>Admin Login</div>
			<form className="login2">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name "   onChange={(e) => setUser(e.target.value)} />
				</div>
			
             
                <div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}/>
				</div>
                <div className='forget' > Forget  <Link to={`/forgetadminusername`} className='link2'> Username </Link> Or <Link to={`/forgetadminpassword`} className='link2'> Password</Link></div>
               
				<div>
                    <button onClick={handleLogin} className='btn'>Login</button>
                    <ToastContainer 
				
				position="top-right" 
				autoClose={2500}
				hideProgressBar={false} 
				newestOnTop={false} 
				closeOnClick 
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				
				/>
                </div>
               


			</form>
			<div className="social-login">
				<div><Link className='link' to={`/adminreg`}>sign in</Link></div>
                
				
			
				

				
				
			</div>
		
		</div>
<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	
</div>




<Link to={`home`}> <div>home</div></Link>





    </div>
  )
}

export default Adminlogin
