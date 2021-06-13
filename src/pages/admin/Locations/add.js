import React, { Component } from "react";
import Layout from "../../../components/core/Layout";
import Swal from "sweetalert2";
import showError from "../../../components/core/Error";
import showLoading from "../../../components/core/Loading";
import { addNewLocation } from "../../../components/Utils/Requests/Location";
import districtJson from "../../../components/Utils/helpers/district.json";
import AdminNavbar from "../../../components/navbar/Adminnavbar";

class AddLocation extends Component {
  state = {
    error: "",
    place: "",
    districts: [],
    loading: "",
    district: ""
  };

  componentDidMount() {
    const resp = JSON.parse(JSON.stringify(districtJson));
    this.setState({ districts: resp });
  }

  submit = async e => {
    e.preventDefault();
    const { error, place, district, loading } = this.state;

    const resp = await addNewLocation({ place, district }).catch(err => {
      this.setState({ loading: false, error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({ loading: false });
      Swal.fire({
        type: "success",
        title: "Successfully add new location!",
        onRender: () => {
          this.props.history.push("/Admin/Locations");
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
    const { error, place, districts, district, loading } = this.state;

    return (
      <Layout title="Add Location">
                		<AdminNavbar />

        {showError(error)}
        {showLoading(loading)}
        {!loading && (
          <>
            <div className="form-group">
              <label>place</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Location place"
                onChange={handleChange("place")}
                value={place}
              />
            </div>
            <div className="form-group">
              <label>District</label>
              <select
                className="custom-select custom-select-sm form-control"
                onChange={handleChange("district")}
                value={district}
              >
                <option value="Default" disabled>
                  Select District
                </option>
                {districts.length > 0 &&
                  districts.map(location => (
                    <option value={location} key={location}>
                      {location}
                    </option>
                  ))}
              </select>
            </div>

            <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Add Location
            </button>
          </>
        )}
      </Layout>
    );
  }
}

export default AddLocation;
