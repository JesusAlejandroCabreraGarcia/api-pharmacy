import medicinesDAO from "../daos/medicines.dao.js";
export const getAll = async (req, res) => {
    await medicinesDAO.getAll()
    .then((medicines) => {
        res.json(medicines);
    })
    .catch((err) => {
        res.json({message:err})
    });
}