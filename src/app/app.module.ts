import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CarsComponent } from './components/cars/cars.component';
import { ItemsService } from './services/items.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCarComponent } from './components/add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NavbarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'cars-tech-test'),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
