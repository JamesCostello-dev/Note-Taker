const router = require('express').Router();
const notes = require('../../data/notes');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  fs.writeFileSync(path.join(__dirname, '../../data/notes'),
    JSON.stringify(notes, null, 2));
  res.json(req.body);
});

module.exports = router;