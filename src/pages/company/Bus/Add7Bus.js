import React, { Component } from "react";
import Layout from "../../../components/core/Layout";
import Swal from "sweetalert2";
import showError from "../../../components/core/Error";
import showLoading from "../../../components/core/Loading";
import { addNewBus } from "../../../components/Utils/Requests/Bus";

class AddBus extends Component {
  state = {
    error: "",
    name: "",
    loading: "",
  };

  submit = async e => {
    e.preventDefault();
    const { error, name, loading } = this.state;

    const resp = await addNewBus({ name }).catch(err => {
      this.setState({ loading: false, error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({ loading: false });
      Swal.fire({
        type: "success",
        title: "Successfully added!",
        onRender: () => {
          this.props.history.push("/AddBus");
        }
      });
    }
  };

  handleChange = input => e => {
    let value = e.target.value;

    this.setState({
      [input]: value
    });
  };

  render() {
    const handleChange = this.handleChange;
    const { error, name, loading } = this.state;

    return (
      <Layout title="Add Travel">
        {showError(error)}
        {showLoading(loading)}
        {!loading && (
          <>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Bus Name"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="form-group">
            <label>Bus Number *</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter the bus number"
              value={bno}
            />
            <small className="form-text text-muted">
              Enter in the format of ba-2-pa
            </small>
          </div>
          <div className="form-check check-group">
             <input
              type="checkbox"
              id="checkbox"
              className="form-check-input"
            />
            <label className="checkbox-label" htmlFor="checkbox">
              is Available
            </label>
          </div>
  
          <div className="form-group">
            <label>Bus type</label>
            <select
              className="form-control"
            >
              <option>Normal</option>
              <option>AC</option>
              <option>Delux</option>
              <option>Suspense AC</option>
              <option>Suspense Delux</option>
            </select>
          </div>
          <div className="form-group">
            <label>Travels</label>
            <select
              className="custom-select custom-select-sm form-control"

            >
              <option value="Default" disabled>
                Select Travel
              </option>
              {values.travels.map(travel => (
                <option value={travel._id} key={travel._id}>
                  {travel.name}
                </option>
              ))}
            </select>
          </div>
  
          <div className="form-group">
            <label>Fare (Rs) *</label>
            <input
              type="number"
              className="form-control"
              required
              placeholder="Enter the fare of bus"

            />
          </div>
  
          <div className="form-group">
            <label>Seat Capacity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter toal seats in the bus"

            />
          </div>
          <div className="form-group">
            <label>Additional Features</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Separate features with commas"

            />
          </div>
  
          <div className="form-group">
            <label>Departure Time *</label>
            <input
              type="time"
              className="form-control"
              required
              placeholder="Enter the bus number"
       
            />
          </div>
  
          <div className="form-group">
            <label>Journey date</label>
            <input
              type="date"
              className="form-control"
          
            />
          </div>
  
          <div className="form-group">
            <label>Start Location</label>
  
            <select
              className="custom-select custom-select-sm form-control"
    
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
  
          <div className="form-group">
            <label>End Location</label>
            <select
              className="custom-select custom-select-sm form-control"
    
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
  
          <div className="form-group">
            <label>Boarding Points</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter names separated by comma"

            />
          </div>
  
          <div className="form-group">
            <label>Dropping Points</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter names separated by comma"

            />
          </div>
            <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Add Bus
            </button>
          </>
        )}
      </Layout>
    );
  }
}

export default AddBus;
