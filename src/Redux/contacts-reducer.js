import map from "../images/Icon/map.svg"
import phone from "../images/Icon/phone.svg"
import mail from "../images/Icon/mail.svg"

let initialState = {
    contactsData: [
        {
            id: 1,
            svg: map,
            firstText: 'г. Саратов, ул. Московская, д. 113/117,',
            secondText: 'ТЦ МИР, 6 эт., оф. 4В',
            isLink: false,
        },
        {
            id: 2,
            svg: phone,
            firstText: '+7 (800) 350-61-75',
            secondText: '+7 (986) 994-11-78',
            isLink: true,
        },
        {
            id: 3,
            svg: mail,
            firstText: 'info@mismedok.ru',
            secondText: 'medok-online.ru',
            isLink: true,
        },
    ],
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default contactsReducer;