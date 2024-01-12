import {Button, Card} from 'antd';
import Post from './Post';
import {useNavigate} from 'react-router-dom';


const Home = () =>{
    const navigate = useNavigate();

    return(
     <div>
        
        <Card style={{ width: 600, margin: 'auto'}}>
            <Post/>
            <br/>
            <Button type="primary" htmlType="submit" style={{ width: '45%', marginRight: '50px' }} onClick={()=>navigate("/GetById")}>
  GetDataById
</Button>
<Button type="primary" htmlType="submit" style={{ width: '45%' }} onClick={()=>navigate("/Get")}>
  GetData
</Button>
    </Card>
    </div>
    );
}
export default Home;