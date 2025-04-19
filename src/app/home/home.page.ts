import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../components/my-header/my-header.component';
import { ViewProductsComponent } from '../components/view-products/view-products.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MyHeaderComponent, ViewProductsComponent],
})
export class HomePage {
  constructor() {}
}
