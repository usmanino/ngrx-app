import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './state/customer.reducer';
import { EffectsModule, Actions } from '@ngrx/effects'
import { CustomerEffect } from './state/customer.effect'

const customersRoutes: Routes = [
  {
    path: "",
    component: CustomersComponent
  },


]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customersRoutes),
    StoreModule.forFeature("customers", customerReducer),
    EffectsModule.forFeature([CustomerEffect])
  ],
  declarations: [
    CustomersComponent,
    CustomersAddComponent,
    CustomersEditComponent,
    CustomersListComponent
  ],

})
export class CustomersModule { }
