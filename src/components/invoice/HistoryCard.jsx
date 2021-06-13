import React,{useState} from 'react'
import {Card} from "react-bootstrap";
import { Button,Spinner} from "react-bootstrap";
import easyinvoice from 'easyinvoice';
import { v4 as uuidv4 } from 'uuid';
import { FaFilePdf } from "react-icons/fa";
import {toast} from 'react-toastify';
toast.configure()

export default function HistoryCard({data}) {
 let date =data.date;

//    let options = {
//   year: 'numeric', month: 'numeric', day: 'numeric',
//   hour: 'numeric', minute: 'numeric', second: 'numeric',
//   hour12: false,
//   timeZone: 'Asia/Kolkata'
// };
const email = data.email;
const source = data.source;
const destination =data.destination;
const payementid = data.payementid;
const payorderid = data.payorderid;
// const noofpassengers= data.noofpassengers;


const [DATA] = useState([data]);
// const [finavalues, setvalues] = useState(0)
const [spinner, setspinner] = useState(true)
const generate =async()=>{
  setspinner(false);
  const product =  DATA.map(data=>{
    return (
        {  
        
            "quantity": data.noofpassengers,
            "description": "Ticket Charges",
            "destination":data.destination,
            "date":data.date,
            "time":data.time,
            "tax": 0,
            "price": data.totalprice
        }
    
    )
 });
 console.log(product)
const name=uuidv4()
var data = {

 "currency": "INR",
 "taxNotation": "vat", //or gst
 "marginTop": 25,
 "marginRight": 25,
 "marginLeft": 25,
 "marginBottom": 25,

 "sender": {
     "company": "Busmate",
     "address": "Chengalam,kottayam",
     "zip": "686022",
     "city": "Kerala",
     "country": "India"
 },
 "client": {
   
   "company": email,
   "address": source,
   "zip": destination,
   "city": date,
   "country": payementid
 },
"invoiceNumber": Date.now(),
"invoiceDate": new Date().toDateString(),
 "products": product,
 "logo": "https://raw.githubusercontent.com/jobelkurian2021/easyinvoice/jobelkurian2021-patch-1/logo.png",
//  "source": sources,
 "bottomNotice": payorderid
};
const result = await easyinvoice.createInvoice(data);                       
easyinvoice.download(`${name}.pdf`, result.pdf);
// await onsubmithandlechange();
toast.success("Generated pdf",{
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
}); 
window.location = "../../../Customer/Payment/History"
  setspinner(true)
}
    return (
        <Card
      style={{ width: "70rem" }}
      text="dark"
      className="text-center p-4 m-4"
      bg="warning"
    >
      <Card.Body className="p-2">
        <Card.Title className="p-1">Payment Details</Card.Title>
        <Card.Text className="text-center">
        <span> Order ID:: {data.payorderid} ||</span>
        <span> Email:: {data.email} ||</span><br/>
         <span> Source:: {data.source} ||</span>
          <span> Destination:: {data.destination} ||</span>
          <span> Total amount:: {data.totalprice} ||</span><br/>
          <span> No of passengers:: {data.noofpassengers} ||</span>
          <span> Payment ID:: {data.payementid} ||</span><br/>
          <span> Total amount:: {data.totalprice} ||</span>
          <span> Travel DATE:: {data.date} ||</span>
        </Card.Text>
        <Button variant="danger" onClick={()=>generate()}>{spinner ?"Generate Pdf":<Spinner animation="border" />}<FaFilePdf/> </Button>
      </Card.Body>
    </Card>
    )
}
