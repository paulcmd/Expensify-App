import * as firebase from 'firebase'

//import * as, imports all named exports into the firebase variable. just how firebase works

const firebaseConfig = {
     apiKey: "AIzaSyDkaBU50wNfDFHbSQKHc8_8yuVuQA3QKkU",
     authDomain: "expensify-e9e0c.firebaseapp.com",
     databaseURL: "https://expensify-e9e0c-default-rtdb.firebaseio.com",
     projectId: "expensify-e9e0c",
     storageBucket: "expensify-e9e0c.appspot.com",
     messagingSenderId: "835930251840",
     appId: "1:835930251840:web:a30f11bd4119af048675a5",
     measurementId: "G-DNEYS9E0SF"
   };

   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // .ref method references the root of the database. .set() allows us to set the data we want to set
  firebase.database().ref().set({
       name:  'Paul Wachira'
  })
