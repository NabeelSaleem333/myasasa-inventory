const Inventory = require("../inventory.model");
var fs = require('fs');
const inventoryRouter = require("../inventory.router");
const { FORMERR } = require("dns");

//
/* 
This function is used to update the inventory
any type of detail can be upated
*/

exports.delete = async (req, res) => {
  try {

    console.log("Id: ", req.params.id);
    //
    const inventoryfind = await Inventory.findById(req.params.id);
    console.log("Inventory Found:",inventoryfind);
    if(inventoryfind) {
    //
    //
    const inventory = await Inventory.findByIdAndRemove(req.params.id);
    console.log("Inventory delete: ",inventory);
    if(inventory) {
      console.log(inventoryfind.property_images);
      for (let images of inventoryfind.property_images) {
       console.log(`images: `,images);
      var sourceUrls = `public/images/${images}`;
      fs.unlink(sourceUrls, function(err) {
        if (err) {
          throw err
        } else {
          console.log("Successfully deleted the file.", sourceUrls);
        }
      });
      }
      res.json({
        success: true,
        status: "Inventory deleted successful!",
        inventory: inventory,
      });
    } else {
      res.json({
        success: false,
        status: `DataBase error in deleting inventory!`,
      });
    }
  } else {
    res.json({
      success: false,
      status: `No inventory record exists: ${req.params.id}`,
    });
  }
    // 
    
  } catch (error) {
    return res.json({ success: false, status: "Internal Server Error!" });
  }
};
