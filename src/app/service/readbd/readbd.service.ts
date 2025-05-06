import { Injectable } from '@angular/core';
import { Database, ref, onValue, push, set, update, remove } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { ProductFactory } from 'src/app/class/factory/productFactory';
import { iProduct } from 'src/app/class/interfaces/iProduct';

@Injectable({
  providedIn: 'root'
})

export class ReadbdService {
    // Повідомлення об'єкт для відстеження продуктів
    private productsSubject = new BehaviorSubject<iProduct[]>([]);
    products$ = this.productsSubject.asObservable(); // Публічний потік продуктів
  
    constructor(private db: Database) {}
  
    // Метод для завантаження продуктів з Firebase
    fetchProducts(): void {
      
      // Створюємо посилання на сайт продуктів у Firebase
      const productsRef = ref(this.db, 'products');
      console.log("productsRef", productsRef);
  
      onValue(productsRef, (snapshot) => {
        // Отримуємо дані з Firebase
        // Метод snapshot.val() повертає об'єкт або null, якщо даних немає.
        const data = snapshot.val();
        // Перевіряємо, чи є дані у відповіді. Якщо дані присутні
        // ('data' не дорівнює null), виконуємо обробку.
        const products = data
          ? // Перетворюємо об'єкт `data` у масив пар [ключ, значення],
            // де ключ – це ідентифікатор продукту.
            Object.entries(data).map(([key, value]: [string, any]) =>
              // Використовуємо фабрику для створення продуктів
              // Передаємо об'єкт `value`, додаючи до нього `id` (ключ з Firebase).
              ProductFactory.createProduct({ ...value, id: key })
            )
          : [];
  
        // Оновлюємо стан продуктів
        this.productsSubject.next(products);
      });
    }
  
    // Метод для додавання продукту
    addProduct(product: iProduct): void {
      const productsRef = ref(this.db, 'products'); // Посилання на продукти в Firebase
      const newProductRef = push(productsRef); // Створюємо новий продукт
      set(newProductRef, {
        ...product,
        id: newProductRef.key,
        productType: product.getType(), // Зберігаємо тип продукту в Firebase
      });
    }
  
    // Метод для редагування продукту
    editProduct(updatedProduct: iProduct): void {
      console.log(updatedProduct);
      // Посилання на продукт за його id
      const productRef = ref(this.db, `products/${updatedProduct.getID()}`);
      update(productRef, updatedProduct); // Оновлюємо факт продукту в Firebase
    }
  
    // Метод для видалення продукту
    deleteProduct(productId: string): void {
      // Посилання на продукт за його id
      const productRef = ref(this.db, `products/${productId}`);
      remove(productRef); // Видаляємо продукт з Firebase
    }
  }
