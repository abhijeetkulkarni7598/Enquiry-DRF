import React, { useState } from 'react';
import { Upload, Form, Input, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Dragger } = Upload;

const DesignPost = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = async (values) => {
    const formData = new FormData();

    // Append text fields
    formData.append('title', values.title);
    formData.append('approval', values.approval);

    // Append files with titles and approvals
    fileList.forEach((file, index) => {
      formData.append(`images[${index}][title]`, file.title);
      formData.append(`images[${index}][approval]`, file.approval);
      formData.append(`images[${index}][file]`, file.originFileObj);
    });

    try {
      const responce = await axios.post('http://localhost:8000/design/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (responce.ok) {
        console.log('Enquiry Send',responce.data);
      }

      message.success('Images uploaded successfully');
    }
     catch (error) {
      console.error('Error uploading images:', error);
      message.error('Failed to upload images');
    }
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList.map((file) => ({ ...file, title: '', approval: '' })));
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Title">
        <Input />
      </Form.Item>
      <Form.Item name="approval" label="Approval">
        <Input />
      </Form.Item>
      <Form.Item name="image" label="Images">
        <Dragger
          name="file"
          multiple
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={() => false}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag files to upload</p>
        </Dragger>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DesignPost;
