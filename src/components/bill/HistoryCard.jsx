import React from 'react'
import {Card} from "react-bootstrap";

export default function HistoryCard({data}) {
//  let Date =data.date;
//    let options = {
//   year: 'numeric', month: 'numeric', day: 'numeric',
//   hour: 'numeric', minute: 'numeric', second: 'numeric',
//   hour12: false,
//   timeZone: 'Asia/Kolkata'
// };

    return (
        <Card
      style={{ width: "70rem" }}
      text="dark"
      className="text-center p-4 m-4"
      bg="warning"
    >
      <Card.Body className="p-2">
        <Card.Title className="p-1">Ticket Details</Card.Title>
        <Card.Text className="text-center">
        <span> Name:: {data.name} ||</span>
        <span> Email:: {data.email} ||</span><br/>
         <span> Source:: {data.source} ||</span>
          <span> Destination:: {data.destination} ||</span>
          <span> No of Passengers:: {data.noofpassengers} ||</span><br/>
          <span> Total amount:: {data.totalprice} ||</span><br/>
          <span> Travel DATE:: {data.date} ||</span>
          
        </Card.Text>
      </Card.Body>
    </Card>
    )
}
