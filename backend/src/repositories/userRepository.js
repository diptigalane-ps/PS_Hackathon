// repositories/userRepository.js
import User from '../models/user.js';

/**
 * Create a new user in the database.
 * @param {Object} data - The user data to be saved.
 * @returns {Promise<Object>} The created user object.
 */
export const createUser = async (data) => {
  return await User.create(data);
};

/**
 * Retrieve all users from the database.
 * @returns {Promise<Array>} An array of user objects.
 */
export const getAllUsers = async () => {
  return await User.findAll();
};

/**
 * Retrieve a user by their ID.
 * @param {number} id - The ID of the user to retrieve.
 * @returns {Promise<Object|null>} The user object or null if not found.
 */
export const getUserById = async (id) => {
  return await User.findByPk(id);
};

/**
 * Retrieve a user by their email.
 * @param {string} email - The email of the user to retrieve.
 * @returns {Promise<Object|null>} The user object or null if not found.
 */
export const findByEmail = async (email) => {
  return await User.findOne({ where: { email_id: email } });
};

/**
 * Update a user's information.
 * @param {number} id - The ID of the user to update.
 * @param {Object} data - The updated user data.
 * @returns {Promise<Object|null>} The updated user object or null if not found.
 */
export const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.update(data);
  }
  return null;
};

/**
 * Delete a user from the database.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<boolean>} True if the user was deleted, false otherwise.
 */
export const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};
