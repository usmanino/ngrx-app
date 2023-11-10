
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as customerActons from '../state/customer.actions';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: any;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new customerActons.LoadCustomers());
    this.store.subscribe(state => (this.customers = state.customers.customers));
  }

}
