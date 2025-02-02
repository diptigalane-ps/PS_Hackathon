// controllers/userController.js
import * as userService from '../services/userService.js';
import { userSchema } from '../validations/userValidation.js';
import moment from "moment";

export const createUser = async (req, res) => {
  try {
    await userSchema.validate(req.body);
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDashboardData = async (req, res) => {
  try {
    let { month } = req.body;
    const userId = req.user.id; // Assuming user ID is available in the request

    month = month || moment().format('MMM');
    const startDate = moment(month, 'MMM').startOf('month');
    let endDate = moment(month, 'MMM').endOf('month');
    if (endDate.isAfter(moment())) {
      endDate = moment().endOf('day');
    }

    const data = await userService.getDashboardData(userId, startDate, endDate);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

