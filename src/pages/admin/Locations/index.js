import React, { Component } from "react";
import Layout from "../../../components/core/Layout";
import ReactDatatable from "@ashvin27/react-datatable";
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";
import {
  getAllLocations,
  getLocations,
  removeLocation
} from "../../../components/Utils/Requests/Location";
import Loading from "../../../components/core/Loading";
import AdminNavbar from "../../../components/navbar/Adminnavbar";


class Locations extends Component {
  

  constructor(props) {
    super(props);
    // this.state = {
    //   setDataSou: 0
    // };
    // _renderCounter = () => () => {
    //   const [DataSou, setDataSou] = useState([]);
  
    //   return <div>{ DataSou }</div>
    // }
    // const [DataSou, setDataSou] = useState([]);
    // const [DATA,setData] = useState([])
    // this.state = {
    //   // DataSou: [],
    //   setDataSou: []
    // };
      // try {
      //   async function userdatafetch() {
      //     await axios({
      //       method: "Get",
      //       url: "http://localhost:3500/api/location",
      //     }).then((resp) => {
      //       const response = resp.data;
      //       setDataSou(response);
      //     });
      //   }
      //   userdatafetch();
      // } catch (e) {
      //   console.error(e);
      // }
    

    this.columns = [
      // {
      //   key: "_id",
      //   text: "_id.",
      //   className: "id",
      //   align: "left",
      //   sortable: true
      // },
      {
        key: "place",
        text: "Place",
        className: "name",
        align: "left",
        sortable: true
      },
      // {
      //   key: "district",
      //   text: "District",
      //   className: "name",
      //   align: "left",
      //   sortable: true
      // },
      {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
          return (
            <>
              <button
                data-toggle="modal"
                data-target="#update-user-modal"
                className="btn btn-primary btn-sm"
                onClick={() =>
                  this.props.history.push(`/Admin/Locations/edit/${record._id}`)
                }
                style={{ marginRight: "5px" }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteRecord(record._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </>
          );
        }
      }
    ];

    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      filename: "Buses",
      no_data_text: "No location found!",
      button: {
        excel: true,
        print: true,
        csv: true
      },
      language: {
        length_menu: "Show _MENU_ result per page",
        filter: "Filter in records...",
        info: "Showing _START_ to _END_ of _TOTAL_ records",
        pagination: {
          first: "First",
          previous: "Previous",
          next: "Next",
          last: "Last"
        }
      },
      show_length_menu: true,
      show_filter: true,
      show_pagination: true,
      show_info: true
    };

    this.state = {
      locations: [],
      isLoading: true,
      error: ""
    };
  }

  componentDidMount() {
    this.fetchLocations();
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextState.locations === this.state.locations) {
      this.fetchLocations();
    }
  }

  deleteRecord = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!"
    }).then(async result => {
      if (result.value) {
        const resp = await removeLocation(id).catch(err => {
          this.setState({ error: err.response.data.error });
        });
        if (resp && resp.status === 200) {
          Swal.fire("Deleted!", "Location has been deleted.", "success");
          this.setState({});
        }
      }
    });
  };

  fetchLocations = async () => {
    const resp = await getLocations().catch(err => {
      this.setState({ error: err.response.data.error, isLoading: false });
    });
    if (resp && resp.status === 200) {
      let counter = 1;
      resp.data.map(location => {
        location.createdAt = moment(location.createdAt).format("MMMM Do, YYYY");
        location.sn = counter;
        counter++;
        return location;
      });
      this.setState({ locations: resp.data, isLoading: false });
    }
  };

  pageChange = pageData => {
    console.log("OnPageChange", pageData);
  };

  render() {

    return (
      <Layout title="Locations">
        		<AdminNavbar />
        <div className="d-flex" id="wrapper">

          <div id="page-content-wrapper">
            <div className="container-fluid">
              <button className="btn btn-link mt-3" id="menu-toggle"></button>

              <button
                className="btn btn-outline-primary float-right mt-3 mr-2"
                data-toggle="modal"
                data-target="#add-user-modal"
                onClick={() => this.props.history.push("/Admin/Locations/add")}
              >
                {" "}
                Add Location
              </button>

              <h1 className="mt-2 text-primary">Locations</h1>
              {this.state.isLoading ? (
                <Loading />
              ) : (
                <ReactDatatable
                  config={this.config}
                  records={this.state.locations}
                  columns={this.columns}
                  onPageChange={this.pageChange}
                />
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Locations;
