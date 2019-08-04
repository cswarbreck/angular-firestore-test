import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';

import { CarsService } from '../../services/cars.service';
import { CarModel } from '../../models/car-model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  car: CarModel = {
    image: '',
    manufacturer: '',
    model: '',
  };

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.car.image !== '' && this.car.manufacturer !== '' && this.car.model !== '') {
      this.carsService.addCar(this.car);
      this.car.image = '';
      this.car.manufacturer = '';
      this.car.model = '';
    }
  }

}
