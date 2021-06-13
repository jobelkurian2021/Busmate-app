import React, { useState, useEffect } from "react";
// import Table from '../../../components/Table/Table'
import { IoArrowBackCircle } from "react-icons/io5";
import { Button} from "react-bootstrap";
import axios from "axios";
import AddBusNew from "./FormPrimaryDetails";
// import Customer from "./Customer";
// import ReactDOM from "react-dom";

import UserNavbar from "../../../components/navbar/UserNavbar";

export default function AddBus() {
    const [DataSou, setDataSou] = useState([]);
    const [DataTra, setDataTra] = useState([]);
    const [DataBrand] = useState([]);
  
    const [TABLE, setTable] = useState(false);
    
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
      
      useEffect(() => {
        try {
          async function userdatafetch() {
            await axios({
              method: "Get",
              url: "http://localhost:3500/api/travels",
            }).then((resp) => {
              const response = resp.data;
              setDataTra(response);
            });
          }
          userdatafetch();
        } catch (e) {
          console.error(e);
        }
      }, []);
      return (
        <div>
            <UserNavbar/>
            <div className="Login">
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
        <AddBusNew
        DataSou={DataSou}
        DataTra={DataTra}
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


//   render() {
//     const { values, handleChange } = this.props;

//     return (
//         <div>        <h3 align="center">Add new bus (Primary details)</h3>
//         <form>
//         <Layout title="Add new bus (Primary details)">
//         {/* <div className="form-group">
//         <label>Name *</label>
//             <input  type="text"
//               className="form-control"
//               required
//               placeholder="Enter the bus name"
//               name="name"
//               />
//                       </div> */}

//           <div className="form-group">
//             <label>Name *</label>
//             <input
//               type="text"
//               className="form-control"
//               required
//               placeholder="Enter the bus name"
//             />
//           </div>
  
          // <div className="form-group">
          //   <label>Bus Number *</label>
          //   <input
          //     type="text"
          //     className="form-control"
          //     required
          //     placeholder="Enter the bus number"
          //   />
          //   <small className="form-text text-muted">
          //     Enter in the format of ba-2-pa
          //   </small>
          // </div>
  
//           <div className="form-check check-group">
//             <input
//               type="checkbox"
//               id="checkbox"
//               className="form-check-input"
//             />
//             <label className="checkbox-label" htmlFor="checkbox">
//               is Available
//             </label>
//           </div>
  
//           <div className="form-group">
//             <label>Bus type</label>
//             <select
//               className="form-control"
//             >
//               <option>Normal</option>
//               <option>AC</option>
//               <option>Delux</option>
//               <option>Suspense AC</option>
//               <option>Suspense Delux</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Travels</label>
//             <select
//               className="custom-select custom-select-sm form-control"

//             >
//               <option value="Default" disabled>
//                 Select Travel
//               </option>
//               {values.travels.map(travel => (
//                 <option value={travel._id} key={travel._id}>
//                   {travel.name}
//                 </option>
//               ))}
//             </select>
//           </div>
  
//           <div className="form-group">
//             <label>Fare (Rs) *</label>
//             <input
//               type="number"
//               className="form-control"
//               required
//               placeholder="Enter the fare of bus"

//             />
//           </div>
  
//           <div className="form-group">
//             <label>Seat Capacity</label>
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Enter toal seats in the bus"

//             />
//           </div>
//           <div className="form-group">
//             <label>Additional Features</label>
//             <input
//               type="text"
//               className="form-control"
//               required
//               placeholder="Separate features with commas"

//             />
//           </div>
  
//           <div className="form-group">
//             <label>Departure Time *</label>
//             <input
//               type="time"
//               className="form-control"
//               required
//               placeholder="Enter the bus number"
       
//             />
//           </div>
  
//           <div className="form-group">
//             <label>Journey date</label>
//             <input
//               type="date"
//               className="form-control"
          
//             />
//           </div>
  
//           <div className="form-group">
//             <label>Start Location</label>
  
//             <select
//               className="custom-select custom-select-sm form-control"
    
//             >
//               <option value="Default" disabled>
//                 Select Location
//               </option>
//               {values.locations.map(location => (
//                 <option value={location.place} key={location.place}>
//                   {location.place}
//                 </option>
//               ))}
//             </select>
//           </div>
  
//           <div className="form-group">
//             <label>End Location</label>
//             <select
//               className="custom-select custom-select-sm form-control"
    
//             >
//               <option value="Default" disabled>
//                 Select Location
//               </option>
//               {values.locations.map(location => (
//                 <option value={location.place} key={location.place}>
//                   {location.place}
//                 </option>
//               ))}
//             </select>
//           </div>
  
//           <div className="form-group">
//             <label>Boarding Points</label>
//             <input
//               type="text"
//               className="form-control"
//               required
//               placeholder="Enter names separated by comma"

//             />
//           </div>
  
//           <div className="form-group">
//             <label>Dropping Points</label>
//             <input
//               type="text"
//               className="form-control"
//               required
//               placeholder="Enter names separated by comma"

//             />
//           </div>
  
//           <button className="btn btn-info" onClick={this.continue}>
//             Submit Data
//           </button>
//         </Layout>
//         </form>
//         </div>
  
//       );
    
//   }
// }

// export default AddBus;