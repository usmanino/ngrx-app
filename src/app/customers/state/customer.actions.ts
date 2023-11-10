import * as store from '@ngrx/store';

import { Customer } from '../customer.model'

export enum CustomerActionTypes {
    LOAD_CUSTOMERS = "[Customer] Load Customers",
    LOAD_CUSTOMERS_SUCCESS = "[Customer] Load Customers Success",
    LOAD_CUSTOMERS_FAIL = "[Customer] Load Customers Fails",
}

export class LoadCustomers implements store.Action {
    readonly type!: CustomerActionTypes.LOAD_CUSTOMERS
}

export class LoadCustomersSuccess implements store.Action {
    readonly type!: CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS

    constructor(public payload: Customer[]) { }
}

export class LoadCustomersFail implements store.Action {
    readonly type!: CustomerActionTypes.LOAD_CUSTOMERS_FAIL

    constructor(public payload: string) { }
}

export type Action = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;