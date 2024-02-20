import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  query,
  setDoc,
} from '@angular/fire/firestore';
import { getDocs } from 'firebase/firestore';

export interface UserForm {
  name: string;
  surname: string;
  email: string;
  pass: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public auth: Auth, public firestore: Firestore) {}

  async register(userForm: UserForm) {
    try {
      // 1. Adauga utilizator in fire auth (authentication)
      const createUserResponse = await createUserWithEmailAndPassword(
        this.auth,
        userForm.email,
        userForm.pass
      );

      // 2. Adaugare in firestore
      const user = {
        ...userForm,
        uid: createUserResponse.user.uid,
        role: 'USER',
      };
      const docRef = doc(
        this.firestore,
        `users/${createUserResponse.user.uid}`
      );

      await setDoc(docRef, user);
      console.log('User added to Firestore');
      return user;
    } catch (er: any) {
      if (er.message.includes('email-already-in-use')) {
        throw new Error('Email already exists');
      } else {
        throw new Error('Generic error');
      }
    }
  }

  async signin(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  async logout() {
    return this.auth.signOut();
  }

  async getUsers() {
    let userDetails = (await this.getUserFullDetails(
      this.getUserId() || ''
    )) as any;
    if (userDetails.role === 'ADMIN') {
      const userCollection = collection(this.firestore, 'users');
      return getDocs(query(userCollection));
    }
    throw new Error('Error accessing the current user');
  }

  async getUser() {
    const auth = getAuth();
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe(); // Unsubscribe after receiving the first result
          resolve(user); // Resolve the promise with the user object
        },
        reject
      ); // Reject the promise on error
    });
  }



  getUserId() {
    return this.auth.currentUser?.uid;
  }

  async getUserFullDetails(userId: string) {
    const userRef = doc(this.firestore, 'users', userId);
    const userDoc = await getDoc(userRef);
    return userDoc.data();
  }

  onAuthStateChangedReturn(fn: any) {
    return onAuthStateChanged(this.auth, fn);
  }
}
