import React from 'react'
import {Button,Card} from "react-bootstrap";
import {useHistory } from "react-router-dom";

export default function HistoryCard({data}) {
//  let Date =data.date;
//    let options = {
//   year: 'numeric', month: 'numeric', day: 'numeric',
//   hour: 'numeric', minute: 'numeric', second: 'numeric',
//   hour12: false,
//   timeZone: 'Asia/Kolkata'
// };
const history = useHistory(); 

const email =localStorage.getItem('myemail');

// const generate =async()=>{
// useEffect(() => {
//   try {
//     async function userdatfetch1() {
//       await  axios
//       .post(`http://localhost:3500/api/bill/total`,{email})
//       .then((resp) => {
//         const response = resp.data;
//         setvalues(response);  
//       });
//     }
//     userdatfetch1();
//   } catch (e) {
//     console.error(e);
//   }
// }, [email]);
// }
const handlepage=(Rows)=>{
     localStorage.setItem('source', data.startLocation);
      localStorage.setItem('destination', data.endLocation);
      localStorage.setItem('fare',data.fare);

  history.push({pathname:"/payment",busname:"{data.name}",source:"{data.startLocation}",destination:"{data.endLocation}",fare:"{data.fare}",reqid:"novalue"})

 }  
    return (
        <Card
      style={{ width: "70rem" }}
      text="dark"
      className="text-center p-4 m-4"
      bg="warning"
    >
      <Card.Body className="p-2">
        {/* <Card.Title className="p-1">Bus Details</Card.Title> */}
        <Card.Text className="text-center">
        <span> Bus Name:: {data.name} ||</span>
        <span> Bus type:: {data.type} ||</span><br/>
         <span> Source:: {data.startLocation} ||</span>
          <span> Destination:: {data.endLocation} ||</span>
          <span> Seats Available:: {data.numberOfSeats} ||</span><br/>
          <span> Boarding Points:: {data.boardingPoints} ||</span>
          <span> Dropping Points:: {data.droppingPoints} ||</span>
          {/* <span> Additional Features:: {data.features} ||</span> */}
          <br/>
          {/* <span> Travel DATE:: {data.journeyDate} ||</span> */}
          <span> Departure time	:: {data.departure_time} ||</span>
          <span> Trip fare:: {data.fare} ||</span>

        </Card.Text>
        <Button onClick={()=>handlepage()}>Book Ticket Now</Button>

        {/* <Button variant="danger" 
        onClick={()=>generate()}
        >Book Ticket</Button> */}
      </Card.Body>
    </Card>
    )
}
