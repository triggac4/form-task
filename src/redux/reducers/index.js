const initialState = {
    All_items: [],
    sorted: [],
    pagination: {
        current_page: 1,
        start_index: 0,
        end_index: 0,
        total_pages: 0,
    },
};

console.log(initialState);

export const GET_TEMPLATES_SUCCESS = "get template success";
export const GET_SORTED = "get sorted";
export const CHANGE_PAGE = "change page";
const getTemplateReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEMPLATES_SUCCESS:
            return {
                All_items: action.payload,
                sorted: action.payload,
                pagination: action.pagination,
            };
        case GET_SORTED:
            return {
                ...state,
                sorted: action.payload,
                pagination: action.pagination,
            };
        case CHANGE_PAGE:
            return {
                ...state,
                pagination: action.pagination,
            };

        default:
            return state;
    }
};

export default getTemplateReducers;
