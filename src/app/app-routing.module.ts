import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "customers",
    loadChildren: () => import('../app/customers/customers.module').then(x => x.CustomersModule)
  }
  // {
  //   path: "customers",
  //   loadChildren: '../app/customers.module#CustomersModule'
  // },

]



@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
