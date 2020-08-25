import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Grid,Button, Typography} from '@material-ui/core';
import { Link as RouterLink, withRouter , Redirect} from 'react-router-dom';
import { MoverContext } from '../../contexts/MoverContext'
import validate from 'validate.js';

const schema = {
  loginEmail: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  loginPassword: {
    presence: { allowEmpty: false, message: 'is required' },
  },
} 
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(2),
      width: '35ch',
    },
    '& p':{
      marginTop : '2vh'
    }
    ,'& input':{
      marginTop: '2vh'
    }
   
  },
}));

export default function MoverPanel() {
  const classes = useStyles();


  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const hasError = (field) =>{
   return  formState.touched[field] && formState.errors[field] ? true : false;
  }
  return (
   <MoverContext>{(context) => {
   return (!context.isAuthenticated ? (<Grid container xs={12} >
    <Grid style={{padding: '0vh 9vh'}} item xs={8}>
    <img 
    src="https://ecobox.co.za/wp-content/uploads/2017/10/find-choose-mover-south-africa.jpg"
    alt="new"
    style={{height:"88vh",width:"100%"}}
    />
    </Grid>
<Grid container xs={4} justify='center' spacing={2} >
<form className={classes.root} style={{marginTop:"10vh"}}>
<Grid item xs={7}>
    <Typography
      className={classes.title}
      variant="h2"
    >
      Mover Sign In
    </Typography>
      <TextField
        name="loginEmail"
        fullWidth
        label="Email Or Phone"
        value={formState.values.loginEmail || ''}
        onChange={handleChange}
        error={hasError('loginEmail')}
        helperText={
          hasError('loginEmail') ? formState.errors.loginEmail[0] : null
        }
      />
     </Grid>
     <Grid item xs={7} >
      <TextField
      type="password"
        name="loginPassword"
        label="Password"
        fullWidth
        value={formState.values.loginPassword || ''}
        onChange={handleChange}
        error={hasError('loginPassword')}
        helperText={
          hasError('loginPassword') ? formState.errors.loginPassword[0] : null
        }
      />
     </Grid>
     <Grid item xs={12}>
     <Button disabled={!formState.isValid} onClick={() => context.handleLogin(formState.values)} variant="contained" color="primary" component={RouterLink}  to="/admin/dashboard" fullWidth style={{marginTop:"6vh",marginLeft:"0vh"}}>
      Login
    </Button>
    <p>Don't have account <RouterLink to="/mover/signup">Please Signup</RouterLink></p>
     </Grid>
     </form>
    </Grid>
   
   </Grid>) : <Redirect to="/mover/dashboard" />)
   }}
   </MoverContext>
     
  );
}
