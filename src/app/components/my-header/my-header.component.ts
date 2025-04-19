import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-my-header',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent  implements OnInit {
  @Input() name = 'Лабораторні роботи';

  constructor() { }

  ngOnInit() {}

}
