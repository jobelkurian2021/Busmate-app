import React, { Component } from 'react';
import Layout from '../../components/core/Layout';
import Swal from 'sweetalert2';
import { Redirect, withRouter } from 'react-router-dom';
import { addNewBus, updateBus } from '../../components/Utils/Requests/Bus';
import axios from 'axios';
import {toast} from 'react-toastify';
toast.configure()

class Success extends Component {
	state = {
		loading: true,
		
	};

	addData = async () => {
		const resp = axios.post(`http://localhost:3500/api/bus/addbus`,
		// this.props.formData
		{ params: {
			name:this.props.formData.name,
		type: this.props.formData.type,
		busNumber: this.props.formData.busNumber,
		fare: this.props.formData.fare,
		features: this.props.formData.features,
		description: this.props.formData.description,
		seatsAvailable: this.props.formData.seatsAvailable,
		numberOfSeats: this.props.formData.numberOfSeats,
		departure_time: this.props.formData.departure_time,
		isAvailable: this.props.formData.isAvailable,
		startLocation: this.props.formData.startLocation,
		locations: this.props.formData.locations,
		travels: this.props.formData.travels,
		travel: this.props.formData.travel,
		endLocation: this.props.formData.endLocation,
		journeyDate: this.props.formData.journeyDate,
		boardingPoints: this.props.formData.boardingPoints,
		droppingPoints: this.props.formData.droppingPoints
		  }
		 }
		).then(resp=>{
		console.log(resp)
		if(resp.request.status===200) {
		  toast.success(`${resp.data.message}`,{
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined});
			// resetForm({});
			window.location = "/Company/AddBus";
		}else{
		  toast.error(`${resp.data.message}`,{
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined})
		
		};
	  });
	};

	async componentDidMount() {
		this.addData();

		if (this.props.isUpdate) {
			const resp = await updateBus(this.props.match.params.slug, this.props.formData).catch(err => {
				this.setState({ loading: false, error: err.response.data.error });
			});
			if (resp && resp.status === 200) {
				this.setState({ loading: false });
			}
		} else {
			// Add the bus
			
			const resp = await addNewBus(this.props.formData).catch(err => {
				this.setState({ loading: false, error: err.response.data.error });
			});
			if (resp && resp.status === 200) {
				this.setState({ loading: false });
			}
		}
	}

	renderMessage = () => {
    const { error } = this.state;
    const message = this.props.isUpdate ? "updated" : "added";
		if (error) {
			Swal.fire({
				type: 'error',
				title: error,
			});
			return <Redirect to="/Company/AddBus" />;
		} else {
			
			Swal.fire({
				type: 'success',
				title: `Successfully ${message} the bus!`,
			});
			return <Redirect to="/companyhome" />;
		}
	};

	loadingShow = () => {
		return <h1>Loading...</h1>;
	};

	render() {
		return <Layout>{this.state.loading ? this.loadingShow() : this.renderMessage()}</Layout>;
	}
}

export default withRouter(Success);
