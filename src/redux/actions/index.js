import {
    GET_TEMPLATES_SUCCESS,
    GET_SORTED,
    CHANGE_PAGE,
    LOADING,
} from "../reducers";

export const getTemplateSuccess = (payload, pagination) => {
    return {
        type: GET_TEMPLATES_SUCCESS,
        payload,
        pagination,
    };
};

export const getSorted = (payload, pagination) => {
    return {
        type: GET_SORTED,
        payload,
        pagination,
    };
};

export const changePage = (pagination) => {
    return {
        type: CHANGE_PAGE,
        pagination,
    };
};
export const loading = (payload) => {
    return {
        type: LOADING,
        payload,
    };
};
