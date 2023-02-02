import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Logo from '../vinyl-record.png';
function Start() {
    return (
        
        <div className="Start" style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
            <div>
                <img src={Logo} width={200} height={200} alt="Logo Image" />
                <GoogleOAuthProvider clientId="186308992057-ltsrtcd39881hbdkm2pl91n20i97ntbm.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                            console.log("Success!");
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