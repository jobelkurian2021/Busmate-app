
import React,{useState,useEffect} from 'react';
import { Container,Row,Table,Button,Col,Spinner} from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import {toast} from 'react-toastify';


import axios from "axios";
// import DeletButton  from "./DeletButton"
// import  QuantityButton from "./QuantityButton";
// import logo from "./logo.jpg";

import UserNavbar from "../../components/navbar/UserNavbar";

import easyinvoice from 'easyinvoice';
import { v4 as uuidv4 } from 'uuid';

toast.configure()
export default function Bill() { 
  
const email =localStorage.getItem('myemail');
const [DATA, setData] = useState([]);
const [ setvalues] = useState(0)
const [spinner, setspinner] = useState(true)

const email1 = localStorage.getItem("myemail");
// console.log(DATA)

    useEffect(() => {
        try {
          async function userdatfetch1() {

            await axios({
              method: "get",
              url: "http://localhost:3500/api/billGet",
              data:{email}
            })
            .then((resp) => {

              const response = resp.data;
              // const name= resp.data.name;
            // const phone = resp.data.phone;
              //  console.log(response)
              setData(response);
              
            });
          }
          
          userdatfetch1();
          

          // localStorage.setItem('email', userdatfetch1.email);
          //     localStorage.setItem('fname', userdatfetch1.name);
          //     localStorage.setItem('phone', userdatfetch1.phone);
        
        } catch (e) {
          console.error(e);
        }
      }, [email]);
      
      useEffect(() => {
        try {
          async function userdatfetch1() {
            await  axios
            .post(`http://localhost:3500/api/bill/total`,{email})
            .then((resp) => {
              const response = resp.data;
              setvalues(response);  
            });
          }
          userdatfetch1();
        } catch (e) {
          console.error(e);
        }
      }, [email]);

      const name1 = DATA.name;
      const phone1= DATA.phone;
// invoice
const generate =async()=>{
  setspinner(false);
  const product =  DATA.map(item=>{
    return (
        {  
          // "passengers": item.no,
          //   "source":item.source,
          //   "destination":item.destination,
          //   "date":item.date,
          //   "time":item.time,
          //   "tax": 2,
          //   "price": 50
            "quantity": item.no,
            "description": "Ticket Charges",
            "destination":item.destination,
            "date":item.date,
            "time":item.time,
            "tax": 2,
            "price": 40
            // "price": item.emailid.unitprice
        }
      //   {  
      //     "quantity":item.date,
      //     "description":item.destination,
      //     "price":item.time,
      //     // "price": item.emailid.unitprice
      // }
    )
 });
//  const source =  DATA.map(item=>{
//   return (
//       {  
//           "source":item.source,
//           "destination":item.destination,
//           "date":item.date,
//           "time":item.time,
//           "price": 50
//           // "price": item.emailid.unitprice
//       }
//   )
// });
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
   
   "company": email1,
   "address": name1,
   "zip": phone1,
   "city": "",
   "country": ""
 },
"invoiceNumber": Date.now(),
"invoiceDate": new Date().toDateString(),
 "products": product,
 "logo": "https://raw.githubusercontent.com/jobelkurian2021/easyinvoice/jobelkurian2021-patch-1/logo.png",
//  "source": sources,
 "bottomNotice": "Thank you for choosing us. BusMate"
};
const result = await easyinvoice.createInvoice(data);                       
easyinvoice.download(`${name}.pdf`, result.pdf);
await onsubmithandlechange();

}
    // "easyinvoice": "^1.0.139",
    // "easyinvoice": "file:node_modules/easyinvoice/index.d.ts",

// submit form

const onsubmithandlechange =async()=>{
  try {
    axios
      .put(`http://localhost:3500/bill/billsubmit`,{email})
      .then((resp) => {

        if(resp.data.message==="billed") {
          toast.success(`${resp.data.message}`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          }); 
          window.location = "/payment"
            setspinner(true)
        }else{
          toast.error(`${resp.data.message}`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined});
            setspinner(true)
        }
      });
    }
    catch (e) {
      console.error(e);
    }
 }


 if(DATA.length===0){
   return(
    <h4>Sorry! No products added to bill section</h4>
   );
 }

if(DATA.length!==0){
    return (
  <div>
            <UserNavbar/>

<Container>
<h1>Generate Bill</h1>
<Row  className="row mt-5">

<div>
  <form>
  <Table striped bordered hover>
  <thead>
    <tr>
    <th>Name</th>
      <th>Source</th>
      <th>Destination</th>
      <th>date</th>
      <th>time</th>
      <th>Passengers</th>
      <th>Total price</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
 
    {DATA.map(item=>{
      return(
        <tr key={item._id}>
        <td>{item.name}</td>
       <td>{item.source}</td>
       <td>{item.destination}</td>
       <td>{item.date}</td>
       <td>{item.time}</td> 
       <td>{item.no}</td>
       {/* <td><QuantityButton Rows={item} /></td> */}
       <td>{item.Totalprice}</td>
       {/* <td><DeletButton Rows={item} /></td> */}
       </tr>     
      )
    })
    }

  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
       <td> 
       <input type="text" readOnly value={`TOTAL:  50`} />
       {/* <input type="text" readOnly value={`TOTAL:  ${finavalues}`} /> */}

       </td>
      <td></td>
    </tr>
  </tfoot>
</Table>
<Row>
<Col xs={12} md={8}> </Col>
<Col xs={6} md={4}>
 <Button variant="danger" onClick={()=>generate()}>{spinner ?"PAY & INVOICE ":<Spinner animation="border" />}<FaFilePdf/> </Button>
</Col>
</Row>
</form>
 </div>
 
</Row>
</Container>
        </div>
    );
}
}
