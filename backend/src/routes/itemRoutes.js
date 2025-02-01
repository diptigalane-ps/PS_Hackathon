import express from 'express';
import verifyToken from "../middleware/auth.js";
import * as itemController from '../controllers/itemController.js';

const router = express.Router();

router.post('/items', itemController.createItem);
router.get('/items', verifyToken, itemController.getItems);
router.get('/items/:id', itemController.getItemById);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

export default router;
