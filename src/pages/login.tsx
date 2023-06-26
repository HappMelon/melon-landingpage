import '@/styles/login.css'
import React, { Component } from 'react';

export default class LoginPage extends React.Component {

    constructor(props:any) {
        super(props);
        this.state = {
            email:"",
            password:"",
        }
    }

    onSubmit = (data:any) => {
        data.preventDefault();
        console.log(this.state)
    }

    changeHandle = (data:any) => {
        this.setState({
            [data.target.name]:data.target.value
        })
    }
    
    render() {
        const { email, password } = this.state
        return (
            <div className="loginBox">
                <img src="/Logo 1.png" alt="logo"/>
                <label className='formTitle'>
                    Sign In To Your Flare Account
                </label>
                <div style={{display:'block'}}>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label className='formLabel'>Email address</label>
                            <input
                                className="formInput"
                                type="text"
                                name="email"
                                value={ email }
                                onChange={ this.changeHandle }
                            />
                        </div>
                        <div>
                            <label className='formLabel'>Password</label>
                            <input
                                className="formInput"
                                type="text"
                                name="password"
                                value={ password }
                                onChange={ this.changeHandle }
                            />
                        </div>
                        <div>
                            <button className='formSignInButton'>
                                Sign In
                            </button>
                        </div>
                        <div>
                            <p style={{
                                display: 'flex',
                                width: '120px',
                                flexDirection: 'column',
                                flexShrink: 0,
                                color: '#9B9B9B',
                                fontSize: '14px',
                                fontFamily: 'Avenir LT Std',
                                lineHeight: '135%',
                                letterSpacing: '-0.35px',
                                }}
                            >
                                Not A Member Yet? 
                                <a href="#" style={{
                                                        fontSize: '14px',
                                                        fontFamily: 'Avenir LT Std',
                                                        lineHeight: '100%',
                                                        letterSpacing: '0.28px',
                                                        textDecorationLine: 'underline',
                                                        backgroundImage: 'linear-gradient(159deg, #F9D423 0%, #F83600 100%)',
                                                        color: 'transparent',
                                                        WebkitBackgroundClip: 'text',
                                                    }}
                                                    >Register</a>
                            </p>
                        </div>
                        <div>
                            <svg width="96" height="2" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="8.74228e-08" y1="1" x2="96" y2="1.00001" stroke="#D9D9D9" stroke-width="2"/>
                            </svg>
                            <p style={{
                                color: '#9B9B9B',
                                fontSize: '14px',
                                fontFamily: 'Avenir LT Std',
                                lineHeight: '135%',
                                letterSpacing: '-0.35px',
                            }
                            }>
                                Or Connect your crypto wallet
                            </p>
                            <svg width="96" height="2" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="8.74228e-08" y1="1" x2="96" y2="1.00001" stroke="#D9D9D9" stroke-width="2"/>
                            </svg>
                        </div>
                        <div>
                            <button className='border-box border-bg'>
                                <span className='formWalletButtonLabel'>
                                    Connect Wallet
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}