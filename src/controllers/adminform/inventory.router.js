const express = require('express');
//
const saveInventory = require('./operations/save.inventory');
const getInventory = require('./operations/get.inventory');
const updateInventory = require('./operations/update.inventory');
const deleteInventory = require('./operations/delete.inventory');

//
const inventoryRouter = express.Router();
/* 
Routers for the Inventory Form
Which is basically used by admin
of the system.
*/
// @@@@@@@@@@@@@@@@@@@@@@
const multer = require("multer");
//

/* 
A method to upload files to the nodejs server
Using multer module
*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    cb(new Error("You can only upload image files", false));
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });
// @@@@@@@@@@@@@@@@@@@@@@

inventoryRouter.post('/save', upload.array("file", 10),saveInventory.save);
inventoryRouter.get('/get', getInventory.get);
inventoryRouter.put('/update/:id' ,upload.array("file", 10), updateInventory.update);
inventoryRouter.delete('/delete/:id', deleteInventory.delete);
//
module.exports = inventoryRouter;