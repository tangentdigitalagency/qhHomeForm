import React , { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from './axios';
import Geocode from 'react-geocode';

export const MoverContext = createContext();

class MoverContextProvider extends Component {

    state = {
        isAuthenticated : true,
        reservations:[],
        errorMsg:'',
        showErroModal : true,
        loader:false
    }

    componentDidMount(){
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
    
              console.log(res.data[i])

              if(res.data[i].reservation !== null && Object.keys(res.data[i].reservation).length > 0 && res.data[i].reservation.hasOwnProperty('fromLatitude')){
                
                Geocode.fromLatLng(res.data[i].reservation.fromLatitude, res.data[i].reservation.fromLongitude).then(
                  responseFrom => {
                    // console.log(response)
                    const addressFrom = responseFrom.results[0].formatted_address;
                  //   console.log(addressFrom.split(',')[1]);
                    res.data[i].reservation.from = addressFrom.split(',')[1];
                    Geocode.fromLatLng(res.data[i].reservation.toLatitude, res.data[i].reservation.toLongitude).then(
                      response => {
                        // console.log(response)
                        const addressTo = response.results[0].formatted_address;
                      //   console.log(addressTo.split(',')[1]);
                        res.data[i].reservation.to = addressTo.split(',')[1];
  
                        axios.get('/jobs/getAll').then(jobs=>{
                            console.log(jobs.data, res.data[i].jobs)
                          res.data[i].jobs = jobs.data.filter(job => job.id === res.data[i].jobs[0].id)
                          // this.setState({
                          //   reservations:res.data
                          // })
                        }).catch(err=>{
                            console.error(err)
                        })
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

            // this.setState({
            //   reservations:res.data
            // })
            console.log(res.data)
            let data = res.data.filter(dataItems => {
              return dataItems.reservation !== null && dataItems.reservation.fromLatitude !== null 
             })
             this.setState({
               reservations:data
             })
          }).catch(error => {
            console.log(error)
          })
    
    }
    
    handleSignUp = (userdata) =>{
        
    }

    handleLogin = (userdata) => {

    }

    acceptJobHandler = async (id) => {
      this.setState({
        loader : true
      })
        let data = {
            moverId : '145',
            status : 'assigned'
        }
        
        let jobsAssignRes = await axios.put(`/jobs/updateJobStatus/${id}`, data )
        if(jobsAssignRes.status === 200){
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
                    //   console.log(addressFrom.split(',')[1]);
                      res.data[i].reservation.from = addressFrom.split(',')[1];
                      Geocode.fromLatLng(res.data[i].reservation.toLatitude, res.data[i].reservation.toLongitude).then(
                        response => {
                          // console.log(response)
                          const addressTo = response.results[0].formatted_address;
                        //   console.log(addressTo.split(',')[1]);
                          res.data[i].reservation.to = addressTo.split(',')[1]
                          axios.get('/jobs/getAll').then(jobs=>{
                            console.log(jobs.data, res.data[i].jobs)
                          res.data[i].jobs = jobs.data.filter(job => job.id === res.data[i].jobs[0].id)
                   // console.log(res)
                        console.log(res.data)
                        // this.setState({
                        //   reservations:res.data,
                        //   loader : false, 
                        //   showErroModal:false,
                        // })
                        }).catch(err=>{
                            console.error(err)
                            this.setState({
                              errorMsg:err.message,
                              loader : false, 
                              showErroModal:true,
                            })
                        })
                        },
                        error => {
                          console.error(error);
                          this.setState({
                            errorMsg:error.message,
                            loader : false, 
                            showErroModal:true,
                          })
                        }
                      );
                    },
                    error => {
                      console.error(error);
                      this.setState({
                        errorMsg:error.message,
                        loader : false, 
                        showErroModal:true,
                      })
                    }
                  );
                }
                }

                // // console.log(res)
                let data = res.data.filter(dataItems => {
                  return dataItems.reservation !== null && dataItems.reservation.fromLatitude !== null 
                 })
                 this.setState({
                   reservations:data,
                   loader : false, 
                   showErroModal:false,
                 })
                //   console.log(res.data)
                //     this.setState({
                //       reservations:res.data,
                //       loader : false, 
                //       showErroModal:false,
                //     })
              }).catch(error => {
                console.log(error)
                this.setState({
                  errorMsg:error.message,
                  loader : false, 
                  showErroModal:true,
                })
              })
        }

    }

    handleCloseModal = () => {
      this.setState({
        showErroModal:false
      })
    }

    render() { 
        return (
            <MoverContext.Provider 
                value={{
                    ...this.state,
                    handleSignUp: this.handleSignUp,
                    handleLogin : this.handleLogin,
                    acceptJobHandler : this.acceptJobHandler,
                    handleCloseModal : this.handleCloseModal
                    }}>
                {this.props.children}
            </MoverContext.Provider>
         );
    }
}
export default withRouter(MoverContextProvider);
