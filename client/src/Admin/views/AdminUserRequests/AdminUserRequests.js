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


} from "@material-ui/icons";


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

            ]
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

    handleOpenModal = () => {
        this.setState({ showModal: true });
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
            <Grid container spacing={2} xs={12} style={{
                padding: '3vh', backgroundColor: "white",
                height: "90vh"
            }}>
                <Grid item xs={12} md={12}>
                    <Card>


                        <MaterialTable
                            title=""
                            onRowClick={this.onRowClick}
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

                            columns={[
                                {
                                    title: 'Name', field: 'firstName',
                                    render: rowData => rowData.firstName + ' ' + rowData.lastName,
                                    cellStyle: {

                                        fontFamily: "calibri",

                                    },

                                },
                                {
                                    title: 'Phone Number', field: 'phoneNumber',
                                    cellStyle: {
                                        fontFamily: "calibri",
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
                                        fontFamily: "calibri",
                                    },

                                },
                                {
                                    title: 'Details', field: 'detailButton',
                                    cellStyle: {
                                        fontFamily: "calibri",
                                    },
                                },

                            ]}
                            data={this.state.Orders}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#dddddd',
                                    color: '#black'
                                }
                            }}
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
                            options={{
                                actionsColumnIndex: -1,


                                paging: false,


                            }}
                        />

                    </Card>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="Modal"
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                        open={this.state.showModal}
                        onClose={this.handleCloseModal}
                    >
                        <Fade in={this.state.showModal}>
                            <div className="Paper" style={{ marginLeft: "10vh", marginTop: "10vh", marginRight: "10vh" }}>

                                <Card>
                                    <CardHeader title="User's Request Details" variant="h1"
                                        style={{ backgroundColor: "#dddddd" }} />
                                    <Divider />
                                    <CardContent>
                                        <Grid container spacing={2} xs={12} md={12}>
                                            <Grid item xs={4} md={4}>
                                                <TextField id="search" label="First Name"
                                                    defaultValue={this.state.rowData.firstName} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <Grid item xs={4} md={4}>
                                                <TextField id="lastName" label="Last Name"
                                                    defaultValue={this.state.rowData.lastName} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <Grid item xs={4} md={4}>
                                                <TextField id="phoneNumber" label="Phone Number"
                                                    defaultValue={this.state.rowData.phoneNumber} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <Grid item xs={4} md={4}>
                                                <TextField id="email" label="Email"
                                                    defaultValue={this.state.rowData.email} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <Grid item xs={4} md={4}>
                                                <TextField id="email" label="Business Type"
                                                    defaultValue={this.state.rowData.businessType} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <  Grid item xs={4} md={4}>
                                                <TextField id="email" label="Business Name"
                                                    defaultValue={this.state.rowData.businessName} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <  Grid item xs={4} md={4}>
                                                <TextField id="email" label="Address"
                                                    defaultValue={this.state.rowData.address} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>

                                            <  Grid item xs={4} md={4}>
                                                <TextField id="email" label="City"
                                                    defaultValue={this.state.rowData.city} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <  Grid item xs={4} md={4}>
                                                <TextField id="email" label="Postal Code"
                                                    defaultValue={this.state.rowData.postalCode} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                            <  Grid item xs={4} md={4}>
                                                <TextField id="email" label="Website"
                                                    defaultValue={this.state.rowData.website} type="search"
                                                    style={{ width: "25ch", }} />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={4} xs={12} md={12}>
                                            <Grid item xs={6}>
                                                <Button style={{
                                                    fontFamily: "calibri",
                                                    backgroundColor: "#dddddd",
                                                    marginLeft: "75vh"
                                                }}> Approve</Button>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Button style={{
                                                    fontFamily: "calibri",
                                                    backgroundColor: "#dddddd"
                                                }}> Deny</Button>
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