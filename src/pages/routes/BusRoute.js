import React,{useEffect,useState} from 'react';
import Table from '../../components/Table/Table'
import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";
import AdminNavbar from "../../components/navbar/Adminnavbar";



import  { COLUMN } from './Column';

export default function BusRoute() {

  const [DATA,setData] = useState([])

  
  useEffect( () => {
    try {
  async function userdatafetch () {
    await axios({
        method: 'Get',
        url: 'http://localhost:3500/api/routes'
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
            		<AdminNavbar />

      <h2 align="center">All Routes</h2>
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

