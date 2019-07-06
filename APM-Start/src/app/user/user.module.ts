import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    SharedModule,
      RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
      AuthGuard
  ]
})
export class UserModule { }
