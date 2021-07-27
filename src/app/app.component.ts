import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brands: string[] = [
    '10001',
    '10002',
    '10003',
    '10004',
    '10005',
    '10006',
    '10006',
    '10007',
    '10008',
    '10009'
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
