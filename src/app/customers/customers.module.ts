import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { customerReducer } from "./state/customer.reducer";
import { CustomersComponent } from './customers/customers.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
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
    ReactiveFormsModule,
    FormsModule,
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
