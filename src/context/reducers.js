export const INCREMENT_TEMP = 'INCREMENT_TEMP';
export const DECREMENT_TEMP = 'DECREMENT_TEMP';
// I knew I could just pass -1 to increment instead
// of having two cases, but I thought the less dry code
// would be better practice

const incrementTemp = (index, data) => {
    const updatedData = [...data];
    const updatedItem = { ...updatedData[index] };
    updatedItem.temp++;
    updatedData[index] = updatedItem;
    return updatedData;
};

const decrementTemp = (index, data) => {
    const updatedData = [...data];
    const updatedItem = { ...updatedData[index] };
    updatedItem.temp--;
    updatedData[index] = updatedItem;
    return updatedData;
};

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_TEMP:
            return incrementTemp(action.index, state);
        case DECREMENT_TEMP:
            return decrementTemp(action.index, state);
        default:
            return state;
    }
};
