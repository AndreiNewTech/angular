import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
  where,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RobotsService {
  constructor(public firestore: Firestore) {}

  async getRobotsCollection() {
    const robots = [] as any;
    const queryRef = query(collection(this.firestore, 'roboti'));

    const snapshot = await getDocs(queryRef);
    snapshot.forEach((val: any) => {
      robots.push({
        id: val.id,
        ...val.data(),
      });
    });
    return robots;
  }

  addRobot(robot: any) {
    addDoc(collection(this.firestore, 'roboti'), robot).then((val) => {
      console.log(val);
    });
  }

  deleteRobot(robotId: string) {
    try {
      const docRef = doc(this.firestore, 'roboti', robotId);
      console.log(docRef);
      deleteDoc(docRef);
    } catch {
      console.log('Error');
    }
  }
}
