import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Product} from './product';
import {ProductService} from './product.service';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ProductResolverService implements Resolve<Product> {

    constructor(private productService: ProductService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        const id = route.params['id'];

        // Errors:
        // id is not a number
        if (isNaN(id)) {
            console.log(`product id is not a number: ${id}`);
            this.router.navigate(['/products']);
            return of(null);
        }

        return this.productService.getProduct(+id).pipe(

            // product not found
            map(product => {
                    if (product) {
                        return product;
                    }
                    console.log(`product was not found: ${id}`);
                    this.router.navigate(['/products']);
                    return null; // we don't need to return observable since map returns observable
                }
            ),

            // other errors
            catchError(err => {
                console.log(`Retrieval error: ${err}`);
                this.router.navigate(['/products']);
                return of(null);
            })
        );

    }

}
