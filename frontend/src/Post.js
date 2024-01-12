import { Upload, Form, Input, Button, Card, Row, Col} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

//const { Option } = Select;

const Post = () => {
  const onFinish = async (values) => {

    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('mobile', values.mobile);
      formData.append('email', values.email);
      formData.append('address', values.address);
      formData.append('requirement', values.requirement);
      formData.append('user',values.user);

      

      // Handle file uploads
      values.floor_pain?.fileList.forEach((file) => {
        formData.append('floor_pain', file.originFileObj);
      });

      // Make a POST request with the form data to your backend API endpoint
      const response = await fetch('http://localhost:8000/enquiry/', {
        method: 'POST',
        body: formData,
      });

      // Handle the response
      if (response.ok) {
        console.log('Enquiry Send',response.data);
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card title="Enquiry Details" style={{ width: 400, margin: 'auto'}}>
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={[2, 2]}>
          <Col span={24}>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="mobile" label="Mobile">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="address" label="Address">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="requirement" label="Requirement">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="user" label="User">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="floor_pain" label="Floor Pain">
              <Upload.Dragger name="file" multiple={true}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Upload.Dragger>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Post;
