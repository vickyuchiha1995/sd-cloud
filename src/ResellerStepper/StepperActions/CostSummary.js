import { Container,Box, Divider } from "@mui/material";

//css
import './costsummary.css';
import React, { useState } from "react";

const CostSummary = () => {

    


    return(
        <React.Fragment>
            <Container>
                <Box sx={{m:'30px 15px 15px 15px'}}>
                    <h3>Cost Summary</h3>


                    <Box className="costSummary-container">
                        <Box sx={{m:'30px'}}>
                          
                                    <Box className="cost-contianer">
                                    <Box className="cost-text-style">
                                     <p>Cost</p> <p>&#36;30.99</p>
                                    </Box>
                                    </Box>

                        </Box>

                        <Box sx={{m:'30px'}}>
                          
                          <Box className="cost-contianer">
                          <Box className="cost-text-style">
                           <p>Cost</p> <p>&#36;30.99</p>
                          </Box>
                          </Box>

                        </Box>

                        
                        <Box sx={{m:'30px'}}>
                          
                          <Box className="cost-contianer">
                          <Box className="cost-text-style">
                           <p>Cost</p> <p>&#36;30.99</p>
                          </Box>
                          </Box>

                        </Box>


                        
                        <Box sx={{m:'30px'}}>
                          
                          <Box className="cost-contianer">
                          <Box className="cost-text-style">
                           <p>Cost</p> <p>&#36;30.99</p>
                          </Box>
                          </Box>

                        </Box>


                        <Box sx={{m:'30px'}}>
                          
                         <Divider/>

                        </Box>


                        <Box sx={{m:'30px'}}>
                          
                         <Box className="cost-summary-totalorder">
                            <span>Total Cost</span> <span>&#36;120/mo</span>
                         </Box>
 
                         </Box>




                    </Box>

                </Box>
            </Container>
        </React.Fragment>
    )
}

export default CostSummary;