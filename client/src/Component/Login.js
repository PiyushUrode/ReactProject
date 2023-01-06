import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const Login = () => {
  const navigate = useNavigate();
  const[email , setemail] = useState('');
  const[password , setpassword] = useState('');
  const loginuser = async(e)=>{
    e.preventDefault();
    const res = await fetch('/login', {
      
  method:"POST" , headers:{"Content-Type" : "application/json"} , 
    body:JSON.stringify({
      email , password
    }) 
  })
  const data = await res.json();
if (res.status===422||!data) {
  window.alert("invalid credit")
  console.log("invalid credit")
} else {
  window.alert("sucees login")
  console.log("succes login")
  navigate('/');
}
  }



  return (
<>
<MDBContainer fluid className="p-3 my-5" method="POST">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
  </MDBCol>

  <MDBCol col='4' md='6'>


    <MDBInput className='mb-4' label='Email address' id='email' type='email' name='email'  value={email} onChange={(e)=>setemail(e.target.value)} size="lg"/>
    <MDBInput className='mb-4' label='Password' id='password' type='password' name='password'  value={password} onChange={(e)=>setpassword(e.target.value)} size="lg"/>


    <div className="d-flex justify-content-between mx-4 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <MDBBtn className="mb-4 w-100" size="lg" onClick={loginuser}>login</MDBBtn>

    <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0">OR</p>
    </div>

    <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
      <MDBIcon fab icon="facebook-f" className="mx-2"/>
      Continue with facebook
    </MDBBtn>

    <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
      <MDBIcon fab icon="twitter" className="mx-2"/>
      Continue with twitter
    </MDBBtn>

  </MDBCol>

</MDBRow>

</MDBContainer>

</>
  )
}

export default Login