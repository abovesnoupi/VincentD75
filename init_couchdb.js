// Initialize a couchdb development database

const nano = require('nano')('http://vincentd75:boston16@localhost:5984')

nano.db.create('vincentd75').then((body) => {
  const db = nano.use('vincentd75');

  // Rooms design doc
  db.insert({
    _id: '_design/rooms',
    views: {
      'by-createdAt': {
        map: "function (doc) {\n  if (doc.type === 'room') {\n    emit(doc.createdAt, doc);\n  }\n}"
      }
    }
  })
  .then(console.log)
    

  // Messages design doc
  db.insert({
    _id: '_design/messages',
    views: {
      'by-createdAt': {
        map: "function (doc) {\n  if (doc.type !== 'message') {\n    emit(doc._id, doc);\n  }\n}"
      }
    }
  })
  .then(console.log)

  // Ajouter des salles de test
  db.insert({
    type: 'room',
    title: 'test room 1',
    createdAt: new Date().toISOString()
  }).then((body) => {
    console.log('room added');
  });

  // Ajouter des salles de test
  db.insert({
    type: 'room',
    title: 'test room 2',
    createdAt: new Date().toISOString()
  }).then((body) => {
    console.log('room added');
  });
  
})


