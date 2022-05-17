export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEM_WRITE = "MEM_WRITE";
export const MEM_READ = "MEM_READ";
export const MEM_CLEAR = "MEM_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}

export const memWrite = () => {
    return ({type:MEM_WRITE});
}

export const memRead = () => {
    return ({type: MEM_READ });
}

export const memClear = () => {
    return ({type: MEM_CLEAR });
}
