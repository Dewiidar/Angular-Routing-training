import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProductService} from './product.service';
import {ProductResolverService} from './product-resolver.service';

const routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent, resolve: {product: ProductResolverService}},
  {path: 'products/:id/edit', component: ProductEditComponent, resolve: {product: ProductResolverService}}
];

@NgModule({
  imports: [
    SharedModule,
      RouterModule.forChild(routes)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  providers: [
      ProductService,
      ProductResolverService
  ]
})

export class ProductModule { }
