import React, { Component } from "react";
import inst_image from '../../images/images/9364675fb26a.svg';
import Grid from '@material-ui/core/Grid';
// import inst_logo from '../../images/images/instalogo.png';
import fb from '../../images/images/fb.png';
import appstore from '../../images/images/app.png';
import playstore from '../../images/images/play.png';


class LoginPage extends Component {
    // constructo(props){
    //     super (props);
    //     this.state={
    //         islogin : true
    //     }
    // }

    changelogin = () => {
        if (this.state.islogin)
            this.setState({ islogin: false });
        else
            this.setState({ islogin: true });

    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        fasfa
                    </Grid>
                    <Grid item xs={6}>
                        <div className="LoginPage_main">
                            <div>
                                <img src={inst_image} width="454px" alt="Instagram" />
                            </div>
                            <div>
                                <div className="LoginPage-rightcomponent">
                                    {/* <img className="LoginPage_Logo" src={inst_logo} alt="Logo" /> */}
                                    <div className="LoginPage_signin">
                                        <input className="LoginPage_text" type="text" placeholder="Phone number, username, or email" />
                                        <input className="LoginPage_text" type="password" placeholder="Password" />
                                        <button className="Login_button">Sign in</button>
                                        <div className="Login_ordiv">
                                            <div className="Login_dividor"></div>
                                            <div className="Login_or">OR</div>
                                            <div className="Login_dividor"></div>
                                        </div>
                                        <div className="Login_fb">
                                            <img src={fb} width="15px" style={{ marginRight: "5px" }} alt="Facebook" />
                                            Log in with Facebook
                                        </div>
                                        <div className="Login_forget">Forgot Password?</div>
                                    </div>
                                </div>
                            </div>
                            <div className="LoginPage_signupoption">
                                <div className="LoginPage_signin">
                                    Don't have an account?
                                    {/* <span style={{"fontWeight": "bold", "color": "white"}}>signin</span> */}
                                </div>
                                <div className="LoginPage_signup">
                                    Have an account?
                                    {/* <span style={{"fontWeight": "bold", "color": "white"}}>signup</span> */}
                                </div>
                                <div>
                                    <div className="loginpage"></div>
                                    <img src={appstore} width="136px" alt="App Store" />
                                    <img src={playstore} width="136px" alt="Play Store" />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        fasfa
                    </Grid>
                </Grid>
            </div>
        );

    }

}
export default LoginPage; 