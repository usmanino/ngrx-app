
import * as customerActons from './customer.actions';
import { Customer } from '../customer.model';
import * as fromRoot from '../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter } from "@ngrx/entity";

export interface CustomerState {
  customers: Customer[],
  loading: boolean,
  loaded: boolean,
  error: string
}

export interface AppState extends fromRoot.AppState {
  customers: CustomerState
}

export const initialState: CustomerState = {
  customers: [],
  loading: false,
  loaded: true,
  error: ""
}

export function customerReducer(state = initialState, action: customerActons.Action) {
  switch (action.type) {
    case customerActons.CustomerActionTypes.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true,

      };
    }
    case customerActons.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: action.payload
      };
    }
    case customerActons.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        customers: [],
        loading: false,
        loaded: true,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getCustomerFeatureState = createFeatureSelector<CustomerState>(
  "customers"
);

// export const getCustomers = createSelector(
//   // getCustomerFeatureState,
//   // customerAdapter.getSelectors().

// )




// import { Action } from "@ngrx/store";

// const initialState = {
//   customers: [  {
//     "name": "Vincent Ojo",
//     "phone": "09066678888",
//     "address": "122 Ajnlekoko Str",
//     "membership": "Platium",
//     "id": 1
// },],
//   loading: false,
//   loaded: true
// };

// export function customerReducer(state = initialState, action: Action) {
//   switch (action.type) {
//     case "LOAD_CUSTOMER": {
//       return {
//         ...state,
//         loading: true,
//         loaded: false,
//       };
//     }
//     default:
//       {
//         return state;
//       }

//   }

// }

