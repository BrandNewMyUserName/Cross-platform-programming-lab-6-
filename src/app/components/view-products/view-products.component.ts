import { ProductType } from '../../class/ProductType';
import { ConfigService } from '../../service/config/config.service';
import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../service/read/read.service';
import { iProduct } from '../../class/interfaces/iProduct';
import { IonCard, IonButton, IonCardHeader, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonLabel, IonContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { EditProductComponent } from '../../product-operations/edit-product/edit-product.component';
import { AddProductComponent } from '../../product-operations/add-product/add-product.component';
import { productType } from '../../class/ProductType';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [IonContent, 
    IonLabel, IonCardTitle, IonCard, IonButton, IonCardHeader, IonItem,
    IonCardContent, IonCardSubtitle, CommonModule,
    AddProductComponent, EditProductComponent
  ],
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
})
export class ViewProductsComponent implements OnInit {

  constructor(public readService: ReadService) {} 


  async ngOnInit(): Promise<void> {
    try {
      await this.readService.load();
      console.log('Продукти ініціалізовані:', this.readService.products);
      
    } catch (error) {
      console.error('Помилка при ініціалізації компонента:', error);
    }
  }

  showAddForm = false;
  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: iProduct) {
    console.log('Додано новий продукт:', $event);
    this.readService.addProduct($event);
    this.showAddForm = false;
  }

  showEditForm = false;
  editFormnumber = 0;
  editFormShow(i: number) {
    this.showEditForm = true;
    this.editFormnumber = i;
  }

  editProduct($event: iProduct, i: number) {
    console.log('Оновлено продукт:', $event);
    this.readService.updateProduct(i, $event);
    this.showEditForm = false;
  }

  deleteProduct(i: number) {
    console.log('Видалено продукт за індексом:', i);
    this.readService.removeProduct(i);
  }

}