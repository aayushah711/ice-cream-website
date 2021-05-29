import { CHANGE_THEME, ADD_TO_CART, TOGGLE_TOAST } from "./actionTypes";

const initState = {
    theme: "light",
    cart: [],
    toast: false,
    toastMessage: "",
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: payload,
            };
        }
        case ADD_TO_CART: {
            let cart = [...state.cart];
            cart.push(payload);
            return {
                ...state,
                cart,
            };
        }
        case TOGGLE_TOAST: {
            return {
                ...state,
                toast: payload.status,
                toastMessage: payload.message
                    ? payload.message
                    : state.toastMessage,
            };
        }
        default:
            return state;
    }
};

export default reducer;
