import { Action } from "@ngrx/store";

const initialState = {
    customers: [
        {
            "name": "Vincent Ojo",
            "phone": "09066678888",
            "address": "122 Ajnlekoko Str",
            "membership": "Platium",
            "id": 1
        },

    ],
    loading: false,
    loaded: true
};

export function customerReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "LOAD_CUSTOMER": {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }
        default:
            {
                return state;
            }

    }

}