import React ,{useState}from 'react'
import './forgetadminusername.css'
// import { Link } from 'react-router-dom'
import axios from 'axios';

const Forgetadminusername = () => {

    const [phone, setPhone] = useState("");
    const [emp, setEmp] = useState(""); 
    const [usernameMessage, setUsernameMessage] = useState(""); 
  
    const handleChange = (e) => {
      setPhone(e.target.value);
    };
  
    const getUsername = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.get(`http://localhost:3005/snitch/adminusername/${phone}`);
        setEmp(res.data.username);
        setUsernameMessage(` ${res.data.username}`);
      } catch (error) {
        setUsernameMessage("username not found"); // Handle error if username is not found
      }
    };


  return (
    <div>
                 <div className="container">
	<div className="screen2">
		<div className="screen__content">
            <div className='head'>Forgot Username</div>
			<form className="login3">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input2" onChange={handleChange}  placeholder="Enter Your Phone Number "   />
				</div>
			
                <div className='username'><span className='username2'>Username Is  : </span>   {usernameMessage}</div>
  
                
               
				<div>
                    <button onClick={getUsername}  className='btn'>Find Username</button>
            
                </div>
               


			</form>
		
		
		</div>
<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	
</div>
    </div>
  )
}

export default Forgetadminusername
