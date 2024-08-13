import { Router } from "express";
import { getAll, insertMedicine } from "../controllers/medicines.controllers.js";
const routerMedicines = Router();
routerMedicines.get("/getAll", getAll);
routerMedicines.post("/insertMedicine", insertMedicine);
export default routerMedicines;