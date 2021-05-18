export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SWITCH_CURR_PRODUCT = 'SWITCH_CURR_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const deleteProduct = (newValue) => {
    return {
        type: DELETE_PRODUCT,
        payload: newValue
    }
}

export const addProduct = (newValue) => {
    return {
        type: ADD_PRODUCT,
        payload: newValue
    }
}

export const switchCurrProduct = (newValue) => {
    return {
        type: SWITCH_CURR_PRODUCT,
        payload: newValue
    }
}
export const editProduct = (newValue) => {
    return {
        type: EDIT_PRODUCT,
        payload: newValue
    }
}
