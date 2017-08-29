const express = require('express');

const router = express.Router();
const db = require('./queries');

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/api/countries', db.getAllCountries);
router.get('/api/countries/:id', db.getSingleCountry);

router.get('/api/cities', db.getAllCities);
router.get('/api/demo', (req, res, next) => {
  res.json({
    ID: null,
    name: 'Doe',
    'first-name': 'John',
    age: 25,
    hobbies: ['reading', 'cinema', { sports: ['volley-ball', 'badminton'] }],
    address: {},
  });
});
router.get('/api/cities/:id', db.getSingleCity);

router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);

module.exports = router;
