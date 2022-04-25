import React from "react";

//mui
import { Box, Container, Grid,
    InputAdornment, IconButton, OutlinedInput,
    TextField, InputLabel, MenuItem, FormControl, Select , Button    } from "@mui/material";

//css
import './Accountdetails.css';

//mui icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const AccountDetails = () => {

    //password textfield
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    
    

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
   
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };



    const [age, setAge] = React.useState('');

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };


    return(
        <React.Fragment>
            
           <Container>
                <Grid container>
                    <Grid item md={6} sm={6} xs={6}>
                    <Box sx={{m:'30px 15px 15px 15px'}}>
                        <h3>Account Details</h3>

                        <Box className="Account-details-container">
                        <Box sx={{mt:'30px',mr:'20px',ml:'20px',mb:'10px' }}>
                            <label className="stepper-label-style">Domain name</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                                <Grid container spacing={1}>
                                    <Grid item md={8} sm={8} xs={8}>
                                    <TextField variant="outlined" size="small"> </TextField>  
                                    </Grid>
                                    <Grid item md={4} sm={8} xs={8}>
                                    <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange1}
          displayEmpty
          size="small"
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>.com</em>
          </MenuItem>
          <MenuItem value={10}>.in</MenuItem>
          <MenuItem value={20}>.us</MenuItem>
          <MenuItem value={30}>.co.in</MenuItem>
        </Select>
        
      </FormControl>

                                    </Grid>
                                </Grid>
                          

                            </Box>


           {/* 2nd input field */}

                
           <Box sx={{m: '10px 20px'}}>
                            <label className="stepper-label-style">First name</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                            <TextField fullWidth variant="outlined" size="small"></TextField>
                            </Box>
        


               {/* 2nd input field */}

                
               <Box sx={{m: '10px 20px'}}>
                            <label className="stepper-label-style">last name</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                            <TextField fullWidth variant="outlined" size="small"></TextField>
                            </Box>


  {/* 2nd input field */}

                
  <Box sx={{m: '10px 20px'}}>
                            <label className="stepper-label-style">Phone number</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                            <TextField fullWidth variant="outlined" size="small"></TextField>
                            </Box>




                              {/* 2nd input field */}

                
                              <Box sx={{m: '10px 20px'}}>
                            <label className="stepper-label-style">Company number</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                            <TextField fullWidth variant="outlined" size="small"></TextField>
                            </Box>


                    </Box>



                     
                    



                        </Box>



             
                    </Grid>

                    <Grid item md={6} sm={6} xs={6}>
                    <Box sx={{m:'30px 15px 15px 15px'}}>
                        <h3>Admin Login</h3>

                        <Box className="Admin-login-container">

                        {/* 1st input */}

                        <Box sx={{mt:'30px',mr:'20px',ml:'20px',mb:'10px' }}>
                            <label className="stepper-label-style">User name</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                            <TextField fullWidth variant="outlined" size="small"></TextField>
                            </Box>

                        {/* 2nd input */}

                        <Box sx={{m: '10px 20px'}}>
                            <label className="stepper-label-style">Password</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                            <FormControl sx={{ width: '100%' }} size="small" variant="outlined">
        
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
       
        />
    
  </FormControl>
     
                            </Box>

                        {/* 3rd input */}

                          <Box sx={{m: '10px 20px'}}>
                            <label className="stepper-label-style">Confirm password</label>
                            </Box>
                            <Box sx={{m: '10px 20px'}}>
                            <TextField type="password" fullWidth variant="outlined" size="small"></TextField>
                            </Box>

                        <Box className="stepper-account-details-btncontainer">
                            <Button variant="contained">Confirm</Button>
                        </Box>


                        </Box>
                    </Box>
                    </Grid>
                </Grid>
                </Container>
         
        </React.Fragment>
    )   
}

export default AccountDetails;