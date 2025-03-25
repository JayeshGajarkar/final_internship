import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  email: string;
}

interface Product {
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenericComponent';

  userData: User[] = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
  ];

  userColumns = [
    { key: 'name' as keyof User, label: 'Name' },
    { key: 'age' as keyof User, label: 'Age' },
    { key: 'email' as keyof User, label: 'Email' }
  ];

  productData: Product[] = [
    { name: 'Laptop', price: 1000, stock: 5 },
    { name: 'Phone', price: 500, stock: 10 }
  ];

  productColumns = [
    { key: 'name' as keyof Product, label: 'Product Name' },
    { key: 'price' as keyof Product, label: 'Price' },
    { key: 'stock' as keyof Product, label: 'Stock' }
  ];
}
