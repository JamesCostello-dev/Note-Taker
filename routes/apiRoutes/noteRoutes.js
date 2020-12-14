const router = require('express').Router();
const notes = require('../../data/notes');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = uuidv4();
  notes.push(req.body);
  fs.writeFileSync(path.join(__dirname, '../../data/notes.json'),
    JSON.stringify(notes, null, 2));
  res.json(req.body);
});

module.exports = router;