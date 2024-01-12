import React, { useState, useEffect } from 'react';
import { Table, Button} from 'antd';
import axios from 'axios';

const Get = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/enquiry/',{
              headers: {
                  'Authorization': 'Basic ' + btoa('abhi:123')
              },
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleFileDownload = (file) => {
      // Simulate a file download
      const link = document.createElement('a');
      link.href = file.url; // Replace with actual file URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const columns = [
      // Define columns based on your data structure
      {   title: 'Id',
          dataIndex: 'id',
          key: 'id',
  
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
      },
      {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
      },
      {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
      },
      {
          title: 'Requirement',
          dataIndex: 'requirement',
          key: 'requirement',
      },
      {
          title: 'User',
          dataIndex: 'user',
          key: 'user',
      },
      {
          title: 'Floor_plain',
          dataIndex: 'floor_pain',
          key: 'floor_pain',
          render: (floor_pain) => (
            <div>
              {
                  <Button onClick={() => handleFileDownload(floor_pain)}>Download</Button>
            
              }
            </div>
          ),
        },
    ];
  
    return (
      <Table dataSource={data} columns={columns} />
    );
  };
  
  export default Get;