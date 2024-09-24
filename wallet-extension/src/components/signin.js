import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Button, Input, message } from 'antd';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
const Signin = ({setWallet, setSeedPhrase}) => {
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const unlockWallet = () => {
        const encryptedWallet = localStorage.getItem('encryptedWallet');
        if (!encryptedWallet) {
            message.error('No wallet found!');
            return;
        }
  
        try {
            const decryptedSeedPhrase = CryptoJS.AES.decrypt(encryptedWallet, password).toString(CryptoJS.enc.Utf8);
            const wallet = ethers.Wallet.fromPhrase(decryptedSeedPhrase);
            setWallet(wallet.address);
            setSeedPhrase(decryptedSeedPhrase);
            message.success('Wallet unlocked successfully!');
            navigate('/wallet');
        } catch (error) {
            message.error('Incorrect password or failed to decrypt!');
        }
    };

    return (
    <div>
      <h2 className='mb-4'>Manage Wallet</h2>
      <Input.Password
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <div className='flex flex-col gap-4'>
        <Button onClick={unlockWallet} type="primary"  disabled={!password}>
            Unlock Wallet
        </Button>
        <Button onClick={()=>{
            navigate('/wallet');
        }} type="default">
            Create Wallet
        </Button>
        <Button onClick={()=>{
            navigate('/recover');
        }} type="default">
            Recover Wallet
        </Button>
      </div>
    </div>
  )
}

export default Signin