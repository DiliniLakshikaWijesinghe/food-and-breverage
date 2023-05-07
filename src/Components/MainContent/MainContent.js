import React, { Component } from "react";
import "./MainContent.css";
import Grid from "@mui/material/core/Grid";

class MainContent extends Component{
    constructor (props){
        super (props);
        this.state = { }
    }
    reader (){
        return {
          <div> 
            <Grid container>
              <Grid item xs=(2)>
              jjbj
              </Grid>  
              <Grid item xs=(2)>
              jgh
              </Grid>
              <Grid item xs=(2)>
              hbh
              </Grid>
              <Grid item xs=(2)>
              jhh
              </Grid>
              </Grid>
          </div>
        };
    }
}
export default MainContent;