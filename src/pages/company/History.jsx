import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";
import CompanyNavbar from "../../components/navbar/CompanyNavbar";

import HistoryCard from './HistoryCard'

export default function CPayHistory() {
const [DATA,setData] = useState([])
const email= localStorage.getItem('myemail');

console.log(DATA)
useEffect( () => {
  try {
  
async function userdatfetch () {
  await axios.get( `http://localhost:3500/api/payment/all`,  
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
          <CompanyNavbar/>
   <Container>
      <Row className="mt-3">
      <Col className="mt-2">
        <h2 align="center">Payment History</h2>
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
