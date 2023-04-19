import React from "react";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    incrementLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
    
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} height={250} />
                <p>{this.props.description}</p>
                <div>
                    <p>{this.state.likes} Likes</p>
                    <button onClick={this.incrementLike}>Like</button>
                </div>
            </>
        )
    }
}

export default HornedBeast;