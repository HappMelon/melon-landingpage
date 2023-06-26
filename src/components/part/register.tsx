import React, { useState } from 'react'
import axios from 'axios';
import { ChangeEvent } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }


  interface RegisterResponse {
    ok: boolean;
  }
  const handleRegisterClick = async () => {
    try {
      const response = await axios.post<RegisterResponse>('/api/register', {
        email,
        password,
      });
      console.log(response.data); 
      if (response.data.ok) {
        window.location.href = '/Trending';
      } else {
        console.error('Registration failed');
      }

    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  const handleWalletClick = () => {

  }

  return (
    <div className="w-[397px] h-[562px] top-[238px] left-[762px] ">
      <div className="w-[82px] absolute h-[82px] top-[238px] left-[919px] ">
        <img src="logo.svg" alt="Logo"/>
      </div>
      <h1 
      className="w-[275px] h-[20px] absolute top-[367px] left-[818px] font-avenir font-semibold text-[20px] leading-[20px] tracking-normal text-left text-black">
        Create Your Flare Account
        </h1>

      <div className="w-[397px] h-[65px] absolute top-[413px] left-[762px] rounded-[10px]">
        <label className="w-[101px] h-[19px] top-[413px] left-[762px] font-avenir font-semibold text-base leading-[19px] tracking-tight text-left">Email:</label>
        <input type="email"  
        className="w-[397px] h-[42px] top-[436px] left-[762px] rounded-lg bg-gray-100" 
        value={email}
        onChange={handleEmailChange}/>
      </div>

      <div className="w-[397px] h-[65px] absolute top-[502px] left-[762px] rounded-[10px]"> 
        <label 
            className="w-[70px] h-[19px] top-[502px] left-[762px] font-avenir font-[16px] font-semibold leading-[19px] tracking-normal text-left"
            >
                Password:
        </label>
        <input type="password"  
        className="w-[397px] h-[42px] top-[525px] left-[762px] rounded-[10px] bg-gray-100"
        value={password}
        onChange={handlePasswordChange}/>
      </div>
      <div>
        <button type="button" 
        className="w-[397px] h-[48px] absolute top-[600px] left-[762px] p-[8px]-[14px]-[8px]-[14px] rounded-[40px] gap-[10px] bg-gradient-to-r from-yellow-400 to-red-600 c-white
        animate-dissolve ease-out duration-300"
        onClick={handleRegisterClick}
        >Register</button>
      </div>
      <div>
        <p className="w-[177px] h-[19px] absolute top-[663px] left-[762px] font-avenir font-normal text-[14px] leading-[19px] tracking-tighter text-left text-gray-400">Already have an account?</p> 
        <a href="/login" className="w-[55px] h-[14px] absolute top-[665px] left-[940px] font-avenir font-normal text-[14px] leading-[14px] tracking-tight text-left c-orange">Sign In</a>
      </div>
      <div>
        <img src="line.svg" alt="Logo" 
        className="w-[82px] absolute top-[716px] left-[762px] border-[2px] border-solid bg-gray-300"/>
        <p className="w-[214px] h-[19px] absolute top-[706px] left-[846px] font-avenir font-normal text-[14px] leading-[19px] tracking-[-0.025em] text-left text-gray-400">Or Connect your crypto wallet</p>
        <img src="line.svg" alt="Logo" 
        className="w-[82px] absolute top-[716px] left-[1063px] border-[2px] border-solid bg-gray-300"/>
      </div>
      <div>
        <button className='w-[397px] h-[48px] absolute top-[752px] left-[762px] rounded-full border-[2px] border-solid border-gradient-x-yellow-red border-yellow-400 text-gradient-x-yellow-red text-yellow-400' 
        type="button"
        onClick={handleWalletClick}>Connect to Wallet</button>
      </div>
    </div>
  )
}

export {Register}
