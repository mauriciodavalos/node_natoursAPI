const moongose = require('mongoose');

const tourSchema = new moongose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  price: { type: Number, required: [true, 'A tour must have a price'] },
  rating: { type: Number, default: 4.5 }
});

const Tour = moongose.model('Tour', tourSchema);

module.exports = Tour;
