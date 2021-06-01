import React, { Component } from "react";
import Layout from "../../../components/core/Layout";
import Swal from "sweetalert2";
import showError from "../../../components/core/Error";
import showLoading from "../../../components/core/Loading";
import { addNewTravel } from "../../../components/Utils/Requests/Travel";
import AdminNavbar from "../../../components/navbar/Adminnavbar";

class AddTravel extends Component {
  state = {
    error: "",
    name: "",
    loading: "",
  };

  submit = async e => {
    e.preventDefault();
    const { error, name, loading } = this.state;

    const resp = await addNewTravel({ name }).catch(err => {
      this.setState({ loading: false, error: err.response.data.error });
    });
    if (resp && resp.status === 200) {
      this.setState({ loading: false });
      Swal.fire({
        type: "success",
        title: "Successfully add new travel!",
        onRender: () => {
          this.props.history.push("../../Admin/Travels/");
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
                		<AdminNavbar />

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
                placeholder="Travel Name"
                onChange={handleChange("name")}
                value={name}
              />
            </div>

            <button
              className="btn btn-success submit-form"
              onClick={this.submit}
            >
              Add travel
            </button>
          </>
        )}
      </Layout>
    );
  }
}

export default AddTravel;
