import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brands: string[] = [
    'Audi',
    'BMW',
    'Fiat',
    'Ford',
    'Honda',
    'Jaguar',
    'Mercedes',
    'Renault',
    'Volvo',
    'VW'
  ];

  filteredBrands: any[];

  brand: string;

  constructor() {}

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      let brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
  }
}
