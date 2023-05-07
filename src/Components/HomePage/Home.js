import { Component } from "react"
import React. { Component} from "react";
import "./Home.css"
import MainContent from "../MainContent/MainContent";

class Home extends Component{
    constructor(props){
        super (props);
        this.state = {}
        
    }
    render (){
       return {
        <div> <NavBar/> </div>
        <div> <MainContent/> </div>
       };
    }
}
export default Home: