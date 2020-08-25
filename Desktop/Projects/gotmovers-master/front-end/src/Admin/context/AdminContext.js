import React , { createContext, Component } from 'react';
import axios from './axios';
import Geocode from 'react-geocode';
export const AdminContext = createContext();

class AdminContextProvider extends Component {

    state = {
      isAuthenticated : true,
      movers :[],
      commercial:[],
      reservations:[]
    }
    componentDidMount(){
      axios.get('/commercial/customer/getAll').then(res => {
        this.setState({
          commercial:res.data
        })
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
      axios.get('/customers/getAll').then(res => {
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');

        // set response language. Defaults to english.
        Geocode.setLanguage('en');

        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion('es');

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();

        for(let i = 0; i < res.data.length ; i++){

          if(res.data[i].reservation !== null && Object.keys(res.data[i].reservation).length > 0 && res.data[i].reservation.hasOwnProperty('fromLatitude')){
            Geocode.fromLatLng(res.data[i].reservation.fromLatitude, res.data[i].reservation.fromLongitude).then(
              responseFrom => {
                // console.log(response)
                const addressFrom = responseFrom.results[0].formatted_address;
                console.log(addressFrom.split(',')[1]);
                res.data[i].reservation.from = addressFrom.split(',')[1];
                Geocode.fromLatLng(res.data[i].reservation.toLatitude, res.data[i].reservation.toLongitude).then(
                  response => {
                    // console.log(response)
                    const addressTo = response.results[0].formatted_address;
                    console.log(addressTo.split(',')[1]);
                    res.data[i].reservation.to = addressTo.split(',')[1]
                    // if(res.data[i].reservation !== null && Object.keys(res.data.reservation).length > 0){
                    //   console.log(res.data[i])
                      
                    // }
                  },
                  error => {
                    console.error(error);
                  }
                );
              },
              error => {
                console.error(error);
              }
            );
          }

        }
        console.log(res)
        let data = res.data.filter(dataItems => {
         return dataItems.reservation !== null && dataItems.reservation.fromLatitude !== null 
        })
        this.setState({
          reservations:data
        })
      }).catch(error => {
        console.log(error)
      })

      axios.get('/movers/getAll').then(res => {
        this.setState({
          movers:res.data
        })
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
    handleLogin = (userdata) => {

    }
    render() { 
      return (
        <AdminContext.Provider 
          value={{
            ...this.state,
            handleLogin:this.handleLogin
          }}
            >
          {this.props.children}
        </AdminContext.Provider>
      );
    }
}
export default AdminContextProvider;