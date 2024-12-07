import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from './app.service';
import {MatTable} from '@angular/material/table';

interface Product {
  id: number;
  price: number;
  taxPercent: number;
  name: string;
  description: string;
}

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'catalog-demo-view';
  products: Product[];
  displayedColumns: string[] = ['id', 'price', 'taxPercent', 'name', "description"];
  file: File;
  selectedLocale: string;

  newProduct: Product = {
    id: 0,
    price: 0.0,
    taxPercent: 0.0,
    name: '',
    description: ''
  };

  constructor(private appService: AppService) {
    this.products = [];
    this.selectedLocale = 'de_DE';
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.appService.getProducts(this.selectedLocale)
      .subscribe(
        (response) => {
          this.products = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  upload() {
    if (this.file) {
      this.appService.uploadfile(this.file).subscribe(resp => {
        alert("CSV Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

  onSelected(value:string): void {
    this.selectedLocale = value;
    this.appService.getProducts(this.selectedLocale)
      .subscribe(
        (response) => {
          this.products = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
