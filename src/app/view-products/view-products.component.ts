import { Component, OnInit } from '@angular/core';
import { ReadService } from '../service/read.service';
import { iProduct } from '../class/interfaces/iProduct';
import { IonCard, IonButton, IonCardHeader, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [IonLabel, IonCardTitle, IonCard, IonButton, IonCardHeader, IonItem, IonCardContent, IonCardSubtitle, CommonModule],
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
})
export class ViewProductsComponent implements OnInit {
  products: iProduct[] = []; // Використовуємо Product, припускаючи, що iProduct сумісний

  constructor(private readService: ReadService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.readService.load(); // Завантажуємо дані через сервіс
      this.products = this.readService.antiques; // Отримуємо список продуктів
      console.log(this.products); // Виводимо список продуктів у консоль
    } catch (error) {
      console.error('Помилка при ініціалізації компонента:', error);
    }
  }

  removeProduct(index: number): void {
    this.readService.removeAntique(index); // Видаляємо продукт через сервіс
    this.products = this.readService.antiques; // Оновлюємо список продуктів
  }
}