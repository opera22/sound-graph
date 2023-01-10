import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jwt-decode';

import "./Login.css"

const { REACT_APP_OAUTH_CLIENT_ID } = process.env;

function Login({setIsLoggedIn}) {

    return (
      <div className="Login">
        <GoogleOAuthProvider clientId={REACT_APP_OAUTH_CLIENT_ID}>
          <div className="welcomeMessage">
            Welcome. Sign in with Google.
          </div>
          {/* <div className="login-button"> */}
            <GoogleLogin
              onSuccess={credentialResponse => {
                // console.log("Succeeded!")
                console.log(credentialResponse);
                console.log("Decoded:")
                console.log(jwt(credentialResponse["credential"]))
                localStorage.setItem('abstralis-auth-token', credentialResponse["credential"])
                // setName(jwt(credentialResponse["credential"])["given_name"])

                setIsLoggedIn(true)
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          {/* </div> */}
      </GoogleOAuthProvider>
      </div>
    );
  }
  
  export default Login;