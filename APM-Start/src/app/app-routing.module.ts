import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {AuthGuard} from "./user/auth.guard";
import {SelectiveStrategyService} from './selective-strategy.service';


const routes = [
    {path: 'welcome', component: WelcomeComponent},
    // specifying a default page
    {
        path: 'products',
        canActivate: [AuthGuard],
        // canLoad: [AuthGuard],
        data: {preload: true},
        loadChildren: './products/product.module#ProductModule'
    },
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    // wildcard path, the router matches this path if the url segments don't match any prior path defined in the configurations
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: SelectiveStrategyService})
    ],
    exports: [
        RouterModule
    ],
    providers: [SelectiveStrategyService]
})

export class AppRoutingModule {
    constructor() {
    }
}
