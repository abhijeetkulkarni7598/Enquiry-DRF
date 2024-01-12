import './App.css';
import Post from './Post';
import GetById from './GetById';
import Get from './Get';
//import DesignPost from './DesignPost';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
        <>
          
         <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/GetById" element={<GetById/>} />
                <Route path="/Get" element={<Get/>} />
          </Routes>
     
    </>
    
  );
}

export default App;
