import React from 'react'
import login from "../assets/login.jpg"
import Hero from "../assets/hero-shape.jpg"
const Section = () => {
  return (
    <div>
      <section className="relative bg-deepBlue">
        <div className="width-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto space-x-11">
            <div className="mr-11 mt-20">
                <h1 className="font-mullish font-bold text-[50px] leading-[2] text-white">Apophis Wallet</h1>
                <div className=" text-white text-[30px] leading-[2] ">Your key to the world of crypto</div>
                <p className="text-white font-mullish text-[20px] leading opacity-70 leading-[2]" ><ul className="list-disc">
                    <li>Store and manage all of your crypto, NFTs, and multiple <br></br>wallets in one place</li>
                    <li>Support for Bitcoin, Ethereum, Solana, Dogecoin, and all<br></br> Ethereum-compatible networks</li>
                    <li>Explore thousands of tokens and dapps on your phone or<br></br> browser</li>
                    <li>Protect your digital assets with industry-leading security</li></ul>
                </p>
                <button className="py-5 px-7 font-mullish bg-blue-600/100 text-white border-lightBlue border rounded-full text-[20px] font-bold mt-5 mml-10">
                    Download Apophis Wallet
                </button>
            </div>
            <img src={login} className="w-max-[680px] max-h-[680px] mt-20 border rounded-2xl" alt=""/> 

        </div>
        <div>
        <img src={Hero} alt=""/>        
        </div>
    </section>
    </div>
  )
}

export default Section
