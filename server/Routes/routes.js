import express from 'express';
import { adduser , getuser } from '../controller/usercontroller.js';

const router = express.Router();
router.post('/add', adduser )
router.get('/users', getuser )


export default router ; 