
import React, { useState, useEffect } from "react";
// import Table from '../../components/Table/Table'
import { IoArrowBackCircle } from "react-icons/io5";
import { Button} from "react-bootstrap";
import axios from "axios";
import Search from "./Search";
// import Customer from "./Customer";
// import ReactDOM from "react-dom";

import UserNavbar from "../../components/navbar/UserNavbar";
// import { useHistory } from "react-router-dom";
// const ClockUsingHooks = props => {
//   const [time, setTime] = useState(new Date())

//   const changeTime = () => {
//       setTime(new Date());
//   }

//   useEffect(() => {
//       const tick = setInterval(() => {
//           changeTime();
//       }, 1000);
//       return () => clearInterval(tick)
//   });
// }

export default function Customerhome() {
    // const email= localStorage.getItem("myemail"),
    // const role= localStorage.getItem("role"),
    const [DataSou, setDataSou] = useState([]);
    const [DataBrand] = useState([]);
  
    const [TABLE, setTable] = useState(false);
    // const [DATA, setData] = useState("data");

    useEffect(() => {
        try {
          async function userdatafetch() {
            await axios({
              method: "Get",
              url: "http://localhost:3500/api/location",
            }).then((resp) => {
              const response = resp.data;
              setDataSou(response);
            });
          }
          userdatafetch();
        } catch (e) {
          console.error(e);
        }
      }, []);
  
    // useEffect(() => {
    //   try {
    //     async function userdatfetch1() {
    //       await axios({
    //         method: "Get",
    //         url: "http://localhost:5000/product/brandGet",
    //       }).then((resp) => {
    //         const response = resp.data;
    //         setDataBrand(response);
    //       });
    //     }
    //     userdatfetch1();
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }, []);
  
    // useEffect(() => {
    //   try {
    //     async function userdatfetch2() {
    //       await axios({
    //         method: "Get",
    //         url: `http://localhost:5000/product/categoreyGet`,
    //       }).then((resp) => {
    //         const response = resp.data;
    //         setDataCat(response);
    //       });
    //     }
    //     userdatfetch2();
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }, []);
    
    return (
    <div>
        <UserNavbar/>
        <div className="Login">
        {/* <h4 align="right">Welcome <span>{localStorage.getItem('name')}</span></h4><br/> */}
        {/* <h2>It is {time.toLocaleTimeString()}.</h2> */}
           {/* <h2 align="center">Customer Home</h2> */}
           <div className="p-4 m-3">
        {TABLE ? (
          <div>
            <Button
              variant="info"
              type="button"
              className="submitbtn m-2"
              onClick={() => setTable(!TABLE)}
            >
              <IoArrowBackCircle />
            </Button>
            {/* <Table COLUMN={COLUMN} DATA={DATA} /> */}
           </div> 
       ) : (
        <Search
        DataSou={DataSou}
        DataBrand={DataBrand}
        setTable={setTable}
        TABLE={TABLE}
      />
        )} 

    
      </div>
        </div>
    </div>
    )
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<ClockUsingHooks />, rootElement);