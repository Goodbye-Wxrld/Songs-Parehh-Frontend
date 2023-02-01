import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
function Start() {
    return (
        <div className="Start">
            
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
    );
}

export default Start;