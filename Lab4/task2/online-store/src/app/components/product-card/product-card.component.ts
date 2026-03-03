import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  showDescription = false;
  currentImageIndex = 0; 

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  setImage(index: number) {
    this.currentImageIndex = index;
  }

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' - ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getFullStars(): number {
    return Math.floor(this.product.rating);
  }

  hasHalfStar(): boolean {
    return this.product.rating % 1 >= 0.5;
  }
}