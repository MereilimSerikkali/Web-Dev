import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() categoryId!: number;
  
  products: Product[] = [];
  showClientsMenu = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProductsByCategory(this.categoryId);
  }

  onDeleteProduct(productId: number) {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.productService.deleteProduct(productId);
      this.loadProducts(); 
    }
  }

  onLikeProduct(productId: number) {
    this.productService.likeProduct(productId);
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}