import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div class="app-container">
      <header class="main-header">
        <img src="https://kaspi.kz/img/Logo.svg" alt="Kaspi.kz" class="logo">
        <nav class="categories-nav">
          @for (category of categories; track category.id) {
            <button 
              class="category-btn"
              [class.active]="selectedCategoryId === category.id"
              (click)="selectCategory(category.id)">
              <span class="category-icon">{{ category.icon }}</span>
              {{ category.name }}
            </button>
          }
        </nav>
      </header>

      <main class="main-content">
        @if (selectedCategoryId) {
          <app-product-list 
            [categoryId]="selectedCategoryId"
            (categoryChange)="onCategoryChange()">
          </app-product-list>
        } @else {
          <div class="welcome-message">
            <h1>Добро пожаловать в Kaspi.kz Магазин</h1>
            <p>Выберите категорию товаров для просмотра</p>
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .main-header {
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo {
      height: 40px;
    }

    .categories-nav {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .category-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      background: #f0f0f0;
      color: #333;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .category-btn:hover {
      background: #e0e0e0;
      transform: translateY(-2px);
    }

    .category-btn.active {
      background: #f90;
      color: white;
    }

    .category-icon {
      font-size: 1.2rem;
    }

    .main-content {
      padding: 2rem;
    }

    .welcome-message {
      text-align: center;
      padding: 4rem 2rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .welcome-message h1 {
      color: #333;
      margin-bottom: 1rem;
    }

    .welcome-message p {
      color: #666;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .main-header {
        flex-direction: column;
        padding: 1rem;
      }

      .categories-nav {
        justify-content: center;
      }

      .main-content {
        padding: 1rem;
      }
    }
  `]
})
export class AppComponent {
  categories: Category[];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  onCategoryChange() {
   
  }
}