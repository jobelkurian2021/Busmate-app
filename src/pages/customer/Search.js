import React, { Component } from "react";
import Layout from "../../components/core/Layout";
import Swal from "sweetalert2";
import showError from "../../components/core/Error";
import showLoading from "../../components/core/Loading";
import { SearchBus } from "../../components/Utils/Requests/Travel";
import UserNavbar from "../../components/navbar/UserNavbar";
import { Redirect, withRouter } from 'react-router-dom';
import {toast} from 'react-toastify';
import { getAllLocations } from "../../components/Utils/Requests/Location";
import '../css/booking/animate.css';
import '../css/booking/icomoon.css';
import '../css/booking/themify-icons1.css';
import '../css/booking/bootstrap.css';
import '../css/booking/magnific-popup1.css';
import '../css/booking/bootstrap-datepicker.min.css';
import '../css/booking/owl.carousel.min.css';
import '../css/booking/owl.theme.default.min.css';
import '../css/style.css';

class Search extends Component {
  state = {
    error: "",
    source: "",
    destination:"",
    no:"",
    date:"",
    locations: [],
    loading: "",
    redirect: "/Customer/SearchCard"
  };
  componentDidMount() {
    this.fetchLocations();
  }
  fetchLocations = async () => {
    const resp = await getAllLocations();
    if (resp.status === 200) {
      this.setState({
        locations: resp.data,
        startLocation: resp.data[0]._id,
        endLocation: resp.data[resp.data.length - 1]._id
      });
    }
  };
  submit = async e => {
    e.preventDefault();
    const { error, source,destination,date,no, loading } = this.state;

    const resp = await SearchBus({ source,destination,date }).catch(err => {
      localStorage.setItem('source', source);
      localStorage.setItem('destination', destination);
      localStorage.setItem('date', date);
      localStorage.setItem('no', no);

      window.location.href = "/Customer/SearchCard";

      this.setState({ loading: false, error: err.response.data.error });
      // history.push("/Customer/SearchCard");
      // return <Redirect to="/Customer/SearchCard" /> ;
    });
  
    if(resp && resp.status === 200){
      localStorage.setItem('source', source);
      localStorage.setItem('destination', destination);
      localStorage.setItem('date', date);
      localStorage.setItem('no', no);

      toast.error(`Loading`,{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined});
        // history.push("/Customer/SearchCard");
        // if (this.state.redirect) {
        // return <Redirect to={this.state.redirect} />
        // }
        window.location.href = "/Customer/SearchCard";
        // this.props.history.push('/Customer/SearchCard');
    }
    // if (resp && resp.status === 200) {
    //   this.setState({ loading: false });
    //   Swal.fire({
    //     type: "success",
    //     title: "Successfully add new travel!",

    //     // onRender: () => {
    //     //   this.props.history.push("../../Admin/Travels/");
    //     // }
    //   });
    //   return <Redirect to="/Customer/SearchCard" /> ;

    // }
  };

  handleChange = input => e => {
    let value = e.target.value;

    this.setState({
      [input]: value
    });
  };

