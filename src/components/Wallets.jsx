import { curve, heroBackground } from "../assets";
import Button from "./Button";
import {toast} from 'react-toastify'
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useContext, useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import {ethers} from "ethers"
import UserContext from "../context/userContext";
const conversionRate=299137.45;


const FetchBalance = () => {
  const {user} =useContext(UserContext);
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const Clickhandler = ()=>{
    navigate("/sendethereum");
    return ;
  }
  const [balance,setBalance]=useState(null);
  const [password,setPassword]=useState(null);

   const getBalance=async()=>{
    
      // get add from data

  const acountAdd=user.wallet.toString(16);
  console.log(acountAdd);
 await window.ethereum.request({method:"eth_getBalance",params:[String(acountAdd),"latest"]}).then(balance=>{
  setBalance(ethers.formatEther(balance)*conversionRate);
 
 })

}
useEffect(()=>{
  
  
},[balance])

const handleOnClick=(e)=>{
e.preventDefault();
console.log(user);
  if(user.password===password){
    
    getBalance();
  }
  else{
    toast.warning("Enter valid password");
    return;
  }
 
   
}


  return (
    <Section
      className="pt-[rem] -mt-[5rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
         
          
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                {/* wallet */}
           {
            user.login?(   <div className='flex justify-center items-center h-[100%] w-[100%]'>
           <div className='flex  items-center gap-3 p-5 h-[400px] w-[400px]'>
        

          {balance?(<div className=" max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
       <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{balance}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">In Rupees</p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        See RBI guideline
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>):(<>
<form className="max-w-sm mx-auto"> 
  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
  <input type="password" onChange={(e)=>setPassword(e.target.value)} id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Secured Wallet PIN"/>

  <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400 ">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
  <Button className="hidden lg:flex mt-6" onClick={handleOnClick} >
         Get Balence
        </Button> 
</form>
</>)

      
   
  } </div>
  </div>):<h2 className="flex justify-center items-center mt-[200px]">Login first</h2>
           }

               
               
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default FetchBalance ;
