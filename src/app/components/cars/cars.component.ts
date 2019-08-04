import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';
// import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

  deleteItem(event, item) {
    this.itemsService.deleteItem(item);
  }

}
