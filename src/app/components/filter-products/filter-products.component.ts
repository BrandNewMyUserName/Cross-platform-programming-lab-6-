import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductType, productType } from 'src/app/class/ProductType';
import { ConfigService } from 'src/app/service/config/config.service';
import { ReadService } from 'src/app/service/read/read.service';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCardTitle, IonButton, IonLabel, IonItem, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonInput, IonSelect, IonSelectOption, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [
    IonCardSubtitle, IonCardContent, IonCardHeader, IonCard, IonItem, IonContent, 
    IonCardTitle, IonButton, IonLabel, IonInput, IonSelect, IonSelectOption, 
    IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, 
    MyHeaderComponent, CommonModule, FormsModule
  ],
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss'],
})
export class FilterProductsComponent implements OnInit {
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];

  productService = new ReadService(this.configService);
  productTypesReading: ReadonlyArray<ProductType> = productType;
  selectedType: ProductType = productType[0];
  countryFilter: string = '';
  minPriceFilter: number | null = null;
  maxPriceFilter: number | null = null;
  isFilterModalOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.productService.load();
    const typeSub = this.configService.type$.subscribe(() => {
      this.selectedType = this.configService.type$.value;
    });
    this.subscriptions.push(typeSub);
    console.log('typeSub:', typeSub);

    this.configService.setType(this.selectedType);
  }

  onTypeChange() {
    this.configService.setType(this.selectedType);
  }

  openFilterModal() {
    this.isFilterModalOpen = true;
  }

  closeFilterModal() {
    this.isFilterModalOpen = false;
  }

  applyFilters() {
    this.productService.search(this.selectedType, this.countryFilter, this.minPriceFilter, this.maxPriceFilter);
    this.closeFilterModal();
  }

  clearFilters() {
    this.countryFilter = '';
    this.minPriceFilter = null;
    this.maxPriceFilter = null;
    this.productService.search(this.selectedType, '', null, null);
    this.closeFilterModal();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}