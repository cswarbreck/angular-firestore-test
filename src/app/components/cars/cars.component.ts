import { Component, OnInit } from '@angular/core';

import { CarsService } from '../../services/cars.service';
import { CarModel } from '../../models/car-model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: CarModel[];
  editState: boolean = false;
  carToEdit: CarModel;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(cars => {
      console.log(cars);
      this.cars = cars;
    });
  }

  deleteCar(event, car: CarModel) {
    this.clearState();
    this.carsService.deleteCar(car);
  }

  editCar(event, car: CarModel) {
    this.editState = true;
    this.carToEdit = car;
  }

  updateCar(car: CarModel) {
    this.carsService.updateCar(car);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.carToEdit = null;
  }

}
