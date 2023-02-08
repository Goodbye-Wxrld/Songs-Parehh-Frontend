import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Logo from '../vinyl-record.png';

import { Navigate } from 'react-router-dom';
function Start() {

    const [isSignedIn, setIsSignedIn] = React.useState(false);

    // on success, redirect to Instructions form
    if (isSignedIn) {
        return <Navigate to="/Instructions" />
    }

    return (
        
        <div className="Start" >
            <img src={Logo} width={200} height={200} alt="Logo Image" />
            <span class="text-overflow-center"><h2>Welcome to Music Rater</h2></span>
            <div className='googlesignin'>
                <GoogleOAuthProvider clientId="186308992057-ltsrtcd39881hbdkm2pl91n20i97ntbm.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                            console.log("Success!");
                            setIsSignedIn(true);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                </GoogleOAuthProvider>
            </div>
        </div>

        

    );
}

export default Start;