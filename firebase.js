
const jsonfibase = require('./firebasedata/constructorapp-fdffb-firebase-adminsdk-h2cod-ecb73572bf.json')

const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL:'https://constructorapp-fdffb-default-rtdb.firebaseio.com'
})

const db = admin.database()


module.exports={
  db
}
