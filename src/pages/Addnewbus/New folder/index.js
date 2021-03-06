import React, { Component } from "react";
import AdditionalDetails from "./AdditionalDetails";
import PrimaryDetails from "./PrimaryDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { getAllLocations,getLocations } from "../../components/Utils/Requests/Location";
import { getAllTravels } from "../../components/Utils/Requests/Travel";

class AddNewBus extends Component {
  state = {
    step: 1,
    name: "",
    type: "Normal",
    busNumber: "",
    fare: "",
    features: "",
    description: "",
    seatsAvailable: "",
    numberOfSeats: "",
    departure_time: "",
    isAvailable: true,
    startLocation: "",
    locations: [],
    travels: [],
    travel: "",
    endLocation: "",
    journeyDate: "",
    boardingPoints: "",
    droppingPoints: "",
    // image: "",
    buttonStyle: "block",
    formData: ""
  };

  componentDidMount() {
    this.setState({
      formData: new FormData()
    });

    this.fetchLocations();
    this.fetchTravels();
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  fetchLocations = async () => {
    // axios.post(`http://localhost:3500/api/newbooking`,values).then(resp=>{
    const resp = await getLocations();
    if (resp.status === 200) {
      this.setState({
        place: resp.data,
        place: resp.data[0]._id,
        place: resp.data[resp.data.length - 1]._id
      });
    }
    
  };

  
  fetchTravels = async () => {
    const resp = await getAllTravels();
    if (resp.status === 200) {
      this.setState({
        travels: resp.data,
        travel: resp.data[0]._id
      });
    }
  }

  // Handle fields change
  handleChange = input => e => {
    let value;
    if (input === "image") {
      if (e.length === 0) {
        return this.setState({ buttonStyle: "block" });
      }

      value = e[0];
      this.setState({ buttonStyle: "none" });
    } else if (input === "isAvailable") {
      value = !this.state.isAvailable;
    } else {
      value = e.target.value;
    }

    this.state.formData.set(input, value);

    this.setState({ [input]: value });
  };

  // componentWillUnmount() {
  // 	this.setState({ buttonStyle: 'block' });
  // }

  render() {
    const { step } = this.state;

    const {
      name,
      type,
      busNumber,
      fare,
      features,
      description,
      seatsAvailable,
      numberOfSeats,
      // image,
      departure_time,
      isAvailable,
      startLocation,
      endLocation,
      journeyDate,
      boardingPoints,
      droppingPoints,
      buttonStyle,
      formData,
      locations,
      travels,
      travel
    } = this.state;

    const values = {
      name,
      type,
      busNumber,
      fare,
      features,
      description,
      seatsAvailable,
      numberOfSeats,
      // image,
      departure_time,
      isAvailable,
      startLocation,
      endLocation,
      journeyDate,
      boardingPoints,
      droppingPoints,
      buttonStyle,
      formData,
      locations,
      travels,
      travel
    };

    switch (step) {
      case 1:
        return (
          <PrimaryDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleCheckbox={this.handleCheckbox}
            values={values}
          />
        );
      case 2:
        return (
          <AdditionalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return <Success values={values} formData={formData} />;
      default:
        return <h3>Error</h3>;
    }
  }
}

export default AddNewBus;
