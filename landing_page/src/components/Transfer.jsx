import React from 'react'
import transfer from "../assets/transfer.jpg"
const Transfer = () => {
  return (
    <div>
      <section>
      <div className="width-10/12 max-w-[1380px] flex flex-row justify-between items-center mx-auto space-x-11">
        <div>
        <h1 className="font-mullish font-bold text-[30px] leading-[1.7] text-black">Comprehensive Wallet Management</h1>
        <p className="font-mullish text-[20px] leading-[1.2] text-black opacity-70">
        Access and manage your digital assets effortlessly. Choose between Tokens, NFTs, or Transfer to perform secure and seamless transactions.
        <br/><br/>
        <ul className="type-disc leading-[1.2]">
            <li><span className="font-bold">Tokens</span>: View, send, and receive your token holdings with ease.</li>
            <li><span className="font-bold">NFTs</span>: Manage and transfer your unique digital collectibles.</li>
            <li><span className="font-bold">Transfer</span>: Send assets securely to any wallet address</li>
        </ul>
        </p>
        </div>
        <img src={transfer} className="w-2/4 h-2/4" alt=""/>
      </div>
      </section>
      
    </div>
  )
}

export default Transfer
