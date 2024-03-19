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
import React, { useState } from 'react';
import UserContext from "../context/userContext";
const Login = () => {
  const {updateUser} =useContext(UserContext);
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const [login,setLogin] = useState({
    email:"",
    pass : ""
  })
  
  
 const handlonsubmit= async(e)=>{
   e.preventDefault();
   const response=await fetch(`https://hackathon-psi-topaz.vercel.app/api/loginuser`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:login.email,
      password:login.pass
    })
  })

  const output=await response.json();
   console.log(output);

  if(output.login)
  {
    updateUser({login:true, firstName:output.firstname,lastName:output.name,aadharNo:output.adharno,wallet:output.walletaddress,password:login.pass,email:output.email});
     toast.success("Login Successfully")
    navigate("/")

  }
  else
  {
   toast.warning("Try again");
  }


  }

  const loginChange = (e)=>{
       setLogin((prev)=>{
         return{
           ...prev,
           [e.target.id] : e.target.value
         }
       })
  }
 
  return (
    <Section
      className="pt-[rem] -mt-[5.25rem]"
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
                {/* Login component */}
                 <>
         <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><polygon fill="#AC6AFF" points="38.831 15.118 38.823 9.905 29.203 3.617 29.203 7.639 35.548 11.817 35.553 15.019 32.605 17.015 30.594 15.548 30.594 13.063 27.317 10.821 27.317 15.344 22.122 18.532 22.113 26.952 18.44 29.02 16.554 27.543 16.554 25.105 18.786 23.576 18.786 23.556 18.786 19.783 14.769 22.471 11.698 20.473 8.893 22.31 13.277 25.311 13.277 27.154 10.117 29.291 6.894 27.109 6.894 19.848 11.679 16.608 11.684 13.492 17.82 17.445 22.978 14.011 19.834 12.177 17.776 13.564 13.294 10.6 18.349 7.654 22.727 10.22 22.727 6.393 18.354 3.828 8.411 9.625 8.404 14.84 3.617 18.082 3.617 28.874 8.404 32.116 8.411 37.332 18.032 43.617 18.032 39.598 11.686 35.42 11.681 32.218 14.629 30.222 16.64 31.689 16.64 34.174 19.917 36.416 19.917 31.892 25.186 28.705 25.245 20.285 28.795 18.217 30.68 19.694 30.68 22.131 28.448 23.661 28.448 23.68 28.448 27.454 32.465 24.765 35.536 26.764 38.341 24.927 33.958 21.923 33.958 20.083 37.117 17.946 40.34 20.128 40.34 27.389 35.556 30.629 35.551 33.744 29.414 29.79 24.256 33.201 27.401 35.033 29.459 33.672 33.941 36.636 28.886 39.583 24.507 37.016 24.507 40.842 28.881 43.406 38.823 37.612 38.831 32.396 43.617 29.154 43.617 18.361"/></svg>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight ">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              title=""
              className="font-semibold  transition-all duration-200 hover:underline"
            >
              Create a free account
            </a>
          </p>
          <form onSubmit={handlonsubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900 ">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    value={login.email}
                    onChange={loginChange}
                    id='email'
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                  <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                    {' '}
                    Forgot password?{' '}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    value={login.pass}
                    onChange={loginChange}
                    id='pass'
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-purple px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Login 
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </section>
        </>
               
               
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

export default Login;