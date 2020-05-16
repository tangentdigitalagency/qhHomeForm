import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
  InputBase,
  RadioGroup,
  Radio,
  Checkbox,
  Link,
  FormControlLabel,
  Select,
} from "@material-ui/core";

import {
  fade,
  //ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import ImageIcon from "@material-ui/icons/Image";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import '../../../../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: "100vh",
    height: "55vh",
    padding: theme.spacing(2, 4, 3),
  },
  lists: {
    width: 300,
  },
  fullLists: {
    Width: "40%",
  },
  listItemText: {
    fontSize: "14px", //Insert your required size
    textAlign: "left",
  },
  listItemText1: {
    fontSize: "14px", //Insert your required size
    textAlign: "center",
    border: "2px solid black",
    background: "black",
    color: "white",
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto",
    height: "10vh"
  },
  listItemText: {
    fontSize: "14px", //Insert your required size
    textAlign: "left"
  },
  listItemText1: {
    fontSize: "14px", //Insert your required size
    textAlign: "center",
    border: "2px solid black",
    background: "black",
    color: "white"
  }
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      width: "100%",
    },
    width: "100%",
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const Drinks = [
  
    'Liquor',
    'Beer',
    'Red Wine',
    'White Wine',
    'Sparkling',
    'Cider',
    'Premix',
    'Extras',
]
const DrinkCognac = [
  'bottle 1',
  'bottle 2',
  'bottle 3',
  'bottle 4',
]
const DrinkBourbon = [
  'bottle 1',
  'bottle 2',
  'bottle 3',
  'bottle 4',
]
 const Shop = props => {
  const classes = useStyles();
  const { className, ...rest } = props;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const hideFirstCart = () => {
    document.getElementById("firstCart").style.display = "none";
    document.getElementById('secondCart').style.display = 'block';
  };
  const showOrderConfirmed = () => {
      document.getElementById('orderConfirmed').style.display = 'block';
      document.getElementById('secondCart').style.display = 'none';
  }
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
    
    >
      <List style={{ marginTop: "12vh" }}>
        {["Home", "Shop", "Map", "Account Settings"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <FiberManualRecordIcon
                  style={{ width: "2vh", color: "black", marginLeft: "2vh" }}
                />
              ) : (
                <FiberManualRecordIcon
                  style={{ width: "2vh", color: "black", marginLeft: "2vh" }}
                />
              )}
            </ListItemIcon>
            <ListItemText
              primary={text}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
      <div
        style={{
          background: "grey",
          position: "absolute",
          width: "100%",
          bottom: "0"
        }}
      >
        <List style={{ bottom: "0" }}>
          {["Sign in", "Create your Account"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listItemText1 }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
  
function getSteps() {
  return ["Order Placed", "Processing", "Shipping", "Delivered"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `November 14`;
    case 1:
      return "November 15";
    case 2:
      return "Est November 15";
    case 3:
      return "Est November 16";
    default:
      return "November 16";
  }
}

  const handleClose = () => {
    setOpen(false);
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const lists = (search) => (
    <div
      className={clsx(classes.lists, {
        [classes.fullLists]: search === "top" || search === "bottom",
      })}
      role="presentation"
      
    >
        
      <List id='orderConfirmed' style={{display:'none'}}>
        <listItem>
          <Grid
            align="center"
            container
            xs={12}
            style={{ marginTop: "8vh", fontSize: "25px" }}
          >
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <listItemText>Order Confirmed</listItemText>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid container xs={10} style={{ marginTop: "2vh" }}>
                <listItemIcon>
                  <ImageIcon style={{ fontSize: "220px",marginLeft:'3vh' }} />
                </listItemIcon>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid container xs={11} style={{ marginTop: "2vh" }}>
                <listItemText style={{ fontSize: "16px", fontWeight: "700",marginLeft:'2vh' }}>
                  Your Order has been Confirmed
                </listItemText>
              </Grid>
              <Grid item xs={0} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={2} />
              <Grid
                item
                xs={8}
                align="center"
                style={{
                  marginTop: "32vh",
                  border: "2px solid grey",
                  borderRadius: "25px",
                  paddingBottom: ".5vh",
                  marginLeft:'0vh'
                }}
              >
                <listItemText style={{ fontSize: "20px", fontWeight: "600"}}>
                  <a onClick={handleOpen} style={{color:'black'}}
                    
                    style={{
                      textDecoration: "none",
                      outline: "none",
                      color: "black"
                    }}
                  >
                    Track Order
                  </a>
                </listItemText>
              </Grid>
              
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <Grid container xs={12}>
                    <Grid item xs={3}>
                      <div className={classes.root}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                          {steps.map((label, index) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                              <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                              </StepContent>
                            </Step>
                          ))}
                        </Stepper>
                        {activeStep === steps.length && (
                          <Paper
                            square
                            elevation={0}
                            className={classes.resetContainer}
                          >
                            <Typography>
                              All steps completed - you&apos;re finished
                            </Typography>
                          </Paper>
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={1}>
                      <div
                        style={{
                          border: "1px solid grey",
                          height: "50vh",
                          width: ".1vh",
                          background: "grey",
                        }}
                      />
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: "2vh" }}>
                      <Typography>Purchased item 1</Typography>
                      <Typography style={{ marginTop: "4vh" }}>
                        $120.00
                      </Typography>
                      <ImageIcon
                        style={{ fontSize: "20vh", marginLeft: "-3vh" }}
                      />
                    </Grid>

                    <Grid item xs={2} />
                    <Grid item xs={3} align="right">
                      <Typography style={{ fontSize: "11px" }}>
                        Order #521458256
                      </Typography>
                      <Typography style={{ fontSize: "11px" }}>
                        Ships to Daniel Russmussans
                      </Typography>
                      <Typography style={{ color: "blue", fontSize: "14px" }}>
                        <Button
                          size="small"
                          style={{ color: "blue", fontSize: "11px" }}
                          className={classes.margin}
                        >
                          Details
                        </Button>
                      </Typography>
                    </Grid>
                    <Grid container xs={12} align="left">
                      <Grid item xs={4} />
                      <Grid
                        container
                        xs={8}
                        justify="space-even"
                        style={{ marginTop: "-14vh" }}
                      >
                        <Grid container xs={4} align="center">
                          <Grid container align="center" xs={10}>
                            <Button
                              onClick={handleOpen}
                              variant="contained"
                              color="secondary"
                              style={{
                                fontSize: "10px",
                                background: "white",
                                color: "black",
                                maxHeight: "40px",
                              }}
                              className={classes.button}
                              startIcon={
                                <StarBorderIcon style={{ color: "blue" }} />
                              }
                            >
                              Write A Review
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid container xs={4} align="center">
                          <Grid container align="center" xs={10}>
                            <Button
                              onClick={handleOpen}
                              variant="contained"
                              color="secondary"
                              style={{
                                fontSize: "10px",
                                background: "white",
                                color: "black",
                                maxHeight: "40px",
                              }}
                              className={classes.button}
                              startIcon={
                                <ReplayIcon style={{ color: "blue" }} />
                              }
                            >
                              Buy Again
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid container xs={4} align="center">
                          <Grid container align="center" xs={10} style={{}}>
                            <Button
                              onClick={handleOpen}
                              variant="contained"
                              color="secondary"
                              style={{
                                fontSize: "10px",
                                background: "white",
                                color: "black",
                                maxHeight: "40px",
                              }}
                              className={classes.button}
                              startIcon={<CloseIcon style={{ color: "red" }} />}
                            >
                              Cancel Order
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Fade>
            </Modal>
              <Grid item xs={2} />
            </Grid>
          </Grid>
        </listItem>
      </List>
    <List id='secondCart' style={{display:'none'}}>
      <listItem>
        <Grid container xs={12}>
          <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ marginTop: "2vh" }}>
              <Typography style={{ fontSize: "24px" }}>Checkout</Typography>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ marginTop: "1vh" }}>
              <Typography style={{ fontSize: "12px", fontWeight: "600" }}>
                Delivering To
              </Typography>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ marginTop: "1vh" }}>
              <BootstrapInput
                id="bootstrap-input"
                style={{ border: "3px solid grey" }}
              />
            </Grid>
            <Grid item xs={3} />
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ marginTop: "1vh" }}>
              <BootstrapInput
                id="bootstrap-input"
                placeholder="Add order instructions"
                style={{ border: "3px solid grey", fontSize: "10px" }}
              />
            </Grid>
            <Grid item xs={3} />
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ marginTop: "4vh" }}>
              <select
                className="form-control"
                placeholder="Select Payment Method"
              >
                <option>cash on Delivery</option>
                <option>1</option>
                <option>2</option>
              </select>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Grid>

        <Grid container xs={12}>
          <Grid item xs={1} />
          <Grid item xs={10} style={{ marginTop: "1vh" }}>
            
      <Card className={classes.root} style={{marginTop:'2vh',height:'6vh'}}>
        <CardContent style={{align:'center'}}>
          <Grid container xs={12}>
            <Grid container xs={12} align="center" style={{marginTop:'-4vh'}}>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <ImageIcon style={{marginTop:'1vh'}} />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} style={{marginTop:'1vh'}}>
                <Typography style={{ fontSize: "10px" }}>
                  [Name/Title]
                </Typography>
                <Typography style={{ fontSize: "10px" }}>
                  [Subcategory]
                </Typography>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={1}>
                <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={1}>
                <DeleteOutlineIcon style={{marginTop:'1vh'}} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card> 
      <Card className={classes.root} style={{marginTop:'2vh',height:'6vh'}}>
        <CardContent>
          <Grid container xs={12}>
            <Grid container xs={12} align="center" style={{marginTop:'-3vh'}}>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <ImageIcon style={{marginTop:'1vh'}} />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} style={{marginTop:'1vh'}}>
                <Typography style={{ fontSize: "10px" }}>
                  [Name/Title]
                </Typography>
                <Typography style={{ fontSize: "10px" }}>
                  [Subcategory]
                </Typography>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={1}>
                <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={1}>
                <DeleteOutlineIcon style={{marginTop:'1vh'}} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
      <Card className={classes.root} style={{marginTop:'2vh'}}>
        <CardContent>
          <Grid container xs={12}>
            <Grid container xs={12} align="center">
            
            <Grid item xs={5} align='left'>
                <Typography style={{fontSize:'13px'}}>Subtotal</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Taxes and Fees</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Delivery</Typography>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={5} align='right'>
              <Typography style={{fontSize:'13px'}}>[Subtotal]</Typography>
              <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Taxes and Fees]</Typography>
              <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Delivery]</Typography>
                  
            </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
      <Card className={classes.root} style={{marginTop:'1vh'}}>
        <CardContent>
          <Grid container xs={12}>
            <Grid container xs={12} align="center">
            
            <Grid item xs={5} align='left'>
                <Typography style={{fontSize:'13px'}}>Order Total</Typography>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={5} align='right'>
              <Typography style={{fontSize:'13px'}}>[Order Total]</Typography>
              
            </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
          </Grid>
          <Grid item xs={3} />
          
          <Grid container xs={12} align='center' style={{marginTop:"3.5vh"}}>
              <Grid item xs={1}/>
              <Grid item xs={10} style={{border:'2px solid grey', borderRadius:'15px', color:'white',background:'grey'}}>
                <Typography><a onClick={showOrderConfirmed} style={{color:'white'}}>PLACE ORDER</a></Typography>
              </Grid>
              <Grid xs={2}/>
            </Grid>
        </Grid>
      </listItem>
    </List>
      <List style={{ marginTop: "2vh", display:'block' }} id='firstCart'>
        <listItem>
          <listItemText
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginLeft: "4vh",
              paddingTop: "-10vh",
            }}
          >
            Your cart
            <br />
          </listItemText>
        </listItem>
        
        <Card className={classes.root} style={{marginTop:'8vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <ImageIcon style={{marginTop:'1vh'}} />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px" }}>
                    [Name/Title]
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    [Subcategory]
                  </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                  <DeleteOutlineIcon style={{marginTop:'1vh'}} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Card className={classes.root} style={{marginTop:'1vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <ImageIcon style={{marginTop:'1vh'}} />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px" }}>
                    [Name/Title]
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    [Subcategory]
                  </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                  <DeleteOutlineIcon style={{marginTop:'1vh'}} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Card className={classes.root} style={{marginTop:'4vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
              
              <Grid item xs={5} align='left'>
                  <Typography style={{fontSize:'13px'}}>Subtotal</Typography>
                  <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Taxes and Fees</Typography>
                  <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Delivery</Typography>
              </Grid>
              <Grid item xs={2}/>
              <Grid item xs={5} align='right'>
                <Typography style={{fontSize:'13px'}}>[Subtotal]</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Taxes and Fees]</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Delivery]</Typography>
                    
              </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Card className={classes.root} style={{marginTop:'1vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
              
              <Grid item xs={5} align='left'>
                  <Typography style={{fontSize:'13px'}}>Order Total</Typography>
              </Grid>
              <Grid item xs={2}/>
              <Grid item xs={5} align='right'>
                <Typography style={{fontSize:'13px'}}>[Order Total]</Typography>
                
              </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Grid container xs={12} align='center' style={{marginTop:'6vh'}}>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Typography style={{border:'2px solid grey', borderRadius:'15px'}}><a style={{color:'black'}}>APPLY PROMO</a></Typography>
                <Typography style={{marginTop:'3vh',border:'2px solid grey',color:'white',background:'grey', borderRadius:'15px'}}><a onClick={hideFirstCart} style={{color:'white'}}>CHECKOUT</a></Typography>
            </Grid>
            <Grid container xs={1}/>
        </Grid>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
       
      <Grid container xs={12} >
        <Grid item xs={12} >
          <Carousel autoplay >
            <div >
              <h3 style={{height: '35vh'}}>1</h3>
            </div>
            <div>
              <h3 style={{height: '35vh'}}>2</h3>
            </div>
            <div>
              <h3 style={{height: '35vh'}}>3</h3>
            </div>
            <div>
              <h3 style={{height: '35vh'}}>4</h3>
            </div>
          </Carousel>
        </Grid>
      </Grid>
    
      <Card>
        <CardContent>
      <Grid container xs={12} align='center'>
        
        <Grid item xs={2}>
          <Typography>Categories:</Typography>
        </Grid>
        <Grid item xs={10}/>
      </Grid>
      <Grid container xs={12} align='left'>
        <Grid item xs={1}/>
        <Grid container xs={10} style={{marginLeft:'-10vh'}} justify='space-around'>
          <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
         
        </Grid>
        <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
        </Grid>
        <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
        </Grid>
        <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
        </Grid>
        <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
        </Grid>
        <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
        </Grid>
        <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
        </Grid>
        <Grid item xs={1}>
        <RadioButtonUncheckedIcon style={{fontSize:'70px',color:'red'}}/>
        </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={1}/>
          <Grid container xs={10} align='center' style={{marginLeft:'-12vh'}} justify='space-around'>
            
             {Drinks.map(drink => {
               return <Grid item xs={1}><Typography>{drink}</Typography></Grid>
             })}
          </Grid>
        </Grid>
      </Grid>
      
      </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Grid container xs={12}>
              <Grid item xs={1}/>
                <Grid container xs={2} align='left' style={{marginLeft:'-6vh'}}>
                  <Grid item xs={6}>
                  <Button variant="contained" style={{background:'red',color:'white',borderRadius:'15px'}}>Category</Button>
                  </Grid>
                  </Grid>
                  <Grid item xs={6} style={{marginLeft:'-10vh'}}>
                  <Button variant="contained" style={{background:'red',color:'white',borderRadius:'15px'}}>Subcategory</Button>
                  </Grid>
            </Grid>
            <Grid item xs={8}/>
          </CardContent>
        </Card>
        <Grid container xs={12} align='center'>
        
        <Grid item xs={2} style={{marginTop:'4vh',marginLeft:'2vh'}}>
          <Typography style={{fontsize:'85px',fontWeight:'700'}}><h2><b>Liquor</b></h2></Typography>
        </Grid>
        <Grid item xs={10}/>
      </Grid>
      <Grid container xs={12} align='left'>
        
        <Grid item xs={2} style={{marginTop:'4vh',marginLeft:'12vh'}}>
          <Typography style={{fontsize:'85px',fontWeight:'700'}}><h5><b>Cognac</b></h5></Typography>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
      <Card>
        <CardContent align='center'>
          <Grid container xs={12}>
            <Grid item xs={1}/>
            <Grid container={10}
  direction="row"
  justify="space-evenly"
  alignItems="center">
              
         
                 {DrinkCognac.map(cognac => {
                  return  <Card>
                  <CardContent align='center'>
                  <img src={require("../../../../assets/beer.jpg")} width="200" />                  <Typography style={{marginTop:'3vh'}}>{cognac}</Typography>
                  <Button variant="contained" style={{background:'red',color:'white',marginTop:'2vh'}}>$56.12</Button>
                  </CardContent>
                </Card>
                
                 })}
                 

            </Grid>
            <Grid item xs={1}/>
          </Grid>
        
      <Grid container xs={12} align='left'>
        
        <Grid item xs={2} style={{marginTop:'8vh',marginLeft:'12vh'}}>
          <Typography style={{fontsize:'85px',fontWeight:'700'}}><h5><b>Bourbon</b></h5></Typography>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
      
          <Grid container xs={12}>
            <Grid item xs={1}/>
            <Grid container={10}
  direction="row"
  justify="space-evenly"
  alignItems="center">
              
         
              {DrinkBourbon.map(bourbon => {
                  return  <Card>
                  <CardContent align='center'>
                  <img src={require("../../../../assets/beer.jpg")} width="200" />                  <Typography style={{marginTop:'3vh'}}>{bourbon}</Typography>
                  <Button variant="contained" style={{background:'red',color:'white',marginTop:'2vh'}}>$56.12</Button>
                  </CardContent>
                </Card>
                
                 })}
              
              
            </Grid>
            <Grid item xs={1}/>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
Shop.propTypes = {
    className: PropTypes.string
  };

export default Shop;