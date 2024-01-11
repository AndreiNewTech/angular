import { Component } from '@angular/core';
// import { initializeApp } from 'firebase/app';

// import {
//   getFirestore,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   // getDoc,
// } from 'firebase/firestore';

import {
  Firestore,
  query,
  collection,
  getDoc,
  getDocs,
  doc,
} from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public firestore: Firestore) {
    // const ref = query(collection(this.firestore, 'roboti'));
    // getDocs(query(collection(this.firestore, 'roboti'))).then((val) => {
    //   val;
    // });
    // getDocs(ref)
    //   .then((querySnapshot) => {
    //     console.log('val');
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.id, ' => ', doc.data());
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching documents: ', error);
    //   });
    // const app = initializeApp(environment.firebase);
    // const db = getFirestore(app);
    // const myCollectionRef = collection(db, 'roboti');
    // const myCollectionRef2 = doc(db, 'roboti', 'goSxvQZutaDTkHP8QLAM');
    // // const docVal = getDoc(myCollectionRef2);
    // updateDoc(myCollectionRef2, { name2: 'Hohohohoh' });
    // console.log(docVal.data);
    // Get doc
    // let docToUpdateRef: any;
    // getDocs(myCollectionRef)
    //   .then((val) => {
    //     val.forEach((el: any) => {
    //       // console.log(el.data(), 'Val');
    //       if (el.data()['name2']) {
    //         docToUpdateRef = doc(db, 'roboti', el.id);
    //         // console.log(docToUpdateRef.data);
    //       }
    //       console.log(el.id);
    //     });
    //     // console.log(docToUpdateRef);
    //     // updateDoc(docToUpdateRef, { name2: 'Hello' });
    //   })
    //   .finally(() => {
    //     // updateDoc(docToUpdateRef, { name2: 'Hello' });
    //   });
    // console;
    // Add doc
    // addDoc(myCollectionRef, {
    //   age: 3,
    //   color: 'red',
    //   name: 'John22',
    //   name2: 'John22',
    // });
    // // Update doc
    // console.log();
    // if (docToUpdateRef) {
    //   console.log('Test2  ');
    //   // console.log(docToUpdateRef, 'Test');
    //   updateDoc(docToUpdateRef, { name2: 'Hello' });
    // }
    // console.log(db);
  }
  title = 'firebase-app';
}
