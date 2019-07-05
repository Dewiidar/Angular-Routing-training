import {NgModule} from '@angular/core';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProductService} from './product.service';
import {ProductResolverService} from './product-resolver.service';
import {ProductEditInfoComponent} from './product-edit/product-edit-info.component';
import {ProductEditTagsComponent} from './product-edit/product-edit-tags.component';

const routes = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent,
            },
            {
                path: ':id',
                component: ProductDetailComponent,
                resolve: {product: ProductResolverService}
            },
            {
                path: ':id/edit',
                component: ProductEditComponent,
                resolve: {product: ProductResolverService},
                children: [
                    {path: '', redirectTo: 'info', pathMatch: 'full'},
                    {path: 'info', component: ProductEditInfoComponent},
                    {path: 'tags', component: ProductEditTagsComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductEditInfoComponent,
        ProductEditTagsComponent
    ],
    providers: [
        ProductService,
        ProductResolverService
    ]
})

export class ProductModule {
}
