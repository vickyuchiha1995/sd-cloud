import { Box, Step, StepLabel, Stepper, Grid, Divider, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

//images
import logo from '../images/logo.png'
import NextBtn from '../images/right.png';
import illustrator from '../images/reseller.jpg';
//css
import './ResellerStepper.css';


//stepper actions
import AccountDetails from './StepperActions/Accountdetails'
import CostSummary from "./StepperActions/CostSummary";
import ResellerBilling from "./StepperActions/Billinginfo";
import { useSearchParams } from "react-router-dom";

const ResellerStepper = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const steps = getSteps();

    function getSteps() {
        return ["Account details", "Cost summary", "Billing info", "Payment info", "Appearence", "Billing type"];
      }



      const [dynamicGridleft,setdynamicGridleft] = useState(6) 
      const [dynamicGridright,setdynamicGridright] = useState(6)
useEffect(() => {
    if(activeStep == 0){
        setdynamicGridleft(6);
        setdynamicGridright(6);
      }else if(activeStep == 1){
        setdynamicGridleft(6);
        setdynamicGridright(6)
      }else if(activeStep == 2){
        setdynamicGridleft(4);
        setdynamicGridright(8);
      }
},[activeStep])
     

    function getStepContent(step) {
        switch (step) {
          case 0:
            return (
             
                <>
                
               <AccountDetails/>
               <Box sx={{ml:'40px'}}>
               <Button variant="contained"  onClick={() => setActiveStep (activeStep + 1)} width="100px" height="100px">Next</Button>
               </Box>
               
                </>
            );
            case 1: 
         
                return (
                    <>
                    <CostSummary/>
                    <Box sx={{ml:'40px'}}>
                    <Button variant="contained" onClick={() => setActiveStep (activeStep + 1)}>next</Button> &nbsp;
                    <Button variant="contained" onClick={() => setActiveStep (activeStep - 1)}>Back</Button>
                    </Box>
                    </>
                );
                case 2:
                   
                    return (
                        <>
                     
                        <ResellerBilling/>
                        <Box sx={{ml:'40px'}}>
                    <Button variant="contained" onClick={() => setActiveStep (activeStep + 1)}>next</Button> &nbsp;
                    <Button variant="contained" onClick={() => setActiveStep (activeStep - 1)}>Back</Button>
                    </Box>
                        </>
                    );
                    case 3:
                        return (
                            <>
                            step 4
                            <Button onClick={() => setActiveStep (activeStep + 1)}>next</Button>
                            <Button onClick={() => setActiveStep (activeStep - 1)}>Back</Button>
                            </>
                        );
                        case 3:
                            return (
                                <>
                                step 4
                                <Button onClick={() => setActiveStep (activeStep + 1)}>next</Button>
                                <Button onClick={() => setActiveStep (activeStep - 1)}>Back</Button>
                                </>
                            );
          default:
            return(
                <>
                <p>After placing order</p>
                <Button onClick={() => setActiveStep (0)}>Altigen Dashboard</Button>
                </>
            )
        }
      }



    return(
        <React.Fragment>
        
        <Box className="stepper-appbar">
            <Grid container>


                <Grid item md={2} sm={2} xs={2}>
                    <Box className="stepper-logo-contianer">                   
                         <img src={logo} width="100px" height="70px"></img>
                    </Box>
                </Grid>

                <Grid item md={8} sm={8} xs={8}>
                 
                    <Stepper activeStep={activeStep} alternativeLabel style={{width:'100%', height:'100px',display:'flex',alignItems:'center'}}>
                    {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
                    </Stepper>
                    
                </Grid> 
            </Grid>
        </Box>




        {/* main container */}

        <Grid container>

            {/* first half */}
            <Grid item md={dynamicGridleft} sm={dynamicGridleft} xs={6}>
              <Box className="stepper-illustrator-container">
                <img src={illustrator} width="100%" height="auto"></img>
              </Box>
            </Grid> 
            {/* second half */}
            <Grid item md={dynamicGridright} sm={dynamicGridright} xs={6}>

              

        {
            activeStep === steps.length ? <>
                <p>All steps are completed</p>
                <Button>Dashboard</Button>
            </> : getStepContent(activeStep)
        }
                
            

            </Grid>

        </Grid>


              
               
             
      
        </React.Fragment>
    )
}

export default ResellerStepper;