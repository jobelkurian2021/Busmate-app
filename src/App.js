import React,{ Component } from 'react';
import './App.css';
import Header from './pages/Header'; 
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import Form from './pages/Form';
import Routes from "./pages/Routes";
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:3500/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  render() {
  return (
      // function App() {
    <div>
      <Navbar />
      <Header /> 

      <Routes />
      
      {/* <div className="row">
       <Form /> */}
        {/* <Content /> */}
        {/* <Sidebar /> */}
      {/* </div> */}
      <Footer />
      <p className="App-intro">;{this.state.apiResponse}</p>

      </div>
  );
}
}
export default App;