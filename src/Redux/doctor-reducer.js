
import doctor1 from "../images/Doctor/1.png"
import doctor2 from "../images/Doctor/2.png"
import doctor3 from "../images/Doctor/3.png"
import doctor4 from "../images/Doctor/4.png"
import doctor5 from "../images/Doctor/5.png"
import doctor6 from "../images/Doctor/6.png"



let initialState = {
    doctorData: [
        {
            id: 1,
            name: "Dr. Robarrt Delok",
            prof: "Nurologiest",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting",
            timetable: "Mon - Sat @ 9.00pm to 12.00am",
            img: doctor1,
        },
        {
            id: 2,
            name: "Dr. Roy Owens",
            prof: "Gynecologist",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            timetable: "Sun - Tues @ 1.00pm to 4.00pm",
            img: doctor2,
        },
        {
            id: 3,
            name: "Dr. Jacob Ross",
            prof: "Surgery specialist",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            timetable: "Mon - Thrus @ 6.00pm to 9.00pm",
            img: doctor3,
        },
        {
            id: 4,
            name: "Dr. Mark Williamson",
            prof: "Physiatrist",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            timetable: "Mon - Sat @ 9.00pm to 11.00pm",
            img: doctor4,
        },
        {
            id: 5,
            name: "Dr. Scott Rios",
            prof: "Radiologist",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            timetable: "sun - fri @ 10.00am to 4.00pm",
            img: doctor5,

        },
        {
            id: 6,
            name: "Dr. Andrea Fowler",
            prof: "Hepatologist",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
            timetable: "Mon - Sat @ 9.00pm to 12.00am",
            img: doctor6,
        },

    ],
};

const doctorsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default doctorsReducer;