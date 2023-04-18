import React from "react";

class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <h2>{this.prop.title}</h2>
            <img scr={this.prop.image_url} alt={this.prop.title} height={250}/>
            <p>{this.prop.description}</p>
            </>
        )
    }
}

export default HornedBeast;