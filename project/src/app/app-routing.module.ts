import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'money transfer', component: HomeComponent },
  { path: 'my Account', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  { path: 'register', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
