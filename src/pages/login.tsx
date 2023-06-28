import '@/styles/login.css'
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const changeHandle = (event:ChangeEvent<HTMLInputElement>) => {
        setUser(state => ({
            ...state,
            [event.target.name]: event.target.value,
        }))
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        navigate('/explore');
    }

    const registerJump = (event:MouseEvent<HTMLAnchorElement>) => {
        navigate('/register');
    }
    
    return (
        <div className="login-box flex-c-c">
            <div className='w-397px'>
                <form className='flex-c-c' onSubmit={onSubmit}>
                    <div className='login-form-title pb-47px'>
                        <img src="/images/brands/Logo.png" alt="logo" width='82px' height='82px'/>
                    </div>
                    <div className='pb-26px'>
                        <label className='form-title'>
                            Sign In To Your Flare Account
                        </label>
                    </div>
                    <div className='pb-24px'>
                        <label className='form-label'>Email address</label>
                        <input
                            className="form-input"
                            type="text"
                            name="email"
                            value={ user.email }
                            onChange={ changeHandle }
                        />
                    </div>
                    <div className='pb-33px'>
                        <label className='form-label'>Password</label>
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            value={ user.password }
                            onChange={ changeHandle }
                        />
                    </div>
                    <div className='pb-15px'>
                        <button className='form-signin-button flex-c-c'  type='submit'>
                            Sign In
                        </button>
                    </div>
                    <div className='w-397px pb-24px'>
                        <p className='form-para display-inline w-120px pr-11px'>
                            Not A Member Yet?
                        </p>
                        <a className='form-register-link' onClick={registerJump}>Register</a>
                    </div>
                    <div className='flex-r-c pb-27px'>
                        <div>
                            <svg width="96" height="2" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="8.74228e-08" y1="1" x2="96" y2="1.00001" stroke="#D9D9D9" stroke-width="2"/>
                            </svg>
                        </div>
                        <p className='form-para pl-13px pr-11px'>
                            Or Connect your crypto wallet
                        </p>
                        <div>
                            <svg width="96" height="2" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="8.74228e-08" y1="1" x2="96" y2="1.00001" stroke="#D9D9D9" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <button 
                            className='formWalletButton'
                            content="Connect Wallet"
                            type='button'
                        >
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}