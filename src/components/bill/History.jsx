import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import axios from "axios";
import UserNavbar from "../../components/navbar/UserNavbar";

import HistoryCard from './HistoryCard'

export default function History() {
const [DATA,setData] = useState([])
const email= localStorage.getItem('myemail');

console.log(DATA)
useEffect( () => {
  try {
    async function userdatfetch () {
      await axios({
        method: 'Post',
        url: 'http://localhost:3500/api/bill/history',
      data: {
        email: email

        }
}).then(resp=>{
  // ).then(resp=>{   
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
        <h2 align="center">Bill History</h2>
          <div align="center">
            {DATA.length!==0 ?
                DATA.map(i=>{return(<HistoryCard data={i} key={i.billid}/>)})
               :<h3>NO Bill history Found</h3> 
          }
        </div>
      </Col>
      </Row>  
      </Container>
        </div>
    )
}
