import React , {useState }  from 'react';
import { useNavigate } from 'react-router-dom';
// import signpic form "./image/f1.png";


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';



const Register = () => {
  const navigate = useNavigate();

  const[user , setUser]= useState({
    'name':"" , 'email':"" , 'work':"" ,  'phone':"" ,
    'password':"" , 'cpassword':"" 
  });

  let name,value;
  const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user , [name]:value})
  }

  const postData = async(e)=>{
e.preventDefault();

const{ name , email , work , phone , password , cpassword}=user;
const res = await fetch("/Register" , {
  method:"POST" , headers:{"Content-Type" : "application/json"},
  body:JSON.stringify({
    name , email , work , phone , password , cpassword
  })
});

const data = await res.json();
if (data.status===422||!data) {
  window.alert("invalid registration")
  console.log("invalid register")
} else {
  window.alert("sucees registration")
  console.log("succes register")
  navigate('/login');
}
}


  
  return (
    <> 


<MDBContainer fluid className="p-6 my-5" method = "POST">

<MDBRow>


  <MDBCol col='4' md='6'>


    <MDBInput className='mb-4' label='name' id='name' name='name' type='name' size="lg" value={user.Name} onChange={handleInputs}       />
    <MDBInput className='mb-4' label='email' id='email'  size="lg" name='email' type='email' value={user.Email} onChange={handleInputs}  />
    
    <MDBInput className='mb-4' label='phone' id='phone' name='phone' type='phone' size="lg" value={user.phone} onChange={handleInputs} />
    <MDBInput className='mb-4' label='work' id='work' name='work' type='work' size="lg" value={user.Work} onChange={handleInputs}/>


    <MDBInput className='mb-4' label='password' id='password'name='password' type='password' size="lg" value={user.Password} onChange={handleInputs}    />
    <MDBInput className='mb-4' label='cpassword' id='cpassword'  name='cpassword' type='cpassword' size="lg" value={user.cPassword} onChange={handleInputs}  />



    <div className="d-flex justify-content-between mx-2 mb-2">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a to="!#">Forgot password?</a>
    </div>

    <MDBBtn className="mb-3 w-30" size="lg" onClick={postData} >Submit</MDBBtn>

   <div className="divider d-flex align-items-center my-4">
    </div>


  </MDBCol>
  
  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
  </MDBCol>

</MDBRow>

</MDBContainer>





   
    </>
    
  )
}

export default Register