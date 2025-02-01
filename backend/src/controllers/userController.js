// controllers/userController.js
import * as userService from '../services/userService.js';
import { userSchema } from '../validations/userValidation.js';

export const createUser = async (req, res) => {
  try {
    await userSchema.validate(req.body);
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
