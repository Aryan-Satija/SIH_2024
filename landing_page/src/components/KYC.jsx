import React from 'react'
import Kyc from "../assets/kyc.jpg"
const KYC = () => {
  return (
    <div>
      <section className="mt-14">
      <div className="width-10/12 max-w-[1380px] flex flex-row justify-between items-center mx-auto space-x-11">
        <img src={Kyc} className="w-2/4 h-2/4" alt=""/>
        <div>
        <h1 className="font-mullish font-bold text-[30px] leading-[1.7] text-black">Secure KYC Verification with Government Documents</h1>
        <p className="font-mullish text-[20px] leading-[1.2] text-black opacity-70"> A robust KYC solution enabling seamless identity verification using government-issued documents, ensuring regulatory compliance and enhanced security for user data.</p>
        </div>
      </div>
      </section>
      
    </div>
  )
}

export default KYC
