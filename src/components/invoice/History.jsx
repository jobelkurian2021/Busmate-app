import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";
import UserNavbar from "../../components/navbar/UserNavbar";

import HistoryCard from './HistoryCard'

export default function PHistory() {
const [DATA,setData] = useState([])

console.log(DATA)
useEffect( () => {
  try {
async function userdatfetch () {
  await axios.get( `http://localhost:3500/api/payment/history`,  
     { params: {
        email:localStorage.getItem('myemail')
      }
     }
    ).then(resp=>{   
      const response=resp.data;
      setData(response)
    });
 }
 userdatfetch();
  } catch (e) {
      console.error(e);
  }
}, []);

    return (
        <div>
          <UserNavbar/>
   <Container>
      <Row className="mt-3">
      <Col className="mt-2">
        <h1 align="center">Payment History</h1>
          <div align="center">
            {DATA.length!==0 ?
                DATA.map(i=>{return(<HistoryCard data={i} key={i._id}/>)})
               :<h3>No Payment history Found</h3> 
          }
        </div>
      </Col>
      </Row>  
      </Container>
        </div>
    )
}
