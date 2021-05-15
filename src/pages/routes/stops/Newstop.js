import React, { useState, useEffect } from "react";
import EditButton from './EditButton' ;
import Table from '../../../../components/Table/Table'
import { IoArrowBackCircle } from "react-icons/io5";
import { Button} from "react-bootstrap";
import axios from "axios";

import Subcategorey from "./subcategorey";

export default function Newstop() {
  const [DataCat, setDataCat] = useState([]);
  const [DataBrand, setDataBrand] = useState([]);

  const [TABLE, setTable] = useState(false);
  const [DATA, setData] = useState("data");


  useEffect(() => {
      try {
        async function userdatfetch() {
          await axios({
            method: "Get",
            url: "http://localhost:5000/product/stopget",
          }).then((resp) => {
            const response = resp.data;
            setData(response);
          });
        }
        userdatfetch();
      } catch (e) {
        console.error(e);
      }
    }, []);

  useEffect(() => {
    try {
      async function userdatfetch1() {
        await axios({
          method: "Get",
          url: "http://localhost:5000/product/brandGet",
        }).then((resp) => {
          const response = resp.data;
          setDataBrand(response);
        });
      }
      userdatfetch1();
    } catch (e) {
      console.error(e);
    }
  }, []);

//   useEffect(() => {
//     try {
//       async function userdatfetch2() {
//         await axios({
//           method: "Get",
//           url: `http://localhost:5000/product/categoreyGet`,
//         }).then((resp) => {
//           const response = resp.data;
//           setDataCat(response);
//         });
//       }
//       userdatfetch2();
//     } catch (e) {
//       console.error(e);
//     }
//   }, []);


  const COLUMNS=[
    {
        Header:'stop1',
        accessor:'stop'
    },
    {
        Header:'categorey',
        accessor:'categoreyno.categoreyname'
    },
    {
        Header:'brand',
        accessor:'brandno.brandname'
    }
    // {
    //     Header: "Action",
    //     accessor: "subcategoreyid",
    //     Cell: ({ row,}) => (
    //       <EditButton Rows={row} />
    //     )
    //   }
  ]

  return (
    <div>
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
            <Table COLUMNS={COLUMNS} DATA={DATA} />
           </div> 
       ) : (
        <Subcategorey
        DataCat={DataCat}
        DataBrand={DataBrand}
        setTable={setTable}
        TABLE={TABLE}
      />
        )} 

    
      </div>
    </div>
  );
}

//  table
