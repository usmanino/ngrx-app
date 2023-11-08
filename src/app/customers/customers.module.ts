import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouterModule, Routes } from '@angular/router';

const customersRoutes: Routes = [
  {
    path: "",
    component: CustomersComponent
  },


]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customersRoutes)
  ],
  declarations: [
    CustomersComponent,
    CustomersAddComponent,
    CustomersEditComponent,
    CustomersListComponent
  ],

})
export class CustomersModule { }
