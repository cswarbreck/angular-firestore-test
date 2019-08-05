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

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(cars => {
      console.log(cars);
      this.cars = cars;
    });
  }

  deleteCar(event, car) {
    this.carsService.deleteCar(car);
  }

}
