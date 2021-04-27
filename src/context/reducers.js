//! weather reducer
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

//! theme reducer
export const CHANGE_THEME = 'CHANGE_THEME';

const changeTheme = (selection, data) => {
    const updatedData = { ...data };

    const updatedCurrentTheme = updatedData.otherThemes.find(
        (theme) => theme === selection
    );

    updatedData.otherThemes = updatedData.otherThemes.filter(
        (theme) => theme !== selection
    );

    updatedData.otherThemes.unshift(updatedData.currentTheme);
    updatedData.currentTheme = updatedCurrentTheme;
    console.log(updatedData);

    return updatedData;
};

export const themeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return changeTheme(action.selection, state);
        default:
            return state;
    }
};
