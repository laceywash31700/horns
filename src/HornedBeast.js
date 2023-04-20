import React from "react";
import Emoji from "./emoji";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0
        }
    }

    incDislike = () => {
        this.setState({
            like: this.state.likes,
            disLike: this.state.dislikes + 1
        })
    }
    
    incLike = () => {
        this.setState({
            likes: this.state.likes + 1,
            disLike: this.state.dislikes
        })
    }


    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title> A {this.props.title}</Card.Title>
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