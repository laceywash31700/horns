import React from "react";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import Header from "./Header";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModal: false,
      beast: {}
    }
  }
   openSelectedBeast = () => {
    this.setState({selectedModal: true})
   }
   closeSelectedBeast = () => {
    this.setState({selectedModal: false})
   }
   useBeast = (beast) => {
    console.log('from in use beast')
    this.setState({beast: beast})
   }

  render() {
    console.log(this.state)
    return (
      <>
        <Header />
        <Main 
        openSelectedBeast = {this.openSelectedBeast}
        useBeast = {this.useBeast}
        />
        <SelectedBeast
        selectedModal={this.state.selectedModal}
        closeSelectedBeast={this.closeSelectedBeast}
        beast={this.state.beast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