  render() {
    const handleChange = this.handleChange;
    const { error, source,destination,date,no, loading,locations } = this.state;
    const values= {locations};

    return (
      // <Layout title="Search">
                	
               <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" 
        // style="background-image: url(images/img_bg_2.jpg)"
        >
          	<UserNavbar />

{showError(error)}
{showLoading(loading)}
{!loading && (
  <>
		<div className="overlay"></div>
		<div className="gtco-container">
			<div className="row">
				<div className="col-md-12 col-md-offset-0 text-left">
					

		
					<div className="row row-mt-15em">
						<div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
							<h1>Planing Trip ? Book Now</h1>	
              </div>
						<div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
							<div className="form-wrap">
								<div className="tab">
									
									<div className="tab-content">
										<div className="tab-content-inner active" data-content="signup">
											<h3>Book Your Trip</h3>
        
                      <div className="row form-group">
													<div className="col-md-12">
														<label for="source">Leaving From</label>
              {/* <input
                type="text"
                className="form-control"
                required
                placeholder="source Name"
                onChange={handleChange("source")}
                value={source}
              /> */}
              <select
            className="custom-select custom-select-sm form-control"
            onChange={handleChange("source")}
            value={source}
            required
          >
            <option value="Default" disabled>
              Select Location
            </option>
            {values.locations.map(location => (
              <option value={location.place} key={location.place}>
                {location.place}
              </option>
            ))}
          </select>
            </div>
            </div>
            <div className="row form-group">
													<div className="col-md-12">
														<label for="destination">Going To</label>
              {/* <input
                type="text"
                className="form-control"
                required
                placeholder="destination Name"
                onChange={handleChange("destination")}
                value={destination}
              /> */}
              <select
            className="custom-select custom-select-sm form-control"
            onChange={handleChange("destination")}
            value={destination}
            required
          >
            <option value="Default" disabled>
              Select Location
            </option>
            {values.locations.map(location => (
              <option value={location.place} key={location.place}>
                {location.place}
              </option>
            ))}
          </select>
          </div>
												</div>
                        <div className="row form-group">
													<div className="col-md-12">
														<label for="destination">No of passengers:</label>
              <select
                // type="select"
                className="form-control"
                required
                onChange={handleChange("no")}
                value={no}
              >
                <option  selected>
              Select Passengers
            </option>
               <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              
              </select>
            </div>
            </div>
           
            <div className="row form-group">
													<div className="col-md-12">
														<label for="date-start">Date of Travel</label>
              <input
                type="date"
                className="form-control"
                required
                placeholder="date "
                onChange={handleChange("date")}
                value={date}
              />
												</div>
            </div>
            <div className="row form-group">
													<div className="col-md-12">
                          <button
              className="btn btn-success submit-form btn-block"
              onClick={this.submit}
            >
              Search Bus
            </button>								
            					</div>
												</div>
            {/* <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Search Bus
            </button> */}
            </div>

										
</div>
</div>
</div>
</div>
</div>


</div>
</div>
</div>

          </>
        )}
      {/* </Layout> */}
      </header>
    );
  }
}

export default Search;



// import React,{useState,useEffect} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Form } from "react-bootstrap";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import '../css/booking/animate.css';
// import '../css/booking/icomoon.css';
// import '../css/booking/themify-icons1.css';
// import '../css/booking/bootstrap.css';
// import '../css/booking/magnific-popup1.css';
// import '../css/booking/bootstrap-datepicker.min.css';
// import '../css/booking/owl.carousel.min.css';
// import '../css/booking/owl.theme.default.min.css';
// import UserNavbar from "../../components/navbar/UserNavbar";
// import { useHistory } from "react-router-dom";
// import { Redirect } from 'react-router-dom';

// import '../css/style.css';

// import { toast } from "react-toastify";
// toast.configure();

// export default function Search({ DataSou }) {

//     const initialValues = {
//       sourcedrop: "",
//       destinationdrop:"",
//         date:"",
//       };
//       // const [DataSou, setDataSou] = useState([]);
//       const [DATA,setData] = useState([]);
//       let history = useHistory();


//       const onSubmit = async (values, {setSubmitting,resetForm}) => {
//         // useEffect( () => {
//           try {
//         async function userdatfetch () {
//           await axios.get( `http://localhost:3500/api/bus/search`,  
//              { params: {
//               sourcedrop:formik.values.sourcedrop,
//               destinationdrop:formik.values.destinationdrop,
//               date:formik.values.date
//               }
//              }
//             ).then(resp=>{   
//               const response=resp.data;
//               setData(response);
//       return <Redirect to="/Customer/SearchCard" /> ;
// });
//          }
//          userdatfetch();
//           } catch (e) {
//               console.error(e);
//           }
//         // }, []);
        
