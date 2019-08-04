import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  item: Item = {
    image: '',
    manufacturer: '',
    model: '',
  };

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
