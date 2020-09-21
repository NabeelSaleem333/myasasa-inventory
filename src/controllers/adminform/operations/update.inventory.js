const Inventory = require("../inventory.model");
var fs = require('fs');
//
/* 
This function is used to update the inventory
any type of detail can be upated
*/

exports.update = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.json({ success: false, status: "object is empty!" });
    } else {
      // const file = req.files;
      console.log('Put, Req.Body:',JSON.parse(JSON.stringify(req.body)));
      if (!JSON.parse(JSON.stringify(req.body))) {
        return res.json({ success: false, status: "object is empty!" });
      } else {
        // check that this id inventory exist in database or not
        const inventoryfind = await Inventory.findById(req.params.id);
       console.log('inventory found: ', inventoryfind);
        // condition
        if (inventoryfind) {
          //
          console.log("Property Images: ", inventoryfind.property_images);
          console.log("file name: ", req.files[0].filename);
          //
          /* Here's I am deleting all the old files related to 
        property images */
          for (let images of inventoryfind.property_images) {
            console.log(`for loop images: `, images);
            var sourceUrls = `public/images/${images}`;
            fs.unlink(sourceUrls, function (err) {
              if (err) {
                throw err;
              } else {
                console.log("Previous images has been deleted.", sourceUrls);
              }
            });
          }
          /* Here's I am making an array of new property images files
           */
          const imageUrls = [];
          for (var i = 0; i < req.files.length; i++) {
            // for (let images of inventoryfind.property_images) {
            imageUrls[i] = req.files[i].filename;
            // }
          }
          // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
          // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          console.log(req.params.id, req.body);
          const inventory = await Inventory.findByIdAndUpdate(
            req.params.id,
            { $set: invObj },
            { new: true }
          );
          if (inventory) {
            console.log("Inventory updated successful", inventory);
            res.json({
              success: true,
              status: "Inventory upated successful!",
              inventory: inventory,
            });
          } else {
            console.log("Inventory not updated");
            res.json({
              success: true,
              status: "Inventory not upated!",
            });
          }

          // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        } else {
          console.log(`Invalid InventoryId: ${req.params.id}`);
          res.json({
            success: true,
            status: `Invalid InventoryId: ${req.params.id}`,
          });
        }
      }
    }
  } catch (error) {
    return res.json({ success: false, status: "Internal Server Error!" });
  }
};
