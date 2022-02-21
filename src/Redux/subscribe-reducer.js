
const ADD_MAIL = 'ADD_MAIL';

let initialState = {
    subscribeData: [
        { id: 1, name: 'test@mail.ru' },
    ],
};

const subscribeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MAIL:
            return state;
        default:
            return state;
    }
}

export default subscribeReducer;