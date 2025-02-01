// services/userService.js
import * as userRepository from '../repositories/userRepository.js';

export const createUser = async (data) => {
  try {
    return await userRepository.createUser(data);
  } catch (error) {
    throw error;
  }
};
