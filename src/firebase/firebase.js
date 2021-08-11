import * as firebase from 'firebase'

//import * as, imports all named exports into the firebase variable. just how firebase works

const firebaseConfig = {
    apiKey: 'AIzaSyDkaBU50wNfDFHbSQKHc8_8yuVuQA3QKkU',
    authDomain: 'expensify-e9e0c.firebaseapp.com',
    databaseURL: 'https://expensify-e9e0c-default-rtdb.firebaseio.com',
    projectId: 'expensify-e9e0c',
    storageBucket: 'expensify-e9e0c.appspot.com',
    messagingSenderId: '835930251840',
    appId: '1:835930251840:web:a30f11bd4119af048675a5',
    measurementId: 'G-DNEYS9E0SF'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

// database
//     .ref()
//     .set({
//         name: 'Paul Wachira',
//         age: 30,
//         isSingle: true,
//         location: {
//             city: 'Tucson',
//             country: 'United States'
//         }
//     })
//     .then(() => {
//         console.log('The data is saved') // the promise in this case returns nothing. this is just to inform that data was saved
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })

// database.ref().update({
//     name: 'Paul Wachira',
//     age:25 ,
//     isSingle: null,
//     location: {
//         city: 'Tucson',
//         country: 'United States'
//     },
//     job: 'Software developer'
// })
// .then(() => {
//         console.log('The data is saved') // the promise in this case returns nothing. this is just to inform that data was saved
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })

// database           // removing a specific object
//     .ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data was removed')
//     })
//     .catch(() => {
//         console.log('did not remove data')
//     })
// database.ref('isSingle').remove(null) // passing null to remove removes the data as well


// database.ref().update({
//     name: 'Mike',
//     age: 33 ,
//     job: 'Software developer'
// })

// database.ref()
//     .once('value')
// .then((snapshot) => {
//     console.log('Snapshot : ', snapshot.val())
// }).catch((e) => {
//     console.log('Error : ', e)
// })

//.once queries the db once

// database.ref().on('value', (snapshot) => {
//     console.log('Snapshot : ', snapshot.val())
// })
    // .on queries the db every time data changes




/*

How to run : yarn run dev-server 
localhost:8080

to update a nest object, use '' eg. updating city :
'location/city' : "Boston"
  ref() references different parts of the db/tables
  if we pass nothing to ref() we access the root of the db
  set() sets a value for that reference 

  database.ref().set('This is my data') updates db to just this string

  database.ref('age').set(30) updates just the age

  database.ref('location/city').set('Phoenix') updates city in location object


  */
