const initialState = {
  paymentMethods: [],
  currentPayment: null,
  loading: true,
  error: null,
};

const FETCH_PAYMENT_METHODS_SUCCESS = "FETCH_PAYMENT_METHODS_SUCCESS";
const ADD_PAYMENT_METHOD = "ADD_PAYMENT_METHOD";
const DELETE_PAYMENT_METHOD = "DELETE_PAYMENT_METHOD";

export const paymentsReducer = (state, action) => {
    if (!state) {
        state = initialState;
    }
    
    switch (action.type) {
        case FETCH_PAYMENT_METHODS_SUCCESS:
        return { ...state, paymentMethods: action.payload, loading: false };
        case ADD_PAYMENT_METHOD:
        return {
            ...state,
            paymentMethods: [...state.paymentMethods, action.payload],
        };
        case DELETE_PAYMENT_METHOD:
        return {
            ...state,
            paymentMethods: state.paymentMethods.filter(
            (payment) => payment.id !== action.payload
            ),
        };
    
        default:
        return state;
    }
    }