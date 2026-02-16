import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  showClientsMenu = false;
  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Apple iPhone 14 128Gb черный',
        description: 'Смартфон Apple iPhone 14 с диагональю 6.1 дюйма, процессор A15 Bionic, двойная камера 12 МП, поддержка 5G',
        price: 378790,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
      },
      {
        id: 2,
        name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/512 ГБ черный',
        description: 'Смартфон Samsung Galaxy S23 Ultra с 6.8 дюймовым экраном, 200 МП камера, процессор Snapdragon 8 Gen 2',
        price: 514860,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h7c/69067267407902.jpg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h6c/h7c/69067267407902.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h42/69067267932190.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hd9/h8d/69067269505054.jpg?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-512-gb-chernyi-108916047/?c=750000000'
      },
      {
        id: 3,
        name: 'Xiaomi Redmi Note 12 Pro 8/256Gb черный',
        description: 'Смартфон Xiaomi Redmi Note 12 Pro с 6.67 дюймовым AMOLED экраном, 108 МП камера, быстрая зарядка 67W',
        price: 129990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h88/hd4/79843632807966.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h91/h2c/79843632283678.jpg?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000'
      },
      {
        id: 4,
        name: 'MacBook Pro 14" M3 512Gb серый',
        description: 'Ноутбук Apple MacBook Pro с чипом M3, 14 дюймовый дисплей Liquid Retina, 8 ГБ unified памяти',
        price: 999990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/pf2/62460020.jpeg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p21/pf2/62460020.jpeg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/pb7/pee/62460021.jpeg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/p4d/peb/62460022.jpeg?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2w3-134209187/?c=750000000'
      },
      {
        id: 5,
        name: 'Apple AirPods Pro 2nd generation белый',
        description: 'Беспроводные наушники Apple AirPods Pro 2-го поколения с активным шумоподавлением и пространственным аудио',
        price: 97990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
      },
      {
        id: 6,
        name: 'Смарт-часы Samsung Galaxy Watch FE 40 мм серебристый-голубой',
        description: 'Умные часы Samsung Galaxy Watch6 с 44 мм корпусом, отслеживание активности и здоровья, GPS',
        price: 119990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h68/86609950998558.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h04/h68/86609950998558.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h49/h93/86609951129630.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf2/h2f/86609951260702.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-fe-40-mm-serebristyi-goluboi-121760505/?c=750000000'
      },
      {
        id: 7,
        name: 'Dyson V15 Detect Absolute',
        description: 'Беспроводной пылесос Dyson V15 Detect Absolute с лазерной подсветкой и дисплеем, мощность 240 Вт',
        price: 399990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pdc/p32/77965057.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/p32/77965058.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
      },
      {
        id: 8,
        name: 'Nintendo Switch OLED белый',
        description: 'Игровая консоль Nintendo Switch OLED с 7-дюймовым экраном, 64 ГБ памяти, док-станцией',
        price: 189990,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h9e/h5d/81080659345438.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/ha5/hf1/81080659476510.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000'
      },
      {
        id: 9,
        name: 'Canon EOS R10 kit 18-45mm',
        description: 'Зеркальный фотоаппарат Canon EOS R10 с объективом 18-45mm, 24.2 МП, 4K видео',
        price: 379990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302558.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302558.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h32/h6a/64898729148446.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h91/he6/64898724986910.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/canon-eos-r10-kit-18-45mm-is-stm-106795757/?c=750000000'
      },
      {
        id: 10,
        name: 'Sony PlayStation 5 Slim',
        description: 'Игровая консоль Sony PlayStation 5 Slim с 1TB SSD и беспроводным контроллером DualSense',
        price: 279990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
      }
    ];
  }
}