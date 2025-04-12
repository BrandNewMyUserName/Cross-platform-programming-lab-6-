import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { ViewAntiquesComponentComponent } from '../view-antiques-component/view-antiques-component.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MyHeaderComponent, ViewAntiquesComponentComponent],
})
export class HomePage {
  constructor() {}
}
