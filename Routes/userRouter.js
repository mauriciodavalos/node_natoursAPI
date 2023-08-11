////USERS ROUTER
const express = require('express');
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser
} = require('../Controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUser);
userRouter
  .route('/:id')
  .get(getOneUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
