import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"

class Main extends React.Component{
    render(){
    const theBeast = data.map(beast =>
            <HornedBeast
            title ={beast.title}
            image_url={beast.image_url}
            description={beast.description} 
            />)
        
        
        return(
            <>
            <h2>Fantastic Horned Beasts</h2>
            {theBeast}
            </>
        )
    }
}

export default Main