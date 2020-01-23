export const CLICK_UPDATE_VALUE = 'CLICK_UPDATE_VALUE';
export const ARRAY_LIST = 'ARRAY_LIST';

export function clickButton(payload) {
    return {
        type: CLICK_UPDATE_VALUE,
        payload
    }
}

export function clickButtonArray(payload){
    debugger
    return{
        type: ARRAY_LIST,
        payload
    }
}
