import React,{useEffect,useState} from 'react';
import Table from '../../components/Table/Table'
import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";
import UserNavbar from "../../components/navbar/UserNavbar";



import  { COLUMN } from './Column';

export default function BusRoute() {

  const [DATA,setData] = useState([])

  
  useEffect( () => {
    try {
  async function userdatafetch () {
    await axios({
        method: 'Get',
        url: 'http://localhost:3500/api/schedule'
      }).then(resp=>{   
        const response=resp.data;
        setData(response)
      });
   }
   userdatafetch();
    } catch (e) {
        console.error(e);
    }
  }, []);

return (
    <div>
        <UserNavbar/>

      <h2 align="center">All Schedules</h2>
  <Container>
  <Row>
  <Col >
  {DATA!==""?
           <Table  COLUMN={COLUMN} DATA={DATA} />
           :<h1>Loading....</h1> 
      }
  </Col>
  </Row>
 
  </Container>
  
    </div>
)
}

