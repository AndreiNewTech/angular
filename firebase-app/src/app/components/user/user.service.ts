import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public auth: Auth, public firestore: Firestore) {}

  async register(email: string, pass: string, age: string) {
    try {
      const createUserResponse = await createUserWithEmailAndPassword(
        this.auth,
        email,
        pass
      );
      const user = {
        email,
        uid: createUserResponse.user.uid,
        age,
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

  getUser() {
    return this.auth.currentUser;
  }

  onUserStateChanged(fn: any) {
    return this.auth.onAuthStateChanged(fn);
  }
}
