import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './page-not-found.component';


const routes = [
    {path: 'welcome', component: WelcomeComponent},
    // specifying a default page
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    // wildcard path, the router matches this path if the url segments don't match any prior path defined in the configurations
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
    constructor() {
    }
}
