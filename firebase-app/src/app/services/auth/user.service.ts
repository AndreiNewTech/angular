import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';

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
      const createUserResponse = await createUserWithEmailAndPassword(
        this.auth,
        userForm.email,
        userForm.pass
      );

      const user = {
        ...userForm,
        uid: createUserResponse.user.uid,
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

  async getUserFullDetails(userId: string) {
    const userRef = doc(this.firestore, 'users', userId);
    const userDoc = await getDoc(userRef);

    return userDoc.data();
  }

  onUserStateChanged(fn: any) {
    return this.auth.onAuthStateChanged(fn);
  }
}
