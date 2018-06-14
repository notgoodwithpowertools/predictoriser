import React, { Component } from 'react';

import { firestoreDB } from './api/firebase/index.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    console.log("App.js...");

    var docRef = firestoreDB.collection('users').doc('alovelace');

    var Ada = {
       first: 'Ada',
       last: 'Lovelace',
       born: 1815
    };

    var aTuringRef = firestoreDB.collection('users').doc('aturing');

    var setAlan = aTuringRef.set({
      'first': 'Alan',
      'middle': 'Mathison',
      'last': 'Turing',
      'born': 1912
    });

    // Allow read/write access on all documents to any user signed in to the application
    // service cloud.firestore {
    //   match /databases/{database}/documents {
    //     match /{document=**} {
    //       allow read, write: if request.auth.uid != null;
    //     }
    //   }

    docRef.set(Ada);
    firestoreDB.collection('users').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

    var doc = firestoreDB.collection('cities').doc('SF');

    var observer = doc.onSnapshot(docSnapshot => {
      console.log(`Received doc snapshot: ${docSnapshot}`);
    // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    });


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
