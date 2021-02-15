// import something here
import Vue from 'vue'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBgEuqlnaZ5X0dSNudef8MajB9Wb8mubh8',
  authDomain: 'orthodomapp.firebaseapp.com',
  projectId: 'orthodomapp',
  storageBucket: 'orthodomapp.appspot.com',
  messagingSenderId: '798033988824',
  appId: '1:798033988824:web:ab86d6bcd4c8da89445bad',
  measurementId: 'G-DD7KXSJ0L9'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.firestore().enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      console.log(err)
    } else if (err.code === 'unimplemented') {
      console.log(err)
    }
  })

const db = firebase.firestore()

Vue.prototype.$db = db
Vue.prototype.$firebase = firebase

// 'async' is optional
export { db, firebase }
