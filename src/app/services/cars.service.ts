import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CarModel } from '../models/car-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CarsService {
  carsCollection: AngularFirestoreCollection<CarModel>;
  cars: Observable<CarModel[]>;
  carDoc: AngularFirestoreDocument<CarModel>;

  constructor(public afs: AngularFirestore) {
    // this.cars = this.afs.collection('cosmo-cars').valueChanges();

    this.carsCollection = this.afs.collection('cosmo-cars', ref => ref.orderBy('manufacturer', 'asc'));

    this.cars = this.carsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CarModel;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getCars() {
     return this.cars;
   }

   addCar(car: CarModel) {
     this.carsCollection.add(car);
   }

   deleteCar(car: CarModel) {
    this.carDoc = this.afs.doc(`cosmo-cars ${car.id}`);
    this.carDoc.delete();
   }
}
