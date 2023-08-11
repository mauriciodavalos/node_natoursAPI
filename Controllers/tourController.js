const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

const checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);

  const id = Number(val);
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).send({
      status: 'Fail',
      message: 'ID NOT Valid'
    });
  }
  next();
};

const checkBody = (req, res, next) => {
  console.log('req.body.price', req.body.price);

  if (!req.body.price || !req.body.name) {
    console.log('error not price defined');
    return res.status(400).send({
      status: 'Fail',
      message: 'Fail to create Tour: Name or Price not defined'
    });
  }
  next();
};

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
};

const getOneTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'success2',
    data: {
      tour
    }
  });
};

const createNewTour = (req, res) => {
  const newId = tours.length;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
};

const updateTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  res.status(201).json({
    status: 'Fail',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

const deleteTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  res.status(204).json({
    status: 'success',
    data: null
  });
};

module.exports = {
  getAllTours,
  getOneTour,
  createNewTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody
};
