import React from "react";
import HornedBeast from "./HornedBeast";
const data = [{
    "_id": 1,
    "image_url": "https://www.scuba.com/blog/wp-content/uploads/2013/11/narwhal-rendering-underwater-feature.jpg",
    "title": "NarWhal",
    "description": "just the unicorn of the sea living its best life",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "_id": 2,
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Parent rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },

  {
    "_id": 3,
    "image_url": "https://previews.123rf.com/images/vadimone/vadimone1008/vadimone100800004/7517648-old-nubian-ibex-closeup.jpg",
    "title": "Nubian Ibex",
    "description": "What the hell you looking at?",
    "keyword": "Ibex",
    "horns": 2
}];

class Main extends React.Component{
    render(){
    const theBeast = [];
    
    data.forEach(beast =>{
        theBeast.push(
            <HornedBeast
            title ={beast.title}
            image_url={beast.image_url}
            description={beast.description} 
            />)
    })
        return(
            <>
            <h2>Fantastic Horned Beasts</h2>
            {theBeast}
            </>
        )
    }
}

export default Main