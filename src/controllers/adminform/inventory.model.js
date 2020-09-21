const mongoose = require("mongoose");
//
const Schema = mongoose.Schema;
//
const inventorySchema = new Schema(
  {
    userId: { type: String },
    inventoryId: { type: Number, required: true, unique: true },
    agent: {
      Id: { type: String },
      name: { type: String },
      contact: { type: String },
      email: { type: String },
      password: { type: String },
      // area: { type: Number },
    },
    /*  property details {name, purpose, type}
     */
    // May be {house, plot, commercial} (enter on at a time)
    property_Type: { type: String },
    // May be {buy, rent} (enter on at a time)
    property_SubType: { type: String },
    // property Number
    property_Number: { type: Number },
    // Demand of property
    demand: { type: Number },
    // size of the land
    land_Area: { type: String },
    // unit of the land
    land_Unit: { type: String },
    //
    city: {
      city_Name: { type: String },
      lat: { type: Number },
      lng: { type: Number },
      image: { type: String },
    },
    //
    House_Features: {
      house_Luxury: { type: Array },
      //
      house_Build_Year: { type: Number },
      house_View: { type: String },
      house_Parking_Space: { type: String },
      house_Other_Feature: { type: String },
      //
      Rooms: {
        room_Luxuries: { type: Array },
        //
        beds: { type: Number },
        baths: { type: Number },
        guest_Room: { type: Number },
        tv_lounge: { type: Number },
        dinning_Room: { type: Number },
        study_Room: { type: Number },
        servant_Quaters: { type: Number },
        kitchens: { type: Number },
        store_Rooms: { type: Number },
        other_Rooms: { type: Number },
      },
      //
      Business_Communication: { type: Array },
    },
    //
    Plot_Features: {
      plot_details: { type: Array },
      total_price: { type: Number },
      paid_amount: { type: Number },
      profit: { type: Number },
      current_price: { type: Number },
    },
    //
    CommercialFeatures: {
      commercial_details: { type: Array },
      //
      com_Build_Year: { type: Number },
      com_View: { type: String },
      com_Parking_Space: { type: String },
      com_floor_in_building: { type: Number },
      com_elevators: { type: String },
      business_communication: { type: Array },
      //
    },

    //
    nearbyLocations: {
      school: { type: String },
      hospital: { type: String },
      mall: { type: String },
      restuarant: { type: String },
      distancefromAirport: { type: Number },
      nearbyPublicTransport: { type: String },
      otherplaces: { type: String },
    },
    //
    markerlocation: {
      marker_location: { type: String },
      marker_lat: { type: Number },
      marker_lng: { type: Number },
      marker_image: { type: String },
    },
    //
    property_images: { type: Array },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const Inventory = mongoose.model("inventory", inventorySchema);
module.exports = Inventory;

// const inventorySchema = new Schema(
//   {
//     inventoryId: { type: Number, required: true, unique: true },
//     userId: { type: String, required: true },
//     agent: { type: String, required: true },
//     city: { type: Object },
//     /*  property details {name, purpose, type}
//      */
//     sublocation: { type: String, required: true },
//     propertyDetail: { type: Object },
//     /*  luxury: { type: Array },
//       featuredetailprice: { type: Object }, */
//     propertyFeature: {
//       type: Object,
//       required: true,
//     },
//     businessCommunication: { type: Array },
//     /*     luxuries: { type: Array },
//     roomtypes: { type: Array }, */
//     roomFeatures: { type: Object, required: true },
//     overlay: {
//       lat0: { type: Number, required: true },
//       lng0: { type: Number, required: true },
//       lat1: { type: Number, required: true },
//       lng2: { type: Number, required: true },
//       imageloc: { type: String, required: true },
//     },
//     marker: {
//       lat: { type: Number, required: true },
//       lng: { type: Number, required: true },
//       imageloc: { type: String, required: true },
//     },

//     propertyImage: { type: String },
//     isDeleted: { type: Boolean, default: false },
//   },
//   {
//     timestamps: true,
//   }
// );
