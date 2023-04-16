import React from "react";
const state = [];

class Img extends React.Component{
    constructor(id,imageUrl,tile,description,keyword,horns){
        this.id = id;
        this.imageUrl = imageUrl;
        this.tile = tile;
        this.description = description;
        this.keyword = keyword;
        this.horns = horns;
        state.push(this);
    }
}

let Narwhal = new Img(0,
"https://www.istockphoto.com/photo/narwhal-couple-two-monodon-monoceros-playing-in-the-ocean-gm1191669639-338289133",
"A Narwhal",
"A narwhal living it's life",
"narwhal",
1)

let Ibex = new Img(1,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_7517648_old-nubian-ibex-closeup.html&psig=AOvVaw2YUeD_x0K91eS8ZPC0uws_&ust=1681695225279000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDN1Ieirf4CFQAAAAAdAAAAABAE",
    "A Nubian Ibex",
    "Whatcha lookin at",
    "Ibex",
    2)

let Rhino = new Img(1,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Frhino%2F&psig=AOvVaw0zLnH_Y1WiUKtFn-OVwVRs&ust=1681695756481000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiEsqGjrf4CFQAAAAAdAAAAABAE",
    "Rhinos",
    "Mama and baby Rhinos",
    "Rhino",
    2)
    

class HornedBeast extends Img{
    render(){
        return(
            <>
            <p>{this.props.tile}</p>
            <p>{this.props.description}</p>
            <img src={this.props.imageUrl}/>

            </>
        )
    }
}

export default HornedBeast;