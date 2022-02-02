const initialState = {
    All_items: [],
    sorted: [],
    current_page: 1,
};

console.log(initialState);

export const GET_TEMPLATES_SUCCESS = "get template success";
export const GET_SORTED = "get sorted";
export const CHANGE_PAGE = "change page";
const getTemplateReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEMPLATES_SUCCESS:
            return {
                ...state,
                All_items: action.payload,
                sorted: action.payload,
                current_page: 1,
            };
        case GET_SORTED:
            return {
                ...state,
                sorted: action.payload,
                current_page: 1,
            };
        case CHANGE_PAGE:
            return {
                ...state,
                current_page: action.payload,
            };

        default:
            return state;
    }
};

export default getTemplateReducers;
