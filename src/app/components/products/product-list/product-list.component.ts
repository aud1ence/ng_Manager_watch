import {Component, OnInit, ViewChild} from '@angular/core';
import {IProduct} from "../../IProduct";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ProductService} from "../../../service/product.service";


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
  constructor(private productService: ProductService) {
  }

  products: IProduct[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<IProduct>(this.products);
  columnsToDisplay = ['id', 'name', 'collection', 'price'];
  // @ts-ignore
  expandedElement: ProductListComponent | null;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.getAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAll() {
    this.products = this.productService.getAll();
    this.dataSource = new MatTableDataSource<IProduct>(this.products)
  }
}
