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
import { FieldPath, WhereFilterOp } from 'firebase/firestore';
import { switchMap } from 'rxjs';
import { UserService } from 'src/app/services/auth/user.service';

interface WhereClauseI {
  leftVal?: string | FieldPath;
  centerVal?: WhereFilterOp;
  rightVal?: string;
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

  async getRobot(robotId: string) {
    const robotDocRef = doc(this.firestore, 'roboti', robotId);
    const docData = await getDoc(robotDocRef);
    return docData.data();
  }

  // CRUD
  // READ and Listen
  getRobotsChanges(userRole = 'USER', queryObjList: any = []) {
    return collectionChanges(query(collection(this.firestore, 'roboti'))).pipe(
      switchMap(async () => {
        const val = await this.getUserDocsList(
          'roboti',
          userRole,
          queryObjList
        );
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
  async updateRobot(robotFormData: any, robotId: string) {
    const docRef = doc(this.firestore, 'roboti', robotId);
    return updateDoc(docRef, robotFormData);
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
    role: string = 'USER',
    whereClauseObjList: WhereClauseI[] = [],
    orderByObj: OrderByI = {}
  ) {
    const user = (await this.userService.getUser()) as any;
    const userId = user?.uid || '';

    console.log(whereClauseObjList);

    if (!userId) return;

    const retQuery = () => {
      const userWhereClause = where('userId', '==', userId);
      const adminWhereClause = where('userId', '!=', '');
      const arrWhereClause = [];

      if (role === 'USER') {
        arrWhereClause.push(userWhereClause);
      }

      if (role === 'ADMIN') {
        arrWhereClause.push(adminWhereClause);
      }

      if (whereClauseObjList.length > 0) {
        whereClauseObjList.forEach((clause) => {
          arrWhereClause.push(clause);
        });
      }

      return arrWhereClause;
    };

    let queryRef = query(collection(this.firestore, listIdName), ...retQuery());

    console.log(queryRef);

    // Initialize the base query with the collection
    // if (role === 'USER') {
    //   queryRef = query(collection(this.firestore, listIdName), ...retQuery());
    // } else {
    //   // Is admin
    //   queryRef = query(
    //     collection(this.firestore, listIdName),
    //     where('userId', '!=', '')
    //   );
    // }

    // Add 'where' clause if the necessary properties exist

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
