import Medicine from "../models/Medicine.js";
const medicinesDAO = {};
medicinesDAO.getAll = async ()=> {
    return await Medicine.find();
}
medicinesDAO.insertMedicine = async (medicine) => {
    return await Medicine.create(medicine);
}

medicinesDAO.getOne = async (barcode) => {
    return await Medicine.findOne({barcode:barcode});
}


medicinesDAO.deleteOne = async (barcode) => {
    return await Medicine.findOneAndDelete({barcode:barcode});
}

medicinesDAO.updateOne = async (barcode, medicine) => {
    return await Medicine.findOneAndUpdate({barcode:barcode}, medicine);
}

export default medicinesDAO;