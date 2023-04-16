import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render(){
        return(
            <>
            <p>Fantastic Horned Beasts</p>
            <HornedBeast name={'Jackson\'s Chameleon'}/>
            <HornedBeast name={'Narwhal'}/>
            <HornedBeast name={'Nubian Ibex'}/>
            <HornedBeast name={'Rhinos'}/>
            </>
        )
    }
}

export default Main