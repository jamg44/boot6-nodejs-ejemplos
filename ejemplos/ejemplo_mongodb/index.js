'use strict';

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost/cursonode', (err, db) => {
  if (err) {
    process.exit(1);
  }
  db.collection('agentes').find().toArray((err, docs) => {
    if (err) {
      process.exit(1);
    }
    console.log(docs);
    db.close();
  });
});