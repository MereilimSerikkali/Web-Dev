import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны', icon: '📱' },
    { id: 2, name: 'Ноутбуки', icon: '💻' },
    { id: 3, name: 'Наушники', icon: '🎧' },
    { id: 4, name: 'Планшеты', icon: '📱' }
  ];

  private products: Product[] = [
 
    {
      id: 1,
      name: 'Apple iPhone 14 128Gb черный',
      description: 'Смартфон Apple iPhone 14 с диагональю 6.1 дюйма, процессор A15 Bionic, двойная камера 12 МП',
      price: 378790,
      rating: 4.8,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/'
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/512 ГБ черный',
      description: 'Смартфон Samsung Galaxy S23 Ultra с 6.8 дюймовым экраном, 200 МП камера, процессор Snapdragon 8 Gen 2',
      price: 514860,
      rating: 4.9,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h7c/69067267407902.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/h7c/69067267407902.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h42/69067267932190.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h8d/69067269505054.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-512-gb-chernyi-108916047/'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12 Pro 8/256Gb черный',
      description: 'Смартфон Xiaomi Redmi Note 12 Pro с 6.67 дюймовым AMOLED экраном, 108 МП камера',
      price: 129990,
      rating: 4.7,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/hd4/79843632807966.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h2c/79843632283678.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/'
    },
    {
      id: 4,
      name: 'Смартфон Samsung Galaxy A55 5G 8/256Gb черный',
      description: 'Смартфон Samsung Galaxy A55 с 6.6 дюймовым экраном, 50 МП камера, процессор Exynos 1480',
      price: 179990,
      rating: 4.6,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/h7b/85428543750174.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
    },
    {
      id: 5,
      name: 'Смартфон Google Pixel 8 8/128Gb черный',
      description: 'Смартфон Google Pixel 8 с 6.2 дюймовым экраном, 50 МП камера, процессор Google Tensor G3',
      price: 299990,
      rating: 4.8,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/hd1/85988322967582.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/hb1/85988323000350.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000'
    },

    
    {
      id: 6,
      name: 'MacBook Pro 14" M3 512Gb серый',
      description: 'Ноутбук Apple MacBook Pro с чипом M3, 14 дюймовый дисплей Liquid Retina, 8 ГБ unified памяти',
      price: 999990,
      rating: 4.9,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/pf2/62460020.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p21/pf2/62460020.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/pee/62460021.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/peb/62460022.jpeg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2w3-134209187/'
    },
    {
      id: 7,
      name: 'Ноутбук ASUS ROG Strix G16 G614JV',
      description: 'Игровой ноутбук ASUS ROG Strix G16 с процессором i9-13980HX, 16 ГБ RAM, RTX 4060',
      price: 699990,
      rating: 4.7,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h88/70303438012446.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hdc/70303438536734.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000'
    },
    {
      id: 8,
      name: 'Ноутбук Lenovo Legion 5 Pro 16ACH6H',
      description: 'Игровой ноутбук Lenovo Legion 5 Pro с 16-дюймовым экраном, процессор Ryzen 7, RTX 3060',
      price: 549990,
      rating: 4.6,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p36/53999447.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/p36/53999447.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/p36/53999449.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pfe/p33/53999450.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-5-16irx10-16-32-gb-ssd-1000-gb-bez-os-83nn001krk-142787523/?c=750000000'
    },
    {
      id: 9,
      name: 'Ноутбук HP Victus 16-d1132ci',
      description: 'Ноутбук HP Victus 16 с процессором i5-12450H, 16 ГБ RAM, RTX 3050 для игр и работы',
      price: 449990,
      rating: 4.5,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/hce/66019736289310.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h72/hce/66019736289310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h0d/66019733700638.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/h5a/66019734224926.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/hp-victus-16-1-16-gb-ssd-1024-gb-dos-16-d1039ci-6k316ea-107676658/?c=750000000'
    },
    {
      id: 10,
      name: 'Ноутбук Dell XPS 15 9530',
      description: 'Премиальный ноутбук Dell XPS 15 с процессором i7-13700H, 32 ГБ RAM, RTX 4050',
      price: 799990,
      rating: 4.8,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/h1d/64860298412062.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/hda/64860301492254.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=750000000'
    },

 
    {
      id: 11,
      name: 'Apple AirPods Pro 2nd generation белый',
      description: 'Беспроводные наушники Apple AirPods Pro 2-го поколения с активным шумоподавлением',
      price: 97990,
      rating: 4.8,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/'
    },
    {
      id: 12,
      name: 'Наушники Sony WH-1000XM5 черный',
      description: 'Беспроводные наушники Sony WH-1000XM5 с активным шумоподавлением, 30 часов работы',
      price: 149990,
      rating: 4.9,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
    },
    {
      id: 13,
      name: 'Наушники JBL Tune 770NC черный',
      description: 'Беспроводные наушники JBL Tune 770NC с активным шумоподавлением и чистым звуком',
      price: 49990,
      rating: 4.6,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h26/82294170779678.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/?c=750000000'
    },
    {
      id: 14,
      name: 'Наушники Samsung Galaxy Buds2 Pro черный',
      description: 'Беспроводные наушники Samsung Galaxy Buds2 Pro с 24-бит звуком и шумоподавлением',
      price: 69990,
      rating: 4.7,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hd9/79723782602782.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/hd9/79723782602782.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h54/h3d/79723783127070.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/h65/79723783651358.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-4-lite-chernyi-109723597/?c=750000000'
    },
    {
      id: 15,
      name: 'Наушники Marshall Major IV черный',
      description: 'Беспроводные наушники Marshall Major IV с 80+ часами работы и мощным басом',
      price: 59990,
      rating: 4.5,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000'
    },

    
    {
      id: 16,
      name: 'Планшет Apple iPad Pro 13" M4 256Gb',
      description: 'Планшет Apple iPad Pro с чипом M4, 13-дюймовым Ultra Retina дисплеем и поддержкой Apple Pencil Pro',
      price: 599990,
      rating: 4.9,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/hbe/86056856879134.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/hbe/86056856879134.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h3f/86056856944670.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/ha8/86055676346398.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-2024-wi-fi-13-djuim-8-gb-256-gb-chernyi-119579567/?c=750000000'
    },
    {
      id: 17,
      name: 'Планшет Samsung Galaxy Tab S9 Ultra 256Gb',
      description: 'Планшет Samsung Galaxy Tab S9 Ultra с 14.6-дюймовым экраном, S Pen в комплекте',
      price: 499990,
      rating: 4.8,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000'
    },
    {
      id: 18,
      name: 'Планшет Xiaomi Pad 6 128Gb серый',
      description: 'Планшет Xiaomi Pad 6 с 11-дюймовым дисплеем 144 Гц, процессор Snapdragon 870',
      price: 149990,
      rating: 4.6,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000'
    },
    {
      id: 19,
      name: 'Планшет Lenovo Tab P12 128Gb серый',
      description: 'Планшет Lenovo Tab P12 с 12.7-дюймовым экраном и 8 динамиками для мультимедиа',
      price: 129990,
      rating: 4.5,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/p29/43598687.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p29/43598687.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/p29/43598688.jpg?format=gallery-larges',
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p2b/43598690.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tb311xu-tab-4g-128g-10-1-djuim-4-gb-128-gb-seryi-140035943/?c=750000000'
    },
    {
      id: 20,
      name: 'Планшет Apple iPad Air 13" M2 128Gb',
      description: 'Планшет Apple iPad Air с чипом M2, 13-дюймовым дисплеем Liquid Retina',
      price: 399990,
      rating: 4.7,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/hca/86103523917854.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h17/hca/86103523917854.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/hb4/86103523950622.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h17/hca/86103523917854.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-13-2024-wi-fi-13-djuim-8-gb-128-gb-goluboi-119773462/?c=750000000'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}