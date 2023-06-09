import React from "react";
import Emoji from "./emoji";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
        }
    }

    
    incDislike = () => {
        this.setState({
            dislikes: this.state.dislikes + 1
        })
    }
    
    incLike = () => {
        this.setState({
            likes: this.state.likes + 1,
        })
    }
    
    handleModal = () => {
        this.props.useBeast(this.props.beast);
        this.props.openSelectedBeast();
    }
    
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.handleModal}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Button variant="primary" onClick={this.incLike}> 
                        {this.state.likes} <Emoji symbol='👍' />
                        </Button>
                        <Button variant="danger" onClick={this.incDislike}> 
                        {this.state.dislikes} <Emoji symbol='👎' />
                        </Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeast;