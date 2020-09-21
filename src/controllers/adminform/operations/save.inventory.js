const Inventory = require("../inventory.model");

//
exports.save = async (req, res) => {
  try {
    // const file = req.files;
    console.log(JSON.parse(JSON.stringify(req.body)));
    if (!JSON.parse(JSON.stringify(req.body))) {
      return res.json({ success: false, status: "object is empty!" });
    } else {
      console.log("body: ", JSON.parse(JSON.stringify(req.body)));
      console.log("file name: ", req.files[0].filename);
      const imageUrls = [];
      for (var i = 0; i < req.files.length; i++) {
        imageUrls[i] = req.files[i].filename;
      }

    //   if (req.files.length > 0) {
        const invObj = {
          userId: req.body.userId,
          inventoryId: req.body.inventoryId,
          agent: {
            Id: req.body.Id,
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            password: req.body.password,
            //   area: req.body.area,
          },
          /*  property details {name, purpose, type}
           */
          // May be {house, plot, commercial} (enter on at a time)
          property_Type: req.body.property_Type,
          // May be {buy, rent} (enter on at a time)
          property_SubType: req.body.property_SubType,
          // property Number
          property_Number: req.body.property_Number,
          // Demand of property
          demand: req.body.demand,
          // size of the land
          land_Area: req.body.land_Area,
          // unit of the land
          land_Unit: req.body.land_Unit,
          //
          city: {
            city_Name: req.body.city_Name,
            lat: req.body.city_lat,
            lng: req.body.city_lng,
            image: req.body.city_image,
          },
          //
          House_Features: {
            house_Luxury: "",
            //
            house_Build_Year: "",
            house_View: "",
            house_Parking_Space: "",
            house_Other_Feature: "",
            //
            Rooms: {
              room_Luxuries: "",
              //
              beds: "",
              baths: "",
              guest_Room: "",
              tv_lounge: "",
              dinning_Room: "",
              study_Room: "",
              servant_Quaters: "",
              kitchens: "",
              store_Rooms: "",
              other_Rooms: "",
            },
            //
            Business_Communication: "",
          },
          //
          Plot_Features: {
            plot_details: req.body.plot_luxury,
            total_price: req.body.total_price,
            paid_amount: req.body.paid_amount,
            profit: req.body.profit,
            current_price: req.body.current_price,
          },
          //
          CommercialFeatures: {
            commercial_details: "",
            //
            com_Build_Year: "",
            com_View: "",
            com_Parking_Space: "",
            com_floor_in_building: "",
            com_elevators: "",
            business_communication: "",
            //
          },

          //
          nearbyLocations: {
            school: req.body.school,
            hospital: req.body.hospital,
            mall: req.body.mall,
            restuarant: req.body.restuarant,
            distancefromAirport: req.body.distancefromAirport,
            nearbyPublicTransport: req.body.nearbyPublicTransport,
            otherplaces: req.body.otherplaces,
          },
          //
          markerlocation: {
            marker_location: req.body.marker_location,
            marker_lat: req.body.marker_lat,
            marker_lng: req.body.marker_lng,
            marker_image: req.body.marker_image,
          },
          //
          property_images: imageUrls,
          isDeleted: req.body.isDeleted,
        };
        // console.log(req.body);
        const inventory = await Inventory.create(invObj);
        if (inventory) {
          console.log("Inventory: ", inventory);
          res.json({ success: true, status: "Inventory saved!", inventory });
        } else {
          res.json({ success: false, status: "Inventory not saved!" });
        }
      }
    // }
  } catch (error) {
    res.json(error);
  }
};
