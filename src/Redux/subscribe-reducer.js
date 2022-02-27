
const SEND_MAIL = 'SEND_MAIL';
const UPDATE_NEW_MAIL = 'UPDATE_NEW_MAIL';

let initialState = {
    subscribeData: [
        { id: 1, mail: 'test@mail.ru' },
    ],
    newSubscribeMail: "",
    placeholder: 'Введите e-mail'
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
            return {
                ...state,
                subscribeData: [...state.subscribeData, { id: 2, mail: emailValue }],
                newSubscribeMail: "",
                placeholder: 'e-mail отправлен'
            }
        default:
            return state;
    }

}

export const sendMail = () => ({ type: SEND_MAIL })
export const updateNewMail = (emailValue) =>
    ({ type: UPDATE_NEW_MAIL, emailValue: emailValue })

export default subscribeReducer;