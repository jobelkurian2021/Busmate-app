import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import axios from "axios";
import UserNavbar from "../../components/navbar/UserNavbar";
import { useHistory } from "react-router-dom";

import HistoryCard from './HistoryCard'

export default function SearchCard() {
const [DATA,setData] = useState([])
const source= localStorage.getItem('source');
const destination= localStorage.getItem('destination');
const date= localStorage.getItem('date');
const no= localStorage.getItem('no');


console.log(DATA)
useEffect( () => {
  try {
async function userdatfetch () {
  await axios({
    method: 'Post',
    url: 'http://localhost:3500/api/Search',
  // axios.post(`http://localhost:3500/api/Search`,
  data: {
    source: source,
    destination:destination
    }

  // await axios.post( `http://localhost:3500/api/Search`, 
  
    //  { params: {
    //   source:localStorage.getItem('source'),
    //     destination:localStorage.getItem('destination'),
    //     date:localStorage.getItem('date')
    //   }
    //  }
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
      {/* <Form.Control type="text"
                  value={source}
      />
      <Form.Control type="text"
                  value={destination}
      /> */}
      <Col className="mt-2">
        <h1 align="center">Select Bus</h1>
        <Button href="/Search">Edit Search</Button>
      <h5>Source :{source} &nbsp;	Destination: {destination} &nbsp; Travel Date: {date} &nbsp; No of Passengers: {no} &nbsp;</h5>
        {/* <h4><a href="/Search">Edit Search</a></h4> */}
          <div align="center">
            {DATA.length!==0 ?
                DATA.map(i=>{return(<HistoryCard data={i} key={i._id}/>)})
               :<h3>Sorry No Bus Found Search Another Route <br/><br/><a href="/Search">Click Here to Search Again</a></h3> 
               
          }
        </div>
      </Col>
      </Row>  
      </Container>
        </div>
    )
}
