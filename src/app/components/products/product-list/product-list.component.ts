import {Component, OnInit, ViewChild} from '@angular/core';
import {IProduct} from "../../IProduct";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent implements OnInit {

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
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<IProduct>(this.products);
  columnsToDisplay = ['id', 'name', 'collection', 'price'];
  // @ts-ignore
  expandedElement: ProductListComponent | null;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
