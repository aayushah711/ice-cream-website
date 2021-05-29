import { CHANGE_THEME, ADD_TO_CART, TOGGLE_TOAST } from "./actionTypes";

export const changeTheme = (payload) => ({
    type: CHANGE_THEME,
    payload,
});

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});

export const toggleToast = (payload) => ({
    type: TOGGLE_TOAST,
    payload,
});
