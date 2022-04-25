import { Container, Grid, Box } from "@mui/material";
import React from "react";

//css
import './billing.css';

const ResellerBilling = () => {
    return(
        <React.Fragment>
            <Container>
            <Grid container>
            <Grid item md={7} sm={7} xs={12}>
            <Box sx={{m:'30px 15px 15px 15px'}}>
            <h3>Billing Info</h3>

            <Box className="reseller-billing-container"> 
            <Box sx={{m:'20px'}}>
            <p></p>
            </Box>
            </Box>
            </Box>

            <Box sx={{m:'30px 15px 15px 15px'}}>
            <h3>Billing Address</h3>

            <Box className="reseller-billing-container"> 

            </Box>
            </Box>
            </Grid>
            <Grid item md={5} sm={5} xs={12}>
            <Box sx={{m:'30px 15px 15px 15px'}}>
            <h3>Order summary</h3>

            <Box className="reseller-order-summary">

            </Box>
            </Box>
            </Grid>
            </Grid>
            </Container>
        </React.Fragment>
    )
}

export default ResellerBilling;