import React,{useState} from "react";

//mui
import { Container,
     Grid, 
     Box, 
     TextField,
     OutlinedInput,
     InputLabel,
     InputAdornment,
     FormControl,
     IconButton, 
     Button} from "@mui/material";

//css
import '../Styles/signup-form.css';

//images
import logo from '../images/logo.png';
import image1 from '../images/Checklist.jpg'

//mui icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const ResellerSignupForm = () => {


  //regex
  var mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

      

      //form-data hooks
     const [emailData,setemailData] = useState('');
     const [confirmPassword,setconfirmPassword] = useState('')

      //form onchange handler
      const formChangeHandler = (e) => {
        setemailData(e.target.value)
      }
      //create account function
      const createAccount = () => {
        window.location.href="stepper"
      }

    return(
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={12}>
                   

                    
                    {/* spliting in to 2 halfs */}

                    {/* first half */}
                    <Grid item md={7} sm={7} xs={12}>
                    <Box className="illustrator-container">
                    <img src={image1} width="100%" height="auto"></img>
                    </Box>
                    </Grid>

                    {/* second half */}
                    <Grid item md={5} sm={5} xs={12}>
                    <Box className="Reseller-signup-main-form-container">

                    <Box className="Rsmf-container1">
                    <img src={logo} width="90px" height="40px"></img>
                    </Box>

                    <Box className="Rsmf-container2">
                    <h2>Sign Up For a <br></br> Reseller Account</h2>
                    </Box>


                    <Box className="Rsmf-container3">
                    <label>Email</label>
                    <TextField variant="outlined" size="small" 
                    onChange={formChangeHandler}
                     InputProps={{
                        endAdornment: <InputAdornment position="end"><AlternateEmailIcon/></InputAdornment>,
                      }}
                     
                    ></TextField>
                    <label>Password</label>
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
       
                    <label>Confirm password</label>
                   
                  <TextField variant="outlined" size="small" type="password"/>
                    </Box>



                    <Box className="Rsmf-container4">
                    <Button variant="contained" style={{width:"100%"}} size={"large"} onClick={createAccount}>create account</Button>
                    </Box>

                    <Box className="Rsmf-police-container">
                    <p>This site is protected by reCAPTCHA <br></br> <span>Privacy Policy</span> and <span>Terms of Use</span> apply</p>
                    </Box>

                    </Box>
                    </Grid>


                 
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default ResellerSignupForm;