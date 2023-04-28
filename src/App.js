import React from "react";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import Header from "./Header";
import Main from "./Main";
import data from "./data.json";
import Form from "react-bootstrap/Form"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModal: false,
      beast: {},
      filteredBeast: data,
    }
  }
  openSelectedBeast = () => {
    this.setState({ selectedModal: true })
  }
  closeSelectedBeast = () => {
    this.setState({ selectedModal: false })
  }
  useBeast = (beast) => {
    this.setState({ beast: beast })
  }
  
  filterBeast = (e) => {
    e.preventDefault();
    let filteredArr = e.target.value!=='0' ? data.filter(v=>v.horns===parseInt(e.target.value)): data 
    this.setState({filteredBeast: filteredArr})
  }

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Label>Filter those Horny Beast Morty!</Form.Label>
            <Form.Select onChange={this.filterBeast}>
              <option value="0"> NEED THEM HORNY BEASTS MORTY! All OF THEM HORNS! SO MANY HORNS ITS GONNA TAKE ME A MINUTE TO COUNT THEM ALL! ITS JUST TOO MANY HORNS MORTY!</option>
              <option value="1"> YOU GOT THE ONE HORNED BEASTS!</option>
              <option value="2">YOU GOT THOSE TWO HORNED BEAST!</option>
              <option value="3">AND THEM THREE HORNED BEAST!</option>
              <option value="100">BUT I WANNA SEE 100 HORNS ON THEM BEASTS!</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          openSelectedBeast={this.openSelectedBeast}
          useBeast={this.useBeast}
          filteredBeast={this.state.filteredBeast}
        />
        <SelectedBeast
          selectedModal={this.state.selectedModal}
          closeSelectedBeast={this.closeSelectedBeast}
          filteredBeast={this.state.filteredBeast}
          beast={this.state.beast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
