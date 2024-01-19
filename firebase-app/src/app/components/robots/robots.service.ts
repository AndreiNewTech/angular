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
import { switchMap } from 'rxjs';
import { UserService } from '../user/user.service';

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
  collectionRef = collection(this.firestore, 'roboti');

  constructor(public firestore: Firestore, public userService: UserService) {}

  // CRUD
  // READ and Listen
  getRobotsChanges() {
    return collectionChanges(query(collection(this.firestore, 'roboti'))).pipe(
      switchMap(async () => {
        const val = await this.getUserDocsList('roboti');
        return val;
      })
    );
  }

  // CREATE
  addRobot(robot: any) {
    try {
      addDoc(this.collectionRef, robot).then((docRef) => {
        console.log('Robot added');
      });
    } catch (error) {
      console.error('Problem adding Doc');
    }
  }

  // UPDATED
  updateRobot(robotId: string) {
    const docRef = doc(this.firestore, 'roboti', robotId);

    try {
      updateDoc(docRef, { nume: 'RobotX' }).then(() => {
        console.log('Robot updated');
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
        console.log('Doc deleted');
      });
    } catch {
      console.error('Problem deleting doc');
    }
  }

  private async getUserDocsList(
    listIdName: string,
    whereClauseObj: WhereClauseI = {},
    orderByObj: OrderByI = {}
  ) {
    const user = this.userService.getUser();
    const userId = user?.uid || '';

    if (!userId) throw new Error('User not logged');

    // Initialize the base query with the collection
    let queryRef = query(
      collection(this.firestore, listIdName),
      where('userId', '==', userId)
    );

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
}
