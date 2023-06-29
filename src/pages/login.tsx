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
            <div className='w-24.8125rem'>
                <form className='flex-c-c' onSubmit={onSubmit}>
                    <div className='w-5.125rem h-5.125rem'>
                        <img src="/images/brands/Logo.png" alt="logo"/>
                    </div>
                    <div className='pt-2.94rem pb-1.62rem'>
                        <label className='form-title'>
                            Sign In To Your Flare Account
                        </label>
                    </div>
                    <div className='pb-1.5rem'>
                        <label className='form-label'>Email address</label>
                        <input
                            className="form-input"
                            type="text"
                            name="email"
                            value={ user.email }
                            onChange={ changeHandle }
                        />
                    </div>
                    <div className='pb-2.06rem'>
                        <label className='form-label'>Password</label>
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            value={ user.password }
                            onChange={ changeHandle }
                        />
                    </div>
                    <div className='pb-0.94rem'>
                        <button className='form-signin-button flex-c-c'  type='submit'>
                            Sign In
                        </button>
                    </div>
                    <div className='w-24.8125rem pb-1.5rem'>
                        <p className='form-para display-inline w-7.5rem pr-0.69rem'>
                            Not A Member Yet?
                        </p>
                        <a className='form-register-link' onClick={registerJump}>Register</a>
                    </div>
                    <div className='flex-r-c pb-1.69rem'>
                        <div>
                            <svg width="6rem" height="0.125rem" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="8.74228e-08" y1="1" x2="96" y2="1.00001" stroke="#D9D9D9" stroke-width="0.125rem"/>
                            </svg>
                        </div>
                        <p className='form-para pl-0.81rem pr-0.69rem'>
                            Or Connect your crypto wallet
                        </p>
                        <div>
                            <svg width="6rem" height="0.125rem" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="8.74228e-08" y1="1" x2="96" y2="1.00001" stroke="#D9D9D9" stroke-width="0.125rem"/>
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