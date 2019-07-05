import {Component} from '@angular/core';

import {AuthService} from './user/auth.service';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pageTitle = 'Acme Product Management';
    loading = true;

    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn;
    }

    get userName(): string {
        if (this.authService.currentUser) {
            return this.authService.currentUser.userName;
        }
        return '';
    }

    constructor(private authService: AuthService, private router: Router) {
        this.router.events.subscribe((routerEvent: RouterEvent) => {
            this.checkRouterEvent(routerEvent);
        });
    }

    checkRouterEvent(routerEvent: RouterEvent): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
        }
    }

    logOut(): void {
        this.authService.logout();
        console.log('Log out');

        this.router.navigateByUrl('/welcome');
    }
}
