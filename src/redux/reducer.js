import { CHANGE_THEME } from "./actionTypes";

const initState = {
    theme: "light",
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
