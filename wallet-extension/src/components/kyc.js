import React from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Kyc = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('KYC form submitted:', values);
    message.success('KYC submitted successfully!');
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
    message.error('Failed to submit KYC form!');
  };

  return (
    <div className='px-8 py-4'>
      <h2>KYC Verification</h2>
      <Form
        name="kycForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className='flex flex-col'
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: 'Please enter your full name' }]}
          className='mb-2'
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
          className='mb-2'
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
          className='mb-2'
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item
          label="Upload ID Document"
          name="idDocument"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          rules={[{ required: true, message: 'Please upload your ID document' }]}
          className='mb-4'
        >
          <Upload.Dragger name="files" beforeUpload={() => false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text text-sm">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint text-xs">
              Upload a government-issued ID (e.g., passport, driving license)
            </p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block onClick={()=>{
                navigate("/wallet")
          }}>
            Submit KYC
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Kyc;
