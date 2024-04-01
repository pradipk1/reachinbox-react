import React, { useContext } from 'react'
import myContext from '../../context/context';
import './Login.css';
import appLogo from '../../Images/appLogo.png';
import googleLogo from '../../Images/googleLogo.png';

function Login() {
    const data = useContext(myContext);
    console.log(data.dark);

  return (
    <div className='loginMain'>
        <div className='loginHeader'>
            <img src={appLogo} alt="appLogo" />
        </div>

        <div className='loginCardMain'>
            <div className='loginCard'>
                <div className='loginWithGoogleCont'>
                    <h4>Create a new account</h4>
                    <div className='signupWithGoogleBtnCont'>
                        <a href='https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-react.netlify.app/auth'>
                            <img src={googleLogo} alt="googleLogo" />
                            <span>Sign Up with Google</span>
                        </a>
                    </div>
                </div>

                <div className='loginCreateAccCont'>
                    <div className='loginCreateAccBtnCont'><button>Create an Account</button></div>
                    <p>Already have an account? <span>Sign In</span></p>
                </div>
            </div>
        </div>

        <div className='loginFooter'>
            <p>© 2023 Reachinbox. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Login;