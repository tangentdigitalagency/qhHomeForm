import MaterialTable from 'material-table';
import React from 'react'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Fade,
  Modal,
  Backdrop,
  Button,

} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {
  Check,
  ChevronRight,
  SaveAlt,
  FilterList,
  FirstPage,
  LastPage,
  ChevronLeft,
  Search,
  Remove,
  ArrowDownward,
  AddBox,
  ViewColumn,
  Clear,
  Edit,
  Delete


} from '@material-ui/icons';


class AdminUserRequests extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      rowData: '',

      showModal: false,
      Orders: [
        /*                {
                    id: '1',
                    startDate: '22 Nov ',
                    address: "381 D Wapda Town",
                    email: "xyz@gmail.com",
                    lastName: "waishahid",
                    phoneNumber: "JUST CBD",
                    businessType: 'WaizXXYY',
                    businessName: 'JUST XYZ',
                    firstName: "Shady",
                    city: 'hye hy yah',
                    postalCode: 'B G',
                    website: 'Accepted',
                    amount: '23899.13',
                    paidby: 'Cash',
                    action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                                    onClick={this.handleOpenModal}>Details</Button>
                },
                {
                    id: '3',
                    startDate: '29 Nov ',
                    address: "383 D Wapda Town",
                    email: "xyz@gmail.com",
                    lastName: "aizshahid",
                    phoneNumber: "JUST CBD",
                    businessType: 'WaizXXZ',
                    businessName: 'CD AD AN',
                    firstName: "ShadyX",
                    city: 'hyf hy yah',
                    postalCode: 'B G',
                    website: 'Accepted',
                    amount: '28499.13',
                    paidby: 'Cash',
                    action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                                    onClick={this.handleOpenModal}>Details</Button>
                },
                {
                    id: '4',
                    startDate: '30 Nov ',
                    address: "384 D Wapda Town",
                    email: "xyz@gmail.com",
                    lastName: "waizsahid",
                    phoneNumber: "JUST CBD",
                    businessType: 'WaizXXE',
                    businessName: 'CBD',
                    firstName: "ShadyNB",
                    city: 'hyg hy yah',
                    postalCode: 'B G',
                    website: 'Accepted',
                    amount: '28929.13',
                    paidby: 'Cash',
                    action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                                    onClick={this.handleOpenModal}>Details</Button>
                },
                {
                    id: '5',
                    startDate: '22 Dec ',
                    address: "385 D Wapda Town",
                    email: "xyz@gmail.com",
                    lastName: "waizshhid",
                    phoneNumber: "JUST CBD",
                    businessType: 'WaizZZD',
                    businessName: 'DD CC NN',
                    firstName: "ShadyMA",
                    city: 'hyh hy yah',
                    postalCode: 'B G',
                    website: 'Accepted',
                    amount: '28991.13',
                    paidby: 'Cash',
                    action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                                    onClick={this.handleOpenModal}>Details</Button>
                },
                {
                    id: '6',
                    startDate: '23 Dec ',
                    address: "386 D Wapda Town",
                    email: "xyz@gmail.com",
                    lastName: "waizshahd",
                    phoneNumber: "JUST CBD",
                    businessType: 'WaizYYB',
                    businessName: 'JUST BDA',
                    firstName: "Exe",
                    city: 'hyi hy yah',
                    postalCode: 'B G',
                    website: 'Accepted',
                    amount: '2899.113',
                    paidby: 'Cash',
                    action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                                    onClick={this.handleOpenModal}>Details</Button>
                },
                {
                    id: '7',
                    startDate: '24 Dec ',
                    address: "387 D Wapda Town",
                    email: "xyz@gmail.com",
                    lastName: "waizshahi",
                    phoneNumber: "JUST CBD",
                    businessType: 'WaizNNC',
                    businessName: 'Name',
                    firstName: "Morris",
                    city: 'hyj hy yah',
                    postalCode: 'B G',
                    website: 'Accepted',
                    amount: '28990.13',
                    paidby: 'Cash',
                    action: <Button style={{fontFamily: "calibri", backgroundColor: "#dddddd"}}
                                    onClick={this.handleOpenModal}>Details</Button>
                },*/

      ],
      selectedRequest:{}
    };

  }


    getUserRequests = () => {
      axios.get('/admin/UserRequests')
        .then(
          response => {
            var newOrder = [];
            response.data.map(order => {
              order.detailButton = <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }}
                onClick={this.handleOpenModal}>Details</Button>
              newOrder.push(order)
            })
            this.setState({ Orders: newOrder })
          }
        )
        .catch(err => console.log(err))
    }


  approveRequest = () => {
    axios.post('/admin/approveRequest', 'test')
      .then(res => 'test')
      .catch(err => console.log(err))
  }

    handleOpenModal = () => {
      this.setState({
        showModal: true,
      });
      this.approveRequest()
    }
    handleCloseModal = () => {
      this.setState({ showModal: false });
    }

    onRowClick = (e, rowData) => {
      this.setState({ rowData: rowData })
    }

    componentDidMount = () => {
      this.getUserRequests();
    }

    render() {

      return (
        <Grid
          container
          spacing={2}
          style={{
            padding: '3vh', backgroundColor: 'white',
            height: '90vh'
          }}
          xs={12}
        >
          <Grid
            item
            md={12}
            xs={12}
          >
            <Card>


              <MaterialTable
                actions={[

                  rowData => ({
                    icon: Delete,
                    tooltip: 'Delete User',
                    // eslint-disable-next-line no-restricted-globals
                    onClick: (event, rowData) => {
                      let newData = [];
                      this.state.Orders.map((order) => {
                        //console.log(order)
                        if (rowData.id != order.id) {
                          newData.push(order)
                        }
                        // console.log(rowData.id)
                        //if (order.name != value) newData.push(tableRow);
                      });
                      this.setState({ Orders: newData })
                      //setTableLanguages(newData);
                    },

                  })
                ]}
                columns={[
                  {
                    title: 'Name', field: 'firstName',
                    render: rowData => rowData.firstName + ' ' + rowData.lastName,
                    cellStyle: {

                      fontFamily: 'calibri',

                    },

                  },
                  {
                    title: 'Phone Number', field: 'phoneNumber',
                    cellStyle: {
                      fontFamily: 'calibri',
                    },
                  },
                  // {
                  //     title: 'Email', field: 'email',
                  //     cellStyle: {
                  //         fontFamily: "calibri",
                  //     },
                  // },
                  // {
                  //     title: 'Business Type', field: 'businessType',
                  //     cellStyle: {
                  //         fontFamily: "calibri",
                  //     },
                  // },
                  // {
                  //     title: 'Business Name', field: 'businessName',
                  //     cellStyle: {
                  //         fontFamily: "calibri",
                  //     },
                  // },

                  {
                    title: 'Address', field: 'address',
                    cellStyle: {
                      fontFamily: 'calibri',
                    },

                  },
                  {
                    title: 'Details', field: 'detailButton',
                    cellStyle: {
                      fontFamily: 'calibri',
                    },
                  },

                ]}
                data={this.state.Orders}

                icons={{
                  Check: Check,
                  DetailPanel: ChevronRight,
                  Export: SaveAlt,
                  Filter: FilterList,
                  FirstPage: FirstPage,
                  LastPage: LastPage,
                  NextPage: ChevronRight,
                  PreviousPage: ChevronLeft,
                  Search: Search,
                  ThirdStateCheck: Remove,
                  SortArrow: ArrowDownward,
                  Add: AddBox,
                  ViewColumn: ViewColumn,
                  Clear: Clear,
                  ResetSearch: Clear,
                  Edit: Edit,
                  Delete: Delete
                }}
                onRowClick={this.onRowClick}
                options={{
                  headerStyle: {
                    backgroundColor: '#dddddd',
                    color: '#black'
                  }
                }}
                options={{
                  actionsColumnIndex: -1,


                  paging: false,


                }}
                title=""
              />

            </Card>
            <Modal
              aria-describedby="transition-modal-description"
              aria-labelledby="transition-modal-title"
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              className="Modal"
              closeAfterTransition
              onClose={this.handleCloseModal}
              open={this.state.showModal}
            >
              <Fade in={this.state.showModal}>
                <div
                  className="Paper"
                  style={{ marginLeft: '10vh', marginTop: '10vh', marginRight: '10vh' }}
                >

                  <Card>
                    <CardHeader
                      style={{ backgroundColor: '#dddddd' }}
                      title="User's Request Details"
                      variant="h1"
                    />
                    <Divider />
                    <CardContent>
                      <Grid
                        container
                        md={12}
                        spacing={2}
                        xs={12}
                      >
                        <Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.firstName}
                            id="search"
                            label="First Name"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.lastName}
                            id="lastName"
                            label="Last Name"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.phoneNumber}
                            id="phoneNumber"
                            label="Phone Number"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.email}
                            id="email"
                            label="Email"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.businessType}
                            id="email"
                            label="Business Type"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <  Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.businessName}
                            id="email"
                            label="Business Name"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <  Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.address}
                            id="email"
                            label="Address"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>

                        <  Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.city}
                            id="email"
                            label="City"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <  Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.postalCode}
                            id="email"
                            label="Postal Code"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                        <  Grid
                          item
                          md={4}
                          xs={4}
                        >
                          <TextField
                            defaultValue={this.state.rowData.website}
                            id="email"
                            label="Website"
                            style={{ width: '25ch', }}
                            type="search"
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        md={12}
                        spacing={4}
                        xs={12}
                      >
                        <Grid
                          item
                          xs={6}
                        >
                          <Button
                            style={{
                              fontFamily: 'calibri',
                              backgroundColor: '#dddddd',
                              marginLeft: '75vh'
                            }}
                            onClick={this.approveRequest}
                          > Approve</Button>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                        >
                          <Button
                            style={{
                              fontFamily: 'calibri',
                              backgroundColor: '#dddddd'
                            }}
                            onClick={this.rejectRequest}
                          > Deny</Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>


                </div>
              </Fade>
            </Modal>


          </Grid>


        </Grid>
      )
    }
}

export default AdminUserRequests;
