import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
const CreatePassword = ({ seedPhrase }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (password === '' || confirmPassword === '') {
      message.error('Please fill in both fields.');
      return;
    }

    if (password !== confirmPassword) {
      message.error('Passwords do not match.');
      return;
    }

    const encryptedSeedPhrase = CryptoJS.AES.encrypt(seedPhrase, password).toString();
    localStorage.setItem('encryptedWallet', encryptedSeedPhrase);

    navigate('/wallet');
  };

  return (
    <div className="flex flex-col  gap-4">
      <h2>Create Password</h2>
      <div className="input-field">
        <Input.Password
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '12px' }}
        />
      </div>
      <div className="input-field">
        <Input.Password
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ marginBottom: '12px' }}
        />
      </div>
      <Button type="primary" onClick={handleSubmit}>
        Submit Password
      </Button>
    </div>
  );
};

export default CreatePassword;
