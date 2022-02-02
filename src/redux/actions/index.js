import { GET_TEMPLATES_SUCCESS, GET_SORTED, CHANGE_PAGE } from "../reducers";

export const getTemplateSuccess = (payload) => {
    return {
        type: GET_TEMPLATES_SUCCESS,
        payload,
    };
};

export const getSorted = (payload) => {
    return {
        type: GET_SORTED,
        payload,
    };
};

export const changePage = (payload) => {
    return {
        type: CHANGE_PAGE,
        payload,
    };
};
