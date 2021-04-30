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

//! style reducer
export const UPDATE_USER_STYLE = 'UPDATE_USER_STYLE';

const updateStyleStateFromUserPreferenceForm = (formData, styles) => {
    const updatedStyle = [...styles];
    updatedStyle.map((file) => {
        file.customizableComponents.map((comp) => {
            // console.log(formData[`${file.path}`]);
            Object.keys(comp)
                .filter((e) => e !== 'name')
                .map((property) => {
                    // console.log('original', comp[property].userPreference);
                    comp[property].userPreference =
                        formData[file.path][comp.name][property];
                    // const newPref = formData[file.path][comp.name][property];
                    // console.log(newPref);
                    // console.log('form', formData[file.path][comp][property]);
                    // console.log('new', )
                    return property;
                });

            return comp;
        });

        return file;
    });

    // updatedStyle[0].customizableComponents[0].color.userPreference =
    //     formData['src/components/weather/WeatherData'].BoldSpan.color;
    return updatedStyle;
};

export const styleReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER_STYLE:
            return updateStyleStateFromUserPreferenceForm(
                action.preferences,
                state
            );
        default:
            return state;
    }
};
