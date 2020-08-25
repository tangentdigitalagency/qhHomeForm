import React, { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';
import Geocode from 'react-geocode';
import axios from './axios';

export const StepperDataContext = createContext();

class StepperDataContextProvider extends Component {
  state = {
    loader : false,
    showErroModal : false,
    errorMsg : '',
    OpenTvStand: false,
    nameTvStand: '',
    shareholders: [{ name: '' }],

    cities:[],
    livingRoom: '',
    diningRoom: '',
    bedRoom: '',
    misc: '',
    kitchen: '',
    itemsValid:true,

    customerId: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',

    from: '',
    to: '',
    fromLatitude: '',
    fromLongitude: '',
    toLatitude: '',
    toLongitude: '',
    date: new Date(),
    time:new Date(),
    orderId : '',

    totalPrice: '',

    bookNowFrom: '',
    bookNowTo: '',
    bookNowdate: '',

    moveFrom: '',
    moveFromElevator: false,
    moveToElevator: false,
    moveTo: '',
    loadingDock: '',
    doorRemoval: '',

    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactBusinessName: '',
    contactDate: '',

    specificationMessagae: '',

    title: 'TV',

    OpenArmchair: false,
    nameArmchair: '',

    OpenFuton: false,
    nameFuton: '',

    OpenTV: false,
    nameTV: '',

    OpenSofa: false,
    nameSofa: '',

    OpenLoveSeat: false,
    nameLoveSeat: '',

    OpenSofaLShape: false,
    nameSofaLShape: '',

    OpenOttoman: false,
    nameOttoman: '',

    OpenReclinableChairs: false,
    nameReclinableChairs: '',

    OpenCornerTables: false,
    nameCornerTables: '',

    OpenCoffeeTables: false,
    nameCoffeeTables: '',

    OpenDecorativeTables: false,
    nameDecorativeTables: '',

    OpenDiningRoomTables: false,
    nameDiningRoomTables: '',

    OpenDiningRoomChairs: false,
    nameDiningRoomChairs: '',

    OpenBeds: false,
    nameBeds: '',

    OpenNightstandTables: false,
    nameNightstandTables: '',

    OpenChest: false,
    nameChest: '',

    OpenDresser: false,
    nameDresser: '',

    OpenFrames: false,
    nameFrames: '',

    OpenAreaRugs: false,
    nameAreaRugs: '',

    OpenLamps: false,
    nameLamps: '',

    OpenCeilingFans: false,
    nameCeilingFans: '',

    OpenDesks: false,
    nameDesks: '',

    OpenWindowAirConditionerUnits: false,
    nameWindowAirConditionerUnits: '',

    OpenWindowPackAirConditionerUnits: false,
    nameDresser: '',

    OpenInverterUnits: false,
    nameInverterUnits: '',

    OpenInverterUnitCompressors: false,
    nameInverterUnitCompressors: '',

    OpenBoxes: false,
    nameBoxes: '',

    OpenPoolTable: false,
    namePoolTable: '',

    OpenPingPongTable: false,
    namePingPongTable: '',

    OpenOutdoorBBQGrill: false,
    nameOutdoorBBQGrill: '',

    OpenFishTanks: false,
    nameFishTanks: '',

    OpenDogHouses: false,
    nameDogHouses: '',

    OpenOfficeChairs: false,
    nameOfficeChairs: '',

    OpenFlowerPots: false,
    nameFlowerPots: '',

    OpenGYMEquipments: false,
    nameGYMEquipments: '',

    OpenBenches: false,
    nameBenches: '',

    OpenBookCases: false,
    nameBookCases: '',

    OpenSculptures: false,
    nameSculptures: '',

    OpenMirrors: false,
    nameMirrors: '',

    OpenDesktopComputers: false,
    nameDesktopComputers: '',

    OpenGasTanks: false,
    nameGasTanks: '',

    OpenTVWallMounts: false,
    nameTVWallMounts: '',

    OpenRefrigerators: false,
    nameRefrigerators: '',

    OpenStoves: false,
    nameStoves: '',

    OpenDryers: false,
    nameDryers: '',

    OpenWashers: false,
    nameWashers: '',

    OpenDryerAndWasherCombos: false,
    nameDryerAndWasherCombos: '',

    OpenMicrowaveOvens: false,
    nameMicrowaveOvens: '',

    OpenDishwashers: false,
    nameDishwashers: '',

    OpenWineCoolers: false,
    nameWineCoolers: '',

    OpenToasterOvens: false,
    nameToasterOvens: '',

    OpenIndoorGrills: false,
    nameIndoorGrills: '',

    OpenCoffeeMachines: false,
    nameCoffeeMachines: '',

    OpenMiniFridges: false,
    nameMiniFridges: '',

    OpenChestFreezers: false,
    nameChestFreezers: '',

    openModel: false,
    openModelDining: false,
    openModelBedroom: false,
    openModelKitchen: false,
    openModelMiscellaneous: false,
    ListOfLivingRoom: [
      {
        isSelected: false,
        item: 'Tv_Stand',
        sm: 'Please include all TV stands in your move'
      },
      {
        isSelected: false,
        item: 'Arm_Decorative_Chair',
        sm:
          'Please include patio and all Armchair or decorative chairs in your move'
      },
      {
        isSelected: false,
        item: 'Futon',
        sm: 'Please include any futon in your move'
      },
      {
        isSelected: false,
        item: 'TV',
        sm: 'Please include all TV in your move'
      },
      { isSelected: false, item: 'Sofa', sm: '' },
      { isSelected: false, item: 'Love_Seat', sm: '' },
      { isSelected: false, item: 'Sofa_L_Shape', sm: '' },
      { isSelected: false, item: 'Ottoman', sm: '' },
      { isSelected: false, item: 'Reclinable_Chairs', sm: '' },
      { isSelected: false, item: 'Corner_Tables', sm: '' },
      { isSelected: false, item: 'Coffee_Tables', sm: '' },
      {
        isSelected: false,
        item: 'Decorative_Tables',
        sm: 'Please include all Decorative Tables in your move'
      }
    ],
    ListOfDiningRoom: [
      {
        isSelected: false,
        item: 'Dining_Room_Tables',
        sm: 'Please select the table surface, (wood, glass, metal, or marble )'
      },
      { isSelected: false, item: 'Dining_Room_Chairs', sm: '' },
      {
        isSelected: false,
        item: 'China_Cabinets',
        sm: 'Size - Small, Medium, or Large'
      }
    ],
    ListOfBedrooms: [
      { isSelected: false, item: 'Beds', sm: '' },
      {
        isSelected: false,
        item: 'Nightstand_Tables',
        sm: 'Please indicate # of drawers 0,1,2, 3 or 4'
      },
      {
        isSelected: false,
        item: 'Chest',
        sm: 'Please indicate # of drawers from 0 to 12'
      },
      {
        isSelected: false,
        item: 'Dresser',
        sm: 'Please indicate # of drawers Dresser with mirror or without'
      }
    ],
    ListOfKitchen: [
      {
        isSelected: false,
        item: 'Refrigerators',
        sm: 'Side by Side or Regular'
      },
      {
        isSelected: false,
        item: 'Stoves',
        sm: 'Please indicate Stove with oven or cooktop stove'
      },
      { isSelected: false, item: 'Dryers', sm: '' },
      { isSelected: false, item: 'Washers', sm: '' },
      { isSelected: false, item: 'Dryer_And_Washer_combos', sm: '' },
      { isSelected: false, item: 'Microwave_Ovens', sm: '' },
      { isSelected: false, item: 'Dishwashers', sm: '' },
      { isSelected: false, item: 'Wine_Coolers', sm: '' },
      { isSelected: false, item: 'Toaster_Ovens', sm: '' },
      { isSelected: false, item: 'Indoor_Grills', sm: '' },
      { isSelected: false, item: 'Coffee_Machines', sm: '' },
      { isSelected: false, item: 'Mini_Fridges', sm: '' },
      {
        isSelected: false,
        item: 'Chest_Freezers',
        sm: 'Size - Small, Medium, or Large'
      }
    ],
    ListOfMiscellaneous: [
      {
        isSelected: false,
        item: 'Frames',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Area_Rugs',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Lamps',
        sm: 'Please include all lamps, indicate if it’s a stand or table lamp'
      },
      { isSelected: false, item: 'Ceiling_Fans', sm: '' },
      {
        isSelected: false,
        item: 'Desks',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'Window_Air_Conditioner_Units', sm: '' },
      { isSelected: false, item: 'Wall_Pack_Air_Conditioner_Units', sm: '' },
      { isSelected: false, item: 'Inverter_Units', sm: '' },
      { isSelected: false, item: 'Inverter_Unit_Compressors', sm: '' },
      { isSelected: false, item: 'Boxes', sm: '' },
      { isSelected: false, item: 'Pool_Tables', sm: '' },
      { isSelected: false, item: 'Ping_Pong_Tables', sm: '' },
      { isSelected: false, item: 'Outdoor_BBQ_Grills', sm: '' },
      {
        isSelected: false,
        item: 'Fish_Tanks',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Dog_Houses',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'Office_Chairs', sm: '' },
      {
        isSelected: false,
        item: 'Flower_Pots',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'Gym_Equipment', sm: '' },
      {
        isSelected: false,
        item: 'Benches',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'BookCases',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Sculptures',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Desktop_Computers',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Gas_Tanks',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'TV_Wall_Mounts', sm: '' }
    ],
    Quantity: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 }
    ],
    Sizes: {
      TV: ['13-23', '24-37', '38-51', '52-65', '66-79', '80-93', '94-100'],
      Beds: ['Twin', 'Full', 'Queen', 'King'],
      Nightstand_Tables: [0, 1, 2, 3, 4],
      Chest: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Dresser: ['With Mirror', 'Without Mirror'],
      Dining_Room_Tables: ['Wood', 'Glass', 'Metal', 'Marbel'],
      China_Cabinets: ['Small', 'Medium', 'Large'],
      Refrigerators: ['Side by Side', 'Regular'],
      Stoves: ['Stove with Oven', 'Cooktop Stove'],
      Chest_Freezers: ['Small', 'Medium', 'Large'],
      Frames: ['Small', 'Medium', 'Large'],
      Area_Rugs: ['Small', 'Medium', 'Large'],
      Lamps: ['Stand Lamp', 'Table Lamp'],
      Desks: ['Small', 'Medium', 'Large'],
      Fish_Tanks: ['Small', 'Medium', 'Large'],
      Dog_Houses: ['Small', 'Medium', 'Large'],
      Flower_Pots: ['Small', 'Medium', 'Large'],
      Benches: ['Small', 'Medium', 'Large'],
      BookCases: ['Small', 'Medium', 'Large'],
      Sculptures: ['Small', 'Medium', 'Large'],
      Desktop_Computers: ['Small', 'Medium', 'Large'],
      Gas_Tanks: ['Small', 'Medium', 'Large'],
      Gym_Equipment: ['Small', 'Medium', 'Large']
    },

    details: {
      Tv_Stand: [],
      Arm_Decorative_Chair: [],
      TV: [],
      Sofa: [],
      Love_Seat: [],
      Sofa_L_Shape: [],
      Ottoman: [],
      Reclinable_Chairs: [],
      Corner_Tables: [],
      Coffee_Tables: [],
      Decorative_Tables: [],
      Futon: [],

      Dining_Room_Tables: [],
      Dining_Room_Chairs: [],
      China_Cabinets: [],

      Beds: [],
      Nightstand_Tables: [],
      Chest: [],
      Dresser: [],

      Frames: [],
      Area_Rugs: [],
      Lamps: [],
      Ceiling_Fans: [],
      Desks: [],
      Window_Air_Conditioner_Units: [],
      Wall_Pack_Air_Conditioner_Units: [],
      Inverter_Units: [],
      Inverter_Unit_Compressors: [],
      Boxes: [],
      Pool_Tables: [],
      Ping_Pong_Tables: [],
      Outdoor_BBQ_Grills: [],
      Fish_Tanks: [],
      Dog_Houses: [],
      Office_Chairs: [],
      Flower_Pots: [],
      Gym_Equipment: [],
      Benches: [],
      Book_Cases: [],
      Sculptures: [],
      Desktop_Computers: [],
      Gas_Tanks: [],
      TV_Wall_Mounts: [],

      Refrigerators: [],
      Stoves: [],
      Dryers: [],
      Washers: [],
      Dryer_And_Washer_combos: [],
      Microwave_Ovens: [],
      Dishwashers: [],
      Wine_Coolers: [],
      Toaster_Ovens: [],
      Indoor_Grills: [],
      Coffee_Machines: [],
      Mini_Fridges: [],
      Chest_Freezers: []
    }
  };

  handleOpen = (item, sm) => {
    this.setState({ openModel: true, title: item, specificationMessagae: sm });
  };
  handleCloseDining = () => {
    this.setState({ openModelDining: !this.state.openModelDining });
  };

  handleOpenDining = (item, sm) => {
    this.setState({
      openModelDining: true,
      title: item,
      specificationMessagae: sm
    });
  };
  handleClose = () => {
    this.setState({ openModel: !this.state.openModel });
  };

  handleOpenBedroom = (item, sm) => {
    this.setState({
      openModelBedroom: true,
      title: item,
      specificationMessagae: sm
    });
  };
  handleCloseBedroom = () => {
    this.setState({ openModelBedroom: !this.state.openModelBedroom });
  };

  handleOpenMiscellaneous = (item, sm) => {
    // console.log(this.state.openModelMiscellaneous, this.state.title, item, sm)
    this.setState({
      openModelMiscellaneous: true,
      title: item,
      specificationMessagae: sm
    });
    // console.log(this.state.openModelMiscellaneous, this.state.title)
  };
  handleCloseMiscellaneous = () => {
    this.setState({
      openModelMiscellaneous: !this.state.openModelMiscellaneous
    });
  };
  handleOpenKitchen = (item, sm) => {
    this.setState({
      openModelKitchen: true,
      title: item,
      specificationMessagae: sm
    });
  };
  handleCloseKitchen = () => {
    this.setState({
      openModelKitchen: !this.state.openModelKitchen
    });
  };
  handleShareholderName = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, nameTvStand: evt.target.value };
    });
    this.setState({ shareholders: newShareholders });
  };
  handleChangeSelect = (title, newQuantity) => {
    // console.log(newQuantity);
    let newArray = [];
    if (title === 'Gym_Equipment' && typeof newQuantity === 'string') {
      newArray.push({ id: 0, sizing: newQuantity });
      if (this.search(this.state.ListOfMiscellaneous).find) {
        this.setState(prevState => {
          let updatedDetails = [...prevState.ListOfMiscellaneous];
          updatedDetails[this.search(this.state.ListOfMiscellaneous).index] = {
            isSelected: true,
            item: title
          };
          return {
            ...prevState,
            ListOfMiscellaneous: updatedDetails
          };
        });
      }
    } else {
      for (let i = 0; i < newQuantity; i++) {
        newArray.push({ id: i, sizing: 0 });
      }
    }
    // console.log(newArray);
    var { details } = this.state;
    details[title] = newArray;
    this.setState({ details: details }, () => {
      // console.log(this.state.details);
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      openModel: false,
      openModelDining: false,
      openModelBedroom: false,
      openModelKitchen: false,
      openModelMiscellaneous: false
    });
    // console.log(this.state.details)
    const { nameTvStand, shareholders } = this.state;
  };

  bedRoomChangeHandler = e => {
    this.setState({
      bedRoom: e.target.value
    });
  };

  diningRoomChangeHandler = e => {
    this.setState({
      diningRoom: e.target.value
    });
  };

  livingRoomChangeHandler = e => {
    this.setState({
      livingRoom: e.target.value
    });
  };

  miscChangeHandler = e => {
    this.setState({
      misc: e.target.value
    });
  };

  kitchenChangeHandler = e => {
    this.setState({
      kitchen: e.target.value
    });
  };

  search(arr) {
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i] ,this.state.title)
      if (arr[i].item === this.state.title) {
        return { find: true, index: i };
      }
    }
    return { find: false };
  }
  changeSizeHandler = (sizing, id) => {
    if (typeof sizing === 'object') {
      sizing = sizing.target.value;
    }
    const title = this.state.title;
    if (this.search(this.state.ListOfLivingRoom).find) {
      this.setState(prevState => {
        let updatedDetails = [...prevState.ListOfLivingRoom];
        updatedDetails[this.search(this.state.ListOfLivingRoom).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfLivingRoom: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfDiningRoom).find) {
      this.setState(prevState => {
        let updatedDetails = [...prevState.ListOfDiningRoom];
        updatedDetails[this.search(this.state.ListOfDiningRoom).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfDiningRoom: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfBedrooms).find) {
      this.setState(prevState => {
        let updatedDetails = [...prevState.ListOfBedrooms];
        updatedDetails[this.search(this.state.ListOfBedrooms).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfBedrooms: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfKitchen).find) {
      this.setState(prevState => {
        let updatedDetails = [...prevState.ListOfKitchen];
        updatedDetails[this.search(this.state.ListOfKitchen).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfKitchen: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfMiscellaneous).find) {
      this.setState(prevState => {
        let updatedDetails = [...prevState.ListOfMiscellaneous];
        updatedDetails[this.search(this.state.ListOfMiscellaneous).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfMiscellaneous: updatedDetails
        };
      });
    }
    for (let i in this.state.details[title]) {
      if (this.state.details[title][i].id === id) {
        this.setState(prevState => {
          // console.log([...prevState.details[title]])
          let updatedDetails = [...prevState.details[title]];
          updatedDetails[id] = { id: id, sizing: sizing };
          return {
            ...prevState,
            itemsValid:false,
            details: { ...prevState.details, [title]: updatedDetails }
          };
        });
      }
    }
  };

  reserveChangeHandlerFrom = from => {
    this.setState({
      from: from
    });
  };
  reserveChangeHandlerTo = to => {
    this.setState({
      to: to
    });
  };
  reserveChangeHandlerDate = date => {
    this.setState({
      date: date
    });
  };

  bookNowChangeHandlerFrom = from => {
    this.setState({
      bookNowFrom: from
    });
  };
  bookNowChangeHandlerTo = to => {
    this.setState({
      bookNowTo: to
    });
  };
  bookNowChangeHandlerDate = date => {
    this.setState({
      bookNowDate: date
    });
  };

  lastDetailsMovingFromHandler = from => {
    this.setState({
      moveFrom: from
    });
  };
  lastDetailsMovingToHandler = to => {
    this.setState({
      moveTo: to
    });
  };
  lastDetailsLoadingDockHandler = doc => {
    this.setState({
      loadingDock: doc
    });
  };
  lastDetailsDoorRemovingHandler = door => {
    this.setState({
      doorRemoval: door
    });
  };
  lastDetaislMovingFromElevatorHandler = () => {
    this.setState(prevState => {
      return { moveFromElevator: !prevState.moveFromElevator };
    });
  };
  lastDetaislMovingToElevatorHandler = () => {
    this.setState(prevState => {
      return { moveToElevator: !prevState.moveToElevator };
    });
  };
  customerDetailsHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    
  };
  customerPhoneHandler = (event) => {
    console.log(event.target.value);
    this.setState(prevState => {
      return {
        customerPhone: event?.target?.value,
      };
    });
  }
  handleNextEvent = async (moreInfoLink, contact) => {
    this.setState({
      loader : true
    })
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');

    // set response language. Defaults to english.
    Geocode.setLanguage('en');

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion('es');

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    try {
      let fromResponse = await Geocode.fromAddress(this.state.from);
      // let { lat, lng } = fromResponse.results[0].geometry.location;
      // console.log(fromResponse)
      await this.setState({
        fromLatitude: fromResponse.results[0].geometry.location.lat,
        fromLongitude: fromResponse.results[0].geometry.location.lng
      });

      let toResponse = await Geocode.fromAddress(this.state.to);
      // let { lat, lng } = toResponse.results[0].geometry.location;
      await this.setState({
        toLatitude: toResponse.results[0].geometry.location.lat,
        toLongitude: toResponse.results[0].geometry.location.lng
      });

      if (moreInfoLink) {
        let customer = await axios.post('/customers/addNew', {
          name: this.state.customerName
        });
        // console.log(customer)
        if (customer.status === 200) {
          this.setState({
            customerId: customer.data.id,
            loader : false,
            showErroModal : false
          });
          this.props.history.push({
            pathname: 'moreinfo',
            state: { fromLink: 'Residential' }
          });
        }
      } else {
        this.setState({
          loader : false
        });
        this.props.history.push(contact);
      }
    } catch (err) {
      console.error(err.response);
      console.error(err.message);
      this.setState({ 
        errorMsg : err.message,
        loader : false,
        showErroModal : true
      })
    }
  };

  handleMoreInfoNextHandle = async url => {
    this.setState({
      loader:true
    })
    // console.log(this.state.details);
    let order = {
      origin: {
        lat: this.state.fromLatitude,
        lon: this.state.fromLongitude
      },
      destination: {
        lat: this.state.toLatitude,
        lon: this.state.toLongitude
      },
      items: []
    };
    try{

  
    if (this.state.livingRoom !== '') {
      try{
        let livingRoomRes = await axios.post('/categories/addNew', {
          name: 'Living Room'
        });
        if (livingRoomRes.status === 200) {
          let livingRoomCategoryType = await axios.post(
            `/types/addNew/${livingRoomRes.data.id}`,
            { name: 'livingroom types' }
          );
          if (livingRoomCategoryType.status === 200) {
            for (let i = 0; i < this.state.ListOfLivingRoom.length; i++) {
              let items = this.state.ListOfLivingRoom[i];
              if (items.isSelected) {
                let item = await axios.post(
                  `items/addNew/${livingRoomCategoryType.data.id}`,
                  {
                    name: items.item.replace(/_/g, ' '),
                    cost: 10.0,
                    description: 'testing'
                  }
                );
                if (item.status === 200) {
                  order.items.push({
                    id: item.data.id,
                    quantity: this.state.details[items.item].length
                  });
                }
              }
            }
          }
        }
      }catch(err){
        console.log(err)
        this.setState({
          errorMsg:err.message,
          loader: false,
          showErroModal : true
        })
      }
     
    }

    if (this.state.diningRoom !== '') {
      try{
        let diningRoomRes = await axios.post('/categories/addNew', {
          name: 'Dining Room'
        });
        if (diningRoomRes.status === 200) {
          let diningRoomCategoryType = await axios.post(
            `/types/addNew/${diningRoomRes.data.id}`,
            { name: 'diningroom types' }
          );
          if (diningRoomCategoryType.status === 200) {
            for (let j = 0; j < this.state.ListOfDiningRoom.length; j++) {
              let items = this.state.ListOfDiningRoom[j];
              if (items.isSelected) {
                let item = await axios.post(
                  `items/addNew/${diningRoomCategoryType.data.id}`,
                  {
                    name: items.item.replace(/_/g, ' '),
                    cost: 10.0,
                    description: 'testing'
                  }
                );
                if (item.status === 200) {
                  order.items.push({
                    id: item.data.id,
                    quantity: this.state.details[items.item].length
                  });
                }
              }
            }
          }
        }
      }catch(err){
        console.log(err)
        this.setState({
          errorMsg:err.message,
          loader : false,
          showErroModal : true
        })
      }
      
    }

    if (this.state.bedRoom !== '') {
      try{
        let bedRoomRes = await axios.post('/categories/addNew', {
          name: 'Bed Room'
        });
        if (bedRoomRes.status === 200) {
          let bedRoomCategoryType = await axios.post(
            `/types/addNew/${bedRoomRes.data.id}`,
            { name: 'bedroom types' }
          );
          if (bedRoomCategoryType.status === 200) {
            for (let k = 0; k < this.state.ListOfBedrooms.length; k++) {
              let items = this.state.ListOfBedrooms[k];
              if (items.isSelected) {
                let item = await axios.post(
                  `items/addNew/${bedRoomCategoryType.data.id}`,
                  {
                    name: items.item.replace(/_/g, ' '),
                    cost: 10.0,
                    description: 'testing'
                  }
                );
                if (item.status === 200) {
                  order.items.push({
                    id: item.data.id,
                    quantity: this.state.details[items.item].length
                  });
                }
              }
            }
          }
        }
      }catch(err){
        console.log(err)
        this.setState({
          errorMsg:err.message,
          loader :false,
          showErroModal : true
        })
      }
     
        
      
    }

    if (this.state.misc !== '') {
      try{
        let miscRes = await axios.post('/categories/addNew', {
          name: 'Miscellaneous'
        });
        if (miscRes.status === 200) {
          let miscellaneousCategoryType = await axios.post(
            `/types/addNew/${miscRes.data.id}`,
            { name: 'miscellaneous types' }
          );
          if (miscellaneousCategoryType.status === 200) {
            for (let l = 0; l < this.state.ListOfMiscellaneous.length; l++) {
              let items = this.state.ListOfMiscellaneous[l];
              if (items.isSelected) {
                let item = await axios.post(
                  `items/addNew/${miscellaneousCategoryType.data.id}`,
                  {
                    name: items.item.replace(/_/g, ' '),
                    cost: 10.0,
                    description: 'testing'
                  }
                );
                if (item.status === 200) {
                  order.items.push({
                    id: item.data.id,
                    quantity: this.state.details[items.item].length
                  });
                }
              }
            }
          }
        }
      }catch(err){
        console.log(err)
        this.setState({
          errorMsg:err.message,
          loader : false,
          showErroModal : true
        })
      }
     
    }

    if (this.state.kitchen !== '') {
      try{

        let kitchenRes = await axios.post('/categories/addNew', {
          name: 'Kitchen'
        });
        if (kitchenRes.status === 200) {
          let kitchenCategoryType = await axios.post(
            `/types/addNew/${kitchenRes.data.id}`,
            { name: 'kitchen types' }
          );
          if (kitchenCategoryType.status === 200) {
            for (let m = 0; m < this.state.ListOfKitchen.length; m++) {
              let items = this.state.ListOfKitchen[m];
              if (items.isSelected) {
                let item = await axios.post(
                  `items/addNew/${kitchenCategoryType.data.id}`,
                  {
                    name: items.item.replace(/_/g, ' '),
                    cost: 10.0,
                    description: 'testing'
                  }
                );
                if (item.status === 200) {
                  order.items.push({
                    id: item.data.id,
                    quantity: this.state.details[items.item].length
                  });
                }
              }
            }
          }
        }
      }catch(err){
        console.log(err)
        this.setState({
          errorMsg:err.message,
          loader : false,
          showErroModal : true
        })
      }
    }

    // console.log(order);
    if (order.items.length > 0) {
      try{
        let submitOrder = await axios.post(
          `/order/addNew/${this.state.customerId}`,
          order
        );
        if (submitOrder.status === 200) {
          // console.log(submitOrder);
          this.setState({
            totalPrice: submitOrder.data.totalPrice,
            orderId : submitOrder.data.order.id,
            loader : false,
            showErroModal : false
          });
  
          if (url === '') {
            this.props.history.push({ pathname: '/review' });
          } else {
            this.props.history.push({ pathname: url });
          }
        }
      }catch(err){
        console.log(err)
        this.setState({
          errorMsg:err.message,
          loader : false,
          showErroModal : true
        })
        let deleteCustomer = await axios.post(`/customers/delete/${this.state.customerId}`)
        if(deleteCustomer.status === 200){
        }
      }
    }

  }catch(err){
    console.log(err)
    this.setState({
      errorMsg:err.message,
      loader : false,
      showErroModal : true
    })
  }
  };

  handleCloseModal = () =>{
    this.setState({
      showErroModal : false,
    })
}

  saveAndBookLaterHandler = () => {};

  saveNowHandler = async () => {
    this.setState({
      loader : true
    })

    let reservation = {
      reservation: {
        fromLatitude: this.state.fromLatitude,
        fromLongitude: this.state.fromLongitude,
        toLatitude: this.state.toLatitude,
        toLongitude: this.state.toLongitude,
        totalAmount: this.state.totalPrice,
        amountPaid: this.state.totalPrice - (this.state.totalPrice / 100) * 5
      },
      customerId: this.state.customerId,
      areaId: this.state.cities.filter(city => city.name === this.state.from)[0].id
    };
    try{
      let reservationResponse = await axios.post(
        '/reservations/addNew',
        reservation
      );
      let jobsData = {
        "status" : "unassigned",
        "areaId":this.state.cities.filter(city => city.name === this.state.from)[0].id,
        "orderId":this.state.orderId
      }
      if (reservationResponse.status === 200) {
        let addJobRes = await axios.post(`/jobs/addNew/${this.state.customerId}`, jobsData)
        if(addJobRes.status === 200){

          this.setState({
            errorMsg:'',
            showErroModal : true,
            loader:false,
            livingRoom: '',
            diningRoom: '',
            bedRoom: '',
            misc: '',
            kitchen: '',
            itemsValid:true,
    
            customerId: '',
            customerName: '',
            customerEmail: '',
            customerPhone: '',
    
            from: '',
            to: '',
            fromLatitude: '',
            fromLongitude: '',
            toLatitude: '',
            toLongitude: '',
            date: new Date(),
            time:new Date(),
    
            totalPrice: '',
    
            bookNowFrom: '',
            bookNowTo: '',
            bookNowdate: '',
    
            moveFrom: '',
            moveFromElevator: false,
            moveToElevator: false,
            moveTo: '',
            loadingDock: '',
            doorRemoval: '',
    
            specificationMessagae: '',
    
            title: 'TV',
            ListOfLivingRoom: [
              {
                isSelected: false,
                item: 'Tv_Stand',
                sm: 'Please include all TV stands in your move'
              },
              {
                isSelected: false,
                item: 'Arm_Decorative_Chair',
                sm:
                  'Please include patio and all Armchair or decorative chairs in your move'
              },
              {
                isSelected: false,
                item: 'Futon',
                sm: 'Please include any futon in your move'
              },
              {
                isSelected: false,
                item: 'TV',
                sm: 'Please include all TV in your move'
              },
              { isSelected: false, item: 'Sofa', sm: '' },
              { isSelected: false, item: 'Love_Seat', sm: '' },
              { isSelected: false, item: 'Sofa_L_Shape', sm: '' },
              { isSelected: false, item: 'Ottoman', sm: '' },
              { isSelected: false, item: 'Reclinable_Chairs', sm: '' },
              { isSelected: false, item: 'Corner_Tables', sm: '' },
              { isSelected: false, item: 'Coffee_Tables', sm: '' },
              {
                isSelected: false,
                item: 'Decorative_Tables',
                sm: 'Please include all Decorative Tables in your move'
              }
            ],
            ListOfDiningRoom: [
              {
                isSelected: false,
                item: 'Dining_Room_Tables',
                sm:
                  'Please select the table surface, (wood, glass, metal, or marble )'
              },
              { isSelected: false, item: 'Dining_Room_Chairs', sm: '' },
              {
                isSelected: false,
                item: 'China_Cabinets',
                sm: 'Size - Small, Medium, or Large'
              }
            ],
            ListOfBedrooms: [
              { isSelected: false, item: 'Beds', sm: '' },
              {
                isSelected: false,
                item: 'Nightstand_Tables',
                sm: 'Please indicate # of drawers 0,1,2, 3 or 4'
              },
              {
                isSelected: false,
                item: 'Chest',
                sm: 'Please indicate # of drawers from 0 to 12'
              },
              {
                isSelected: false,
                item: 'Dresser',
                sm: 'Please indicate # of drawers Dresser with mirror or without'
              }
            ],
            ListOfKitchen: [
              {
                isSelected: false,
                item: 'Refrigerators',
                sm: 'Side by Side or Regular'
              },
              {
                isSelected: false,
                item: 'Stoves',
                sm: 'Please indicate Stove with oven or cooktop stove'
              },
              { isSelected: false, item: 'Dryers', sm: '' },
              { isSelected: false, item: 'Washers', sm: '' },
              { isSelected: false, item: 'Dryer_And_Washer_combos', sm: '' },
              { isSelected: false, item: 'Microwave_Ovens', sm: '' },
              { isSelected: false, item: 'Dishwashers', sm: '' },
              { isSelected: false, item: 'Wine_Coolers', sm: '' },
              { isSelected: false, item: 'Toaster_Ovens', sm: '' },
              { isSelected: false, item: 'Indoor_Grills', sm: '' },
              { isSelected: false, item: 'Coffee_Machines', sm: '' },
              { isSelected: false, item: 'Mini_Fridges', sm: '' },
              {
                isSelected: false,
                item: 'Chest_Freezers',
                sm: 'Size - Small, Medium, or Large'
              }
            ],
            ListOfMiscellaneous: [
              {
                isSelected: false,
                item: 'Frames',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Area_Rugs',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Lamps',
                sm:
                  'Please include all lamps, indicate if it’s a stand or table lamp'
              },
              { isSelected: false, item: 'Ceiling_Fans', sm: '' },
              {
                isSelected: false,
                item: 'Desks',
                sm: 'Size - Small, Medium, or Large'
              },
              { isSelected: false, item: 'Window_Air_Conditioner_Units', sm: '' },
              {
                isSelected: false,
                item: 'Wall_Pack_Air_Conditioner_Units',
                sm: ''
              },
              { isSelected: false, item: 'Inverter_Units', sm: '' },
              { isSelected: false, item: 'Inverter_Unit_Compressors', sm: '' },
              { isSelected: false, item: 'Boxes', sm: '' },
              { isSelected: false, item: 'Pool_Tables', sm: '' },
              { isSelected: false, item: 'Ping_Pong_Tables', sm: '' },
              { isSelected: false, item: 'Outdoor_BBQ_Grills', sm: '' },
              {
                isSelected: false,
                item: 'Fish_Tanks',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Dog_Houses',
                sm: 'Size - Small, Medium, or Large'
              },
              { isSelected: false, item: 'Office_Chairs', sm: '' },
              {
                isSelected: false,
                item: 'Flower_Pots',
                sm: 'Size - Small, Medium, or Large'
              },
              { isSelected: false, item: 'Gym_Equipment', sm: '' },
              {
                isSelected: false,
                item: 'Benches',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'BookCases',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Sculptures',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Desktop_Computers',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Gas_Tanks',
                sm: 'Size - Small, Medium, or Large'
              },
              { isSelected: false, item: 'TV_Wall_Mounts', sm: '' }
            ],
            details: {
              Tv_Stand: [],
              Arm_Decorative_Chair: [],
              TV: [],
              Sofa: [],
              Love_Seat: [],
              Sofa_L_Shape: [],
              Ottoman: [],
              Reclinable_Chairs: [],
              Corner_Tables: [],
              Coffee_Tables: [],
              Decorative_Tables: [],
              Futon: [],
    
              Dining_Room_Tables: [],
              Dining_Room_Chairs: [],
              China_Cabinets: [],
    
              Beds: [],
              Nightstand_Tables: [],
              Chest: [],
              Dresser: [],
    
              Frames: [],
              Area_Rugs: [],
              Lamps: [],
              Ceiling_Fans: [],
              Desks: [],
              Window_Air_Conditioner_Units: [],
              Wall_Pack_Air_Conditioner_Units: [],
              Inverter_Units: [],
              Inverter_Unit_Compressors: [],
              Boxes: [],
              Pool_Tables: [],
              Ping_Pong_Tables: [],
              Outdoor_BBQ_Grills: [],
              Fish_Tanks: [],
              Dog_Houses: [],
              Office_Chairs: [],
              Flower_Pots: [],
              Gym_Equipment: [],
              Benches: [],
              Book_Cases: [],
              Sculptures: [],
              Desktop_Computers: [],
              Gas_Tanks: [],
              TV_Wall_Mounts: [],
    
              Refrigerators: [],
              Stoves: [],
              Dryers: [],
              Washers: [],
              Dryer_And_Washer_combos: [],
              Microwave_Ovens: [],
              Dishwashers: [],
              Wine_Coolers: [],
              Toaster_Ovens: [],
              Indoor_Grills: [],
              Coffee_Machines: [],
              Mini_Fridges: [],
              Chest_Freezers: []
            }
          });
        }
        this.props.history.push({ pathname: '/dashboard' });
      }
    }catch(err){
      this.setState({
        errorMsg:err.message,
        loader :false,
        showErroModal : true
      })
    }
 
  };

  contactDetailsHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  customerDateHandler = (date) => {
    this.setState({
      date: date
    });
  };

  customerTimeHandler = (time) =>{
    this.setState({
      time: time
    });
  }
  submitContactHandler = async () => {
    this.setState({
      loader:true
    })
    let data = {
      contactName: this.state.contactName,
      email: this.state.contactEmail,
      businessName: this.state.contactBusinessName,
      timeToContact: this.state.contactDate,
      phoneNo: this.state.contactPhone
    };

    try{

      let contactRes = await axios.post('/commercial/customer/addNew', data);
      if (contactRes.status === 200) {
        this.setState({
          loader:false,
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          contactBusinessName: '',
          contactDate: '',
          from: '',
          to: '',
          fromLatitude: '',
          fromLongitude: '',
          toLatitude: '',
          toLongitude: '',
          date: '',
      
        })
        this.props.history.push('thankyou');
      }
    }catch(err){
      console.log(err)
        this.setState({
          errorMsg:err.message,
          loader : false,
          showErroModal : true
        })
    }
  };
  bookNowResidentialHandler = async href => {
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');

    // set response language. Defaults to english.
    Geocode.setLanguage('en');

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion('es');

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    try {
      let fromResponse = await Geocode.fromAddress(this.state.from);
      // let { lat, lng } = fromResponse.results[0].geometry.location;
      await this.setState({
        fromLatitude: fromResponse.results[0].geometry.location.lat,
        fromLongitude: fromResponse.results[0].geometry.location.lng
      });

      let toResponse = await Geocode.fromAddress(this.state.to);
      // let { lat, lng } = toResponse.results[0].geometry.location;
      await this.setState({
        toLatitude: toResponse.results[0].geometry.location.lat,
        toLongitude: toResponse.results[0].geometry.location.lng
      });

      let customer = await axios.post('/customers/addNew', {
        name: this.state.customerName
      });
      // console.log(customer)
      if (customer.status === 200) {
        this.setState({
          customerId: customer.data.id,
          from: '',
          to: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          contactBusinessName: '',
          contactDate: '',
          date : ''
        });
        this.props.history.push({
          pathname: href,
          state: { fromLink: 'BookNow' }
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount(){
  //   let ZoneAndAreas= {
  //     'Zone 1':[
  //       'Aguadila',
  //       'Aguada',
  //       'Rincón',
  //       'Moca',
  //       'Añasco',
  //       'San Sebastián',
  //       'Isabela',
  //       'Quebradillas',
  //       'Camuy',
  //       'Hatillo',
  //       'Arecibo',
  //       'Lares',
  //       'Utuado',
  //       'Florida',
  //       'Barceloneta',
  //       'Ciales',
  //       'Manatí',
  //       'Vega Baja',
  //       'Morovis',
  //       'Corozal',
  //       'Vega Alta',
  //     ],
  //     'Zone 2':[
  //       'Naranjito',
  //       'Toa Alta',
  //       'Dorado',
  //       'Toa Baja',
  //       'Cataño',
  //       'Bayamón',
  //       'Guaynabo',
  //       'Aguas Buenas',
  //       'Gurabo',
  //       'Trujillo Alto',
  //       'Carolina',
  //       'Loíza',
  //       'Canóvanas',
  //       'Río Grande',
  //       'Luquillo',
  //       'Fajardo',
  //     ],


  //     'Zone 3':[

  //       'Mayagüez',
  //       'Hormigueros',
  //       'Cabo Rojo',
  //       'Maricao',
  //       'San Germán',
  //       'Lajas',
  //       'Sabana Grande',
  //       'Guánica',
  //       'Yauco',
  //       'Guayanilla',
  //       'Adjuntas',
  //       'Peñuelas',
  //       'Ponce',
  //       'Jayuya',
  //       'Juana Díaz',
  //       'Villalba',
  //       'Las Marías',
  //     ],


  //     'Zone 4':[

  //       'Coamo',
  //       'Santa Isabel',
  //       'Salinas',
  //       'Aibonito',
  //       'Barranquitas',
  //       'Cidra',
  //       'Cayey',
  //       'Salinas',
  //       'Guayama',
  //       'Arroyo',
  //       'Maunabo',
  //       'Yabucoa',
  //       'Humacao',
  //       'Las Piedras',
  //       'San Lorenzo',
  //       'Orocovis',
  //       'Comerio',
  //       'Naguabo',
  //       'Ceiba',
  //     ]

      
  //   }
  //       for(let x in ZoneAndAreas){
  //         console.log(x)
  //         axios.post('/zones/addNewZone', {name : x , description:x}).then(resp=>{
  //           if(resp.status === 200){
  //             for(let i = 0; i < ZoneAndAreas[x].length; i++){
  //               axios.post(`/areas/addNew/${resp.data.id}`, {name : ZoneAndAreas[x][i], description: ZoneAndAreas[x][i]}).then(res => {
  //                 console.log(res)
  //               }).catch(err=>{
  //                 console.error(err)
  //               })
  //             }
  //           }
  //         }).catch(err =>{

  //           console.error(err)
  //         })
  //       }
        
  let zones = [147, 148, 149, 150]
  for(let i = 0; i < zones.length; i++){
    axios.get(`/areas/getByZone/${zones[i]}`).then(res1=>{
      this.setState(prevState=> {
        return {cities:[...prevState.cities, ...res1.data]}
      })
      // console.log(this.state.cities)
    }).catch(err=>{
      console.error(err)
        this.setState({
          // errorMsg:err.message,
          // loader : false,
          // showErroModal : true
        })
    })
  }

  }

  render() {
    return (
      <StepperDataContext.Provider
        value={{
          ...this.state,
          handleOpen: this.handleOpen,
          handleCloseDining: this.handleCloseDining,
          handleOpenDining: this.handleOpenDining,
          handleClose: this.handleClose,
          handleOpenBedroom: this.handleOpenBedroom,
          handleCloseBedroom: this.handleCloseBedroom,
          handleOpenMiscellaneous: this.handleOpenMiscellaneous,
          handleCloseMiscellaneous: this.handleCloseMiscellaneous,
          handleOpenKitchen: this.handleOpenKitchen,
          handleCloseKitchen: this.handleCloseKitchen,
          handleShareholderName: this.handleShareholderName,
          handleChangeSelect: this.handleChangeSelect,
          handleSubmit: this.handleSubmit,
          bedRoomChangeHandler: this.bedRoomChangeHandler,
          diningRoomChangeHandler: this.diningRoomChangeHandler,
          livingRoomChangeHandler: this.livingRoomChangeHandler,
          miscChangeHandler: this.miscChangeHandler,
          kitchenChangeHandler: this.kitchenChangeHandler,
          changeSizeHandler: this.changeSizeHandler,
          reserveChangeHandlerFrom: this.reserveChangeHandlerFrom,
          reserveChangeHandlerTo: this.reserveChangeHandlerTo,
          reserveChangeHandlerDate: this.reserveChangeHandlerDate,
          lastDetailsMovingFromHandler: this.lastDetailsMovingFromHandler,
          lastDetailsMovingToHandler: this.lastDetailsMovingToHandler,
          lastDetailsLoadingDockHandler: this.lastDetailsLoadingDockHandler,
          lastDetailsDoorRemovingHandler: this.lastDetailsDoorRemovingHandler,
          lastDetaislMovingFromElevatorHandler: this
            .lastDetaislMovingFromElevatorHandler,
          lastDetaislMovingToElevatorHandler: this
            .lastDetaislMovingToElevatorHandler,
          bookNowChangeHandlerFrom: this.bookNowChangeHandlerFrom,
          bookNowChangeHandlerTo: this.bookNowChangeHandlerTo,
          bookNowChangeHandlerDate: this.bookNowChangeHandlerDate,
          customerDetailsHandler: this.customerDetailsHandler,
          handleNextEvent: this.handleNextEvent,
          handleMoreInfoNextHandle: this.handleMoreInfoNextHandle,
          saveAndBookLaterHandler: this.saveAndBookLaterHandler,
          saveNowHandler: this.saveNowHandler,
          contactDetailsHandler: this.contactDetailsHandler,
          submitContactHandler: this.submitContactHandler,
          bookNowResidentialHandler: this.bookNowResidentialHandler,
          handleCloseModal:this.handleCloseModal,
          customerPhoneHandler:this.customerPhoneHandler,
          customerDateHandler:this.customerDateHandler,
          customerTimeHandler:this.customerTimeHandler
        }}
      >
        {this.props.children}
      </StepperDataContext.Provider>
    );
  }
}

export default withRouter(StepperDataContextProvider);
