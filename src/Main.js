import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Main.css'

class Main extends React.Component {
    render() {
        const theBeasts = data.map((beast,idx) =>
            < HornedBeast
            key={idx}
            openSelectedBeast={this.props.openSelectedBeast}
            useBeast={this.props.useBeast}
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
            beast={beast}
            />)


        return (
            <>
            <h2>Pick your favorite beast!</h2>
            <Container>
             <Col>
           <Row>
            {theBeasts}
            </Row>
             </Col>
            </Container>
            </>
        )
    }
}

export default Main