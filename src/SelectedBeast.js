import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.selectedModal} onHide={this.props.closeSelectedBeast} >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Col>
                    < Image src={this.props.beast.image_url} alt={this.props.title} fluid roundedCircle/>
                    </Col>
                    </Container>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeSelectedBeast} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast