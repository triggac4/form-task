const initialState = {
    All_items: [],
    sorted: [],
    loading: true,
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
export const LOADING = "loading";
const getTemplateReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEMPLATES_SUCCESS:
            return {
                loading: false,
                All_items: action.payload,
                sorted: action.payload,
                pagination: action.pagination,
            };
        case GET_SORTED:
            return {
                ...state,
                loading: false,
                sorted: action.payload,
                pagination: action.pagination,
            };
        case CHANGE_PAGE:
            return {
                ...state,
                pagination: action.pagination,
            };
        case LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
};

export default getTemplateReducers;
