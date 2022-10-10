import { GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import GoogleLogout from 'react-google-login';

function Component(){
    const [name,setName]=useState('')
    const [photo,setPhoto]=useState('')
    const [isLoggedIn,SetIsLoggedIn] = useState(false)
    function logout(){
        setName('')
        setPhoto('')
        SetIsLoggedIn(true)
    }
return <div> 

<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse)
    var decoded = jwt_decode(credentialResponse.credential)
    console.log(decoded)
    setName(decoded.name)
    setPhoto(decoded.picture)
    SetIsLoggedIn(true)
    // window.localStorage.setItem('name',decoded.name)
  }}
  onError={() => {
    console.log('Login Failed')
  }}
/> 
<br/>
{isLoggedIn?<GoogleLogout  buttonText="Logout" 
 onLogoutSuccess={logout}/>: 'Something Went wrong!'}
<h2>{name}</h2>
<img src={photo}></img>

</div>
}
export default Component;
