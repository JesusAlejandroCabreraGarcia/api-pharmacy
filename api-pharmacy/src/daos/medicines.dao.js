import Medicine from "../models/Medicine.js";
const medicinesDAO = {};
medicinesDAO.getAll = async ()=> {
    return await Medicine.find();
}

export default medicinesDAO;