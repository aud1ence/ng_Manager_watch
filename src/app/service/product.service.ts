import { Injectable } from '@angular/core';
import {IProduct} from "../components/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [
    {
      id: 1,
      name: '7010/1R - NAUTILUS',
      collection: 'QUARTZ',
      price: 1000,
      image: 'https://static.patek.com/images/articles/face_white/350/7010_1R_011.jpg',
      watch: 'Quartz movement. Caliber E 23‑250 S C. Date. Sweep seconds hand.',
      dial: 'Dial: silvery opaline, applied gold hour markers with luminescent coating.',
      case: 'Rose gold. Solid case back. Water-resistant to 60m. Case diameter (10–4 o’clock): 32 mm. Height: 6.9 mm.',
      bracelet: 'Rose gold bracelet. Nautilus fold-over clasp.',
    },
    {
      id: 2,
      name: '7010R - NAUTILUS',
      collection: 'QUARTZ',
      price: 2000,
      image: 'https://static.patek.com/images/articles/face_white/350/7010R_011.jpg',
      watch: 'Quartz movement. Caliber E 23‑250 S C. Date. Sweep seconds hand.',
      dial: 'Dial: silvery opaline, applied gold hour markers with luminescent coating.',
      case: 'Rose gold. Solid case back. Water-resistant to 60m. Case diameter (10–4 o’clock): 32 mm. Height: 6.9 mm.',
      bracelet: 'Rose gold bracelet. Nautilus fold-over clasp.',
    },
    {
      id: 3,
      name: '7118/1200A - NAUTILUS',
      collection: 'SELF-WINDING',
      price: 3000,
      image: 'https://static.patek.com/images/articles/face_white/350/7118_1200A_010_1.jpg',
      watch: 'Quartz movement. Caliber E 23‑250 S C. Date. Sweep seconds hand.',
      dial: 'Dial: silvery opaline, applied gold hour markers with luminescent coating.',
      case: 'Rose gold. Solid case back. Water-resistant to 60m. Case diameter (10–4 o’clock): 32 mm. Height: 6.9 mm.',
      bracelet: 'Rose gold bracelet. Nautilus fold-over clasp.',
    },
  ];

  constructor() { }

  getAll() {
    return this.products;
  }

  saveProduct(product: any) {
    this.products.push(product);
  }
}
