////TOURS ROUTER
const express = require('express');
const {
  getAllTours,
  createNewTour,
  getOneTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody
} = require('../Controllers/tourController');

const tourRouter = express.Router();

tourRouter.param('id', checkID);

tourRouter
  .route('/')
  .get(getAllTours)
  .post(checkBody, createNewTour);
tourRouter
  .route('/:id')
  .get(getOneTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = tourRouter;
