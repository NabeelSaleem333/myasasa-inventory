const Inventory = require("../inventory.model");
//
exports.get = async (req, res) => {
  
try {
    // console.log(req.body);
    const inventory = await Inventory.find();
    console.log('Inventory: ',inventory);
    res.json({success: true, status: 'Inventory got!', inventory});
} catch (error) {
    res.json(error);
}
};