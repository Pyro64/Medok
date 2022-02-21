
const SEND_MAIL = 'SEND_MAIL';
const UPDATE_NEW_MAIL = 'UPDATE_NEW_MAIL';

let initialState = {
    subscribeData: [
        { id: 1, mail: 'test@mail.ru' },
    ],
    newSubscribeMail: ""
};

const subscribeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MAIL:
            return {
                ...state,
                newSubscribeMail: action.emailValue,

            };
        case SEND_MAIL:
            let emailValue = state.newSubscribeMail;
            console.log(state)
            return {
                ...state,
                subscribeData: [...state.subscribeData, { id: 2, mail: emailValue }]

            }
        default:
            return state;
    }

}

export const sendMailCreator = () => ({ type: SEND_MAIL })
export const updateNewMailCreator = (emailValue) =>
    ({ type: UPDATE_NEW_MAIL, emailValue: emailValue })

export default subscribeReducer;