//           // try {
//           //   async function userdatafetch() {
//           //     await axios({
//           //       method: "Get",
//           //       url: "http://localhost:3500/api/bus/search",
//           //     }).then((resp) => {
//           //       const response = resp.data;
//           //       setData(response);
//           //     });
//           //   }
//           //   userdatafetch();
//           // } catch (e) {
//           //   console.error(e);
//           // }
//        };
//     const validationSchema = Yup.object({
//       sourcedrop: Yup.string()
//       .required("source Name is Required"),
//       destinationdrop: Yup.string()
//       .required("destination Name is Required"),
//       date: Yup.date()
//       .min(new Date( Date.now() -86400000), "Trip date must be today or later.")
//       .typeError("Please provide a valid date")
//       .required("Please specify the trip date"),
//       });
//     const formik = useFormik({
//           initialValues,
//           onSubmit,
//         validationSchema,
//       });
//     return(
//         <div>
//         <UserNavbar/>

//         <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" 
//         // style="background-image: url(images/img_bg_2.jpg)"
//         >
//         <div className="overlay"></div>
//         <div className="gtco-container">
//         <div className="row">
//         <div className="col-md-12 col-md-offset-0 text-left">



//         <div className="row row-mt-15em">
//         <div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
//         <h1>Planing Trip ? Book Now</h1>	
//         </div>
//         <div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
//         <div className="form-wrap">
//         <div className="tab">

//         <div className="tab-content">
//         <div className="tab-content-inner active" data-content="signup">
//         {/* <h3>Book Your Trip</h3> */}
//         <Form onSubmit={formik.handleSubmit}>
//         <div className="row form-group">
//         <div className="col-md-12">
//             <label for="source">Leaving From</label>
     
//           <Form.Control
//             as="select"
//             name="sourcedrop"
//             required
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.sourcedrop}
//             className={
//               formik.errors.v && formik.touched.sourcedrop
//                 ? "form-control is-invalid source"
//                 : "source"
//             }
//           >
            
//             {DataSou.length &&
//               DataSou.map((item) => {
//                 return (
//                   // <option key={1} defaultValue={DataCat[0]._id}>{DataCat[0].categoreyname}</option>,
//                   <option key={item.place} value={item.place}>
//                     {item.place}
//                   </option>
//                 );
//               })
//               }
//           </Form.Control>
//           {formik.errors.sourcedrop ? (
//             <Form.Control.Feedback type="invalid">
//               {formik.errors.sourcedrop}
//             </Form.Control.Feedback>
//           ) : (
//             ""
//           )}
 
//         </div>
//         </div>
//         <div className="row form-group">
//         <div className="col-md-12">
//             <label for="destination">Going To</label>
     
//           <Form.Control
//             as="select"
//             name="destinationdrop"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.destinationdrop}
//             className={
//               formik.errors.destinationdrop && formik.touched.destinationdrop
//                 ? "form-control is-invalid destination"
//                 : "destination"
//             }
//           >
//             {DataSou.length &&
//               DataSou.map((item) => {
//                 return (
//                   // <option key={1} defaultValue={DataBrand[0]._id}>{DataBrand[0].brandname}</option>,
//                   <option key={item.place} value={item.place}>
//                     {item.place}
//                   </option>
//                 );
//               })}
//           </Form.Control>
//           {formik.errors.destinationdrop ? (
//             <Form.Control.Feedback type="invalid">
//               {formik.errors.destinationdrop}
//             </Form.Control.Feedback>
//           ) : (
//             ""
//           )}
 
//                 </div>
//         </div>

//         <div className="row form-group">
//         <div className="col-md-12">
//             <label for="date-start">Date of Travel</label>
//             <input type="date" id="date-start" className="form-control" name="date"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.date}
//             required
//             />
//             {formik.errors.date ? (
//               <div className="invalid-feedback date">{formik.errors.date}</div>
//             ) : (
//               ""
//             )}
//         </div>
//         </div>

//         <div className="row form-group">
//         <div className="col-md-12">
//             <input type="submit" className="btn btn-primary btn-block" value="Search Buses" />
//         </div>
//         </div>
//         </Form>
//         </div>


//         </div>
//         </div>
//         </div>
//         </div>
//         </div>


//         </div>
//         </div>
//         </div>
//         </header>
//         </div>    
//     );
//   }
  