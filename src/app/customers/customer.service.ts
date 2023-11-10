import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
    providedIn: "root"
})

export class CustomerService {

    private customersUrl = "http://localhost:3000/customers";

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(
            this.customersUrl
        );
    }

}
