import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Main.css'

class Main extends React.Component {
    render() {
        const theBeasts = this.props.filteredBeast.map((beast,idx) =>
            < HornedBeast
            filteredBeast={this.props.filteredBeast}
            openSelectedBeast={this.props.openSelectedBeast}
            useBeast={this.props.useBeast}
            beast={beast}
            key={idx}
            title={beast.title}
            description={beast.description}
            image_url={beast.image_url}
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