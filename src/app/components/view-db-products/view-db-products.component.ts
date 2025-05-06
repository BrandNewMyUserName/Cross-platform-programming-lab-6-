import { ProductType } from '../../class/ProductType';
import { ConfigService } from '../../service/config/config.service';
import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../class/interfaces/iProduct';
import { IonCard, IonButton, IonCardHeader, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonLabel, IonContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { EditProductComponent } from '../../product-operations/edit-product/edit-product.component';
import { AddProductComponent } from '../../product-operations/add-product/add-product.component';
import { ReadbdService } from 'src/app/service/readbd/readbd.service'; 
import { productType } from '../../class/ProductType';
import { MyHeaderComponent } from '../my-header/my-header.component';
@Component({
  selector: 'app-view-db-products',
  templateUrl: './view-db-products.component.html',
  styleUrls: ['./view-db-products.component.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonCardSubtitle, IonLabel, IonItem, IonCardHeader, MyHeaderComponent, IonCardTitle, IonCard, IonButton, AddProductComponent, EditProductComponent, IonCardContent, MyHeaderComponent]
})
export class ViewDbProductsComponent implements OnInit {
  
    products: iProduct[] = [];
  
    constructor(public productService: ReadbdService) {} 
  
    ngOnInit(): void {
      this.productService.products$.subscribe((products) => {
        this.products = products;
      });
  
      this.productService.fetchProducts();
    }
  
    showAddForm = false;
    addFormShow() {
      this.showAddForm = true;
    }
  
    addProduct($event: iProduct) {
      this.productService.addProduct($event);
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
      this.productService.editProduct($event);
      this.showEditForm = false;
    }
  
    deleteProduct(i: number) {
      console.log('Видалено продукт за індексом:', i);
      // this.productService.removeProduct(i);
    }
  
  }
  
  // export class ViewProductsComponent implements OnInit {
  
  //   //!!Лабораторна робота №9
  //     products: iProduct[] = [];
  //     showAddForm = false;
    
  //     addFormShow() {
  //       this.showAddForm = true;
  //     }
    
  //     addProduct($event: any) {
  //       this.readService.addProduct($event);
  //       this.showAddForm = false;
  //     }
    
  //     showEditForm = false;
  //     editFormnumber = 0;
    
  //     editFormShow(i: number) {
  //       this.showEditForm = true;
  //       this.editFormnumber = i;
  //     }
    
  //     editProduct($event: any, i: number) {
  //       this.readService.editProduct($event);
  //       this.showEditForm = false;
  //     }
    
  //     constructor(public readService: ReadService) {}
    
  //     ngOnInit(): void {
  //       this.readService.products$.subscribe((products) => {
  //         this.products = products;
  //       });
    
  //       this.readService.fetchProducts();
  //     }
  //   }
    
