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
export const insertMedicine = async (req, res)=>{
    await medicinesDAO.insertMedicine(req.body)
    .then((medicine) => {
        res.json(medicine);
    })
    .catch((err) => {
        res.json({message:err})
    });
}
export const getOne = async (req, res)=>{
    await medicinesDAO.getOne(req.params.barcode)
    .then((medicine) => {
        if(medicine!=null)
            res.json(medicine);
        else
            res.json({message:"Medicineasa not Afound"})
    })
    .catch((err) => {
        res.json({message:err})
    });
}

export const deleteOne = async (req, res)=>{
    await medicinesDAO.deleteOne(req.params.barcode)
    .then((medicine) => {
        if(medicine!=null)
            res.json(medicine);
        else
            res.json({message:"Medicine not Afound"})
    })
    .catch((err) => {
        res.json({message:err})
    });
}

export const updateOne = async (req, res)=>{
    await medicinesDAO.updateOne(req.params.barcode,req.body)
    .then((medicine) => {
        if(medicine!=null)
            res.json({message:"Medicine update"});
        else
            res.json({message:"Medicinenot Afound"})
    })
    .catch((err) => {
        res.json({message:err})
    });
}