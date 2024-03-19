import { curve, heroBackground } from "../assets";
import Button from "./Button";
import React, { useContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import ABI from "../ABI.json"
import {toast} from 'react-toastify'
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

const SendMoney = () => {
  const parallaxRef = useRef(null);
 const {user} =useContext(UserContext);
 const conversionRate=299137.45;
    const [Options , setOptions] = useState([]);
const web3=new Web3(window.ethereum);
const contactAdd="0x6Bf83e97d528548cfc2cF1112E2da5a41d6Ea087";
const [receiver,setRecevier]=useState("0xc2Dc8760d8eA1027F066829123Ecdb7698861545");
const [amount,setAmount]=useState(0);
const [message,setMessage]=useState(null);
const [keyword,setKeyword]=useState(null);
const [contract,setContract]=useState(null);
const [wallets,setWallets]=useState([]);


 
      const sendEther=async(e)=>{
       
        if(window.ethereum)
{
     e.preventDefault();
     
    setContract( new web3.eth.Contract(ABI,contactAdd));
      const ca=await window.ethereum.request({method:"eth_requestAccounts"});
   console.log((amount/conversionRate)*10**18);
    // get sender from db
     const sender=user.wallet;
   let params=[{
    from:sender,
    to:receiver,
    gas:Number(21000).toString(16),
    gasPrice:Number(2500000).toString(16),
    value:Web3.utils.toWei(amount.toString(), 'wei')
   }]
   if(amount>0)
     toast.success("Send Succesfully");
    else 
    {
      toast.warning("amount should be greater than 0");
      return;
    }
  
   console.log((Number(amount)/conversionRate)*(10**18))
  //  let res=await window.ethereum.request({method:"eth_sendTransaction",params}).catch((err)=>console.log(err));
  console.log(receiver+sender+5+message+keyword)
const res1= await contract.methods.addToBlockchain(receiver.toString(16),sender.toString(16),amount.toString(),message,keyword).send({from:sender});
  
console.log(res1);
  }
  
}

  const getWallets=async()=>{
     
   const response=await fetch(`http://localhost:5000/api/getWallet`,{
    method:'GET',
    headers:{
      "Content-Type":"application/json"
    },
  
  })

  const output=await response.json();
  
   setWallets(output);
  }

useEffect(()=>{
  getWallets();
},[]);


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
                {/* send money component */}
               {user.login? (<form className="max-w-sm mx-auto mt-8 gap-4">
    
    <form className="max-w-sm mx-auto gap-4">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 text-white">Select the sender</label>
      <select onChange={(e)=>setRecevier(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {
       wallets
  .filter(wallet => wallet.firstname.toLowerCase()!== user.firstName.toLowerCase())
  .map(wallet => (
    <option key={wallet.walletaddress}  value={wallet.walletaddress}>
      {wallet.firstname} {wallet.lastname}
    </option>
  ))
      }
        
       
      </select>
    </form>
    
        <div className="mb-5 text-black">
        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 text-white">Amount</label>
        <input onChange={(e)=>setAmount(e.target.value)} type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter amount" required />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 text-white">Your Message</label>
        <input onChange={(e)=>setMessage(e.target.value)} type="text" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Message" required />
      </div>
      <div className="mb-5">
        <label htmlFor="keyword" className="block mb-2 text-sm font-medium text-white ">Your keyword</label>
        <input onChange={(e)=>setKeyword(e.target.value)} type="text" id="keyword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Keyword' required />
      </div>
      
      <Button className="hidden lg:flex"  onClick={sendEther}>
          Send Money
        </Button>
    </form>):(<h2 className="flex justify-center items-center mt-[200px]">Login first</h2>)}
    
               
               
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

export default SendMoney;
