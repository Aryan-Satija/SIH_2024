import React, { useState } from 'react';
import { Input, Button, message } from 'antd';

const CreatePassword = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password === '' || confirmPassword === '') {
      message.error('Please fill in both fields.');
      return;
    }

    if (password !== confirmPassword) {
      message.error('Passwords do not match.');
      return;
    }

    message.success('Password created successfully!');
    onPasswordSubmit(password);
  };

  return (
    <div className="flex flex-col  gap-4">
      <h2>Create Password</h2>
      <div className="input-field">
        <Input.Password
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
      </div>
      <div className="input-field">
        <Input.Password
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
      </div>
      <Button type="primary" onClick={handleSubmit}>
        Submit Password
      </Button>
    </div>
  );
};

export default CreatePassword;
