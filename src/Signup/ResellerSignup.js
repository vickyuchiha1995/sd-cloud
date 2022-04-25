import React, { useState } from "react";
import { Box,Button } from "@mui/material";

//css
import '../Styles/signup.css';

//images
import logo from '../images/logo.png';

//coponents
import ResellerSignupForm from "./ResellerSignupForm";

const ResellerSignup = () => {

    //onclick sign up function

    const ResellerSignup = () => {
        setopenform(true)
    }

    //conditional rendering
    const [openform,setopenform] = useState(false)

    return(
        <React.Fragment>
        {
            (openform) ? <ResellerSignupForm/> :   <Box className="signup-container">
            <Box className="form-container">
                <Box className="signup-logo-container">
                    <img src={logo}></img>
                </Box>
                <Box className="signup-info-container">
                    <h2>Hello, Mariah!</h2>
                    <p> You've been invited to set up <br></br> A reseller account with Altigen Communications.</p>
                    <p>Click below to launch the wizard to set up your <br></br> Reseller account</p>
                </Box>
                <Box className="signup-button-container">
                    <Button color="primary" style={{width:'60%'}} size="large" variant="contained" onClick={ResellerSignup}>sign up</Button>
                </Box>
            </Box>
        </Box>
        }
       
          
        </React.Fragment>
    )
}

export default ResellerSignup;