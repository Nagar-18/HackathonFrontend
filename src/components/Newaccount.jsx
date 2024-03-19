import { curve, heroBackground } from "../assets";
import Button from "./Button";
import React, { useState } from 'react';
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

const Newaccount = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const Clickhandler = ()=>{
    navigate("/sendethereum");
    return ;
  }
  const [fullDetails,setFullDetails] = useState({
    lname : "",
    fname:"",
    adhname : 0,
    wadd : "",
    email : "",
    pass : "",
    cpass:"",

  })
  const submit = (e)=>{
        e.preventDefault()
        alert("Form Submitted")
        console.log(fullDetails.fname);

  }
  const inputChange = (e)=>{
    
       //console.log(e.target.value)
       //console.log(e.target.id)
       
       setFullDetails((prev)=>{
          return{
            ...prev,
            [e.target.id] : e.target.value,
          }
       })

  }
const handleOnSubmit = async (e) => {
  console.log(fullDetails)
  e.preventDefault();
  if (fullDetails.pass !== fullDetails.cpass) {
    alert("Enter correct password");
    return;
  }
  
  try {
    const response = await fetch('https://hackathon-psi-topaz.vercel.app/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: fullDetails.fname,
        lastname: fullDetails.lname,
        adharno: fullDetails.adhname,
        walletaddress: fullDetails.wadd,
        email: fullDetails.email,
        password: fullDetails.pass
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const output = await response.json();
    console.log(output);
    
    if (output.success) {
      {
       
         navigate("/signup");
         toast.success("Register succesfully")
         
      }
    } else {
       toast.warning("Enter valid password");
    }
  } catch (error) {
    console.error('Fetch error:', error);
      toast.warning("Enter valid details");
  }
}




  return (
    <Section
      className="pt-[1rem] -mt-[5.25rem] "
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
            <div className="relative bg-n-8 rounded-[1rem] ">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] h-[650px] md:aspect-[688/490] lg:aspect-[1024/490] ">
                {/* NEWACCOUNT */}
                <div className=" mt-8 ">
                   <form onSubmit={submit} >
      <div className=' text-black flex flex-col justify-center items-center gap-2 w-full max-h-full'>
        
      <div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   First Name
  </label>
  <input
    className="flex h-10 w-[50%] rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.fname}
    onChange={inputChange}
    placeholder="Enter your firstname"
    id="fname"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Last Name
  </label>
  <input
    className="flex h-10 w-[50%] rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.lname}
    onChange={inputChange}
    placeholder="Enter your lastname"
    id="lname"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Adhaar Card
  </label>
  <input
    className="flex h-10 w-[50%] rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.adhname}
    onChange={inputChange}
    placeholder="Enter your aadhaar"
    id="adhname"
  />
</div>


<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Wallet Address
  </label>
  <input
    className="flex h-10 w-[50%] rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    value={fullDetails.wadd}
    onChange={inputChange}
    placeholder="Enter your Wallet address"
    id="wadd"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Email
  </label>
  <input
    className="flex h-10 w-[50%] rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="email"
    value={fullDetails.email}
    onChange={inputChange}
    placeholder="Enter your email"
    id="email"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Password
  </label>
  <input
    className="flex h-10 w-[50%] rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="password"
    value={fullDetails.pass}
    onChange={inputChange}
    placeholder="Enter your password"
    id="pass"
  />
</div>

<div className="w-full md:w-1/3">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
   Confirm Password
  </label>
  <input
    className="flex h-10 w-[50%] rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="password"
    value={fullDetails.cpass}
    onChange={inputChange}
    placeholder="Enter your confirm password"
    id="cpass"
  />
</div>

<Button className="mr-[230px] mt-4" onClick={handleOnSubmit}>
            Submit
          </Button>
</div>
</form>

        </div>

               
               
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

export default Newaccount;
