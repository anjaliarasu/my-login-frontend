import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'sign-in',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
