import { Router } from "express";
import v1Router from "./v1/v1_index.js";


const apiRouter = Router();

apiRouter.use('/v1' , v1Router);


export default apiRouter;