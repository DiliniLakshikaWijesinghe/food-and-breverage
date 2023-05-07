import React, { Component } from "react";
import "./NavBar.css";
import {Grid} from "@material-ui/core/Grid" ;
import insta_log from "../../images/Logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/react.svg";
import Avatar from '@mui/material/Avatar';
import pp from "../../images/pp1.png";



class NavBar extends Component {
    constructor (props){
        super (props);
        this.state ={}
    }
    render (){
     return {
        <div>
         <div>className="navbar_barContent"
             <Grid container>
              <Grid item xs = {2}>
                 hgtf
              </Grid>
              <Grid item xs = {3}>
                <img className = "navbar.logo"src = {insta_log} width="105px"/>
              </Grid>
              <Grid item xs = {3}>
                 <input text ="text" classname = "navbar_searchBar" placeholder="Search"/>
              </Grid>
              <Grid item xs = {3} style = {{"display" : "flex"}}>
                 <img className ="navbar_img"src = {home} width="25px"/>
                 <img className ="navbar_img"src = {message} width="25px"/>
                 <img className ="navbar_img"src = {find} width="25px" />
                 <img className ="navbar_img"src = {react} width="25px"/>
                 <Avatar src = {pp} style = ({"mainWidth": "25px", "mainhight": 25px})/>
              </Grid>
              <Grid item  xs ={1}> </Grid>
              </Grid>
         </div>
        </div>
     };
}
import { Container } from "@mui/material";
}
export default NavBar;