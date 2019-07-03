import {Component, OnInit} from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
  }
}
