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
  updateDoc,
  doc,
  collectionChanges,
  orderBy,
} from '@angular/fire/firestore';
import { WhereFilterOp } from 'firebase/firestore';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';

interface WhereClauseI {
  rightVal?: string;
  centerVal?: WhereFilterOp;
  leftVal?: string | number;
}

interface OrderByI {
  pathProperty?: string;
  order?: 'asc' | 'desc';
}

@Injectable({
  providedIn: 'root',
})
export class RobotsService {
  robotsObs$ = new BehaviorSubject<any>([]);
  collectionRef = collection(this.firestore, 'roboti');

  constructor(public firestore: Firestore) {
    const queryRef = query(collection(this.firestore, 'roboti'));
    // console.log(queryRef);
    // console.log(collectionChanges(queryRef));
    // collectionChanges(this.collectionRef).subscribe((val) => console.log(val));
  }

  // CRUD

  //  READ
  getRobotsCollection(): Observable<any> {
    this.getDocsList('roboti').then((robotiList) => {
      this.robotsObs$.next(robotiList);
    });

    return this.robotsObs$.asObservable();
  }

  // CREATE
  addRobot(robot: any) {
    try {
      addDoc(this.collectionRef, robot).then((docRef) => {
        getDoc(docRef).then((docRealValue) => {
          this.robotsObs$.next([
            ...this.robotsObs$.getValue(),
            docRealValue.data(),
          ]);
        });
      });
    } catch (error) {
      console.error('Problem adding Doc');
    }
  }

  // UPDATED
  updateRobot(robotId: string) {
    const docRef = doc(this.firestore, 'roboti', robotId);

    try {
      updateDoc(docRef, { nume: 'RobotB' }).then(() => {
        // console.log(doc);
        this.getDocsList('roboti').then((robotiList) => {
          this.robotsObs$.next(robotiList);
        });
      });
    } catch (error) {
      console.error('Problem updating doc');
    }
  }

  // DELETE
  deleteRobot(robotId: string) {
    try {
      const docRef = doc(this.firestore, 'roboti', robotId);
      deleteDoc(docRef).then(() => {
        this.getDocsList('roboti').then((robotiList) => {
          this.robotsObs$.next(robotiList);
        });
      });
    } catch {
      console.error('Problem deleting doc');
    }
  }

  private async getDocsList(
    listIdName: string,
    whereClauseObj: WhereClauseI = {},
    orderByObj: OrderByI = {}
  ) {
    // Initialize the base query with the collection
    let queryRef = query(collection(this.firestore, listIdName));

    // Add 'where' clause if the necessary properties exist
    if (
      whereClauseObj?.rightVal &&
      whereClauseObj?.centerVal &&
      whereClauseObj?.leftVal
    ) {
      queryRef = query(
        queryRef,
        where(
          whereClauseObj.rightVal,
          whereClauseObj.centerVal,
          whereClauseObj.leftVal
        )
      );
    }

    // Add 'orderBy' clause if the pathProperty exists
    if (orderByObj?.pathProperty) {
      const orderDirection = orderByObj.order || 'asc'; // Default to 'asc' if no order is specified
      queryRef = query(
        queryRef,
        orderBy(orderByObj.pathProperty, orderDirection)
      );
    }

    const docs = await getDocs(queryRef);
    const genericList = [] as any;

    docs.forEach((val: any) => {
      genericList.push({
        id: val.id,
        ...val.data(),
      });
    });

    return genericList;
  }

  getRobotsChanges() {
    return collectionChanges(query(collection(this.firestore, 'roboti'))).pipe(
      switchMap(async () => {
        const val = await this.getDocsList('roboti');
        return val;
      })
    );
  }
}
