import React, { useState, useEffect } from 'react';
import { Table,Input, Button} from 'antd';
//import axios from 'axios';

const GetById = () => {
    const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // Assuming your API endpoint is something like '/api/designs/'
      const response = await fetch(`http://localhost:8000/enquiry/?user=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any authentication token or credentials if required
        },
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        // Handle error
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]); // Fetch data whenever userId changes

  
    const handleFileDownload = (file) => {
      // Simulate a file download
      const link = document.createElement('a');
      link.href = file.url; // Replace with actual file URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const columns = [
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
        <div>
        <Input
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button type="primary" onClick={fetchData}>
          Fetch Data
        </Button>
        <Table dataSource={data} columns={columns} />
      </div>
    );
  };
  
  export default GetById;