import React from 'react';
import {useSignInWithFacebook, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loding/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const[signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    let errorCase;

    if(loading || loading1){
        return <Loading></Loading>
    }
    if (error || error1){
        errorCase = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1){
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className='text-center'>
            {errorCase}
            </div>
            <div className='text-center'>
                <button className='btn btn-info ms-3'
                onClick={() => signInWithGoogle()}>
                    Google SignIn
                </button>
                <button className='btn btn-info ms-3'
                onClick={()=> signInWithFacebook()}>
                    Facebook SignIn
                </button>
            </div>
            
        </div>
    );
};

export default SocialLogin;