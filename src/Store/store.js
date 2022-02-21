import doctor1 from "../images/Doctor/1.png"
import doctor2 from "../images/Doctor/2.png"
import doctor3 from "../images/Doctor/3.png"
import doctor4 from "../images/Doctor/4.png"
import doctor5 from "../images/Doctor/5.png"
import doctor6 from "../images/Doctor/6.png"

import blog1 from "../images/Blog/1.png"
import blog2 from "../images/Blog/2.png"
import blog3 from "../images/Blog/3.jpg"
import blog4 from "../images/Blog/4.png"
import blog5 from "../images/Blog/5.png"
import blog6 from "../images/Blog/6.png"
import blog7 from "../images/Blog/7.png"
import blog8 from "../images/Blog/8.png"
import blog9 from "../images/Blog/9.png"

import avatar1 from "../images/Avatar/1.png"

import map from "../images/Icon/map.svg"
import phone from "../images/Icon/phone.svg"
import mail from "../images/Icon/mail.svg"


let store = {
    _state: {
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
        blogData: [
            {
                id: 1,
                img: blog1,
                title: "Anxiety disorder affects human life very badly,very badly",
                text: "There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 2,
                img: blog2,
                title: "Helping Children Deal With Trauma",
                text: "There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 3,
                img: blog3,
                title: "One Lorem ipsum dolor sit amet, consectetu",
                text: "There are many variations of passages of Lorem Ipsum available.There are",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 4,
                img: blog4,
                title: "A shadowy flight into the dangerous world",
                text: "There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available.",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 5,
                img: blog5,
                title: "Ultra nanoparticles kill cancer cells in unusual way",
                text: "There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 6,
                img: blog6,
                title: "Eye lens regeneration from own stem cells",
                text: "There are many variations of passages of Lorem Ipsum.",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 7,
                img: blog7,
                title: "Believe it or not its just me Come and listen",
                text: "There are many variations of passages of Lorem Ipsum available.",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 8,
                img: blog8,
                title: "Patient Forum School Patient Experience",
                text: "There are many variations of passages of Lorem Ipsum available.There are many variations",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },
            {
                id: 9,
                img: blog9,
                title: "Washington Medical Science of Institute",
                text: "There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available.",
                avatar: avatar1,
                name: "Processing Ltd.",
                time: "2 Days Ago",
                read: "44 read"
            },

        ],
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
        emailData: [
            {
                email: 'test'
            },
        ]
    },
    _medokMap: {
        center: [51.536342356116286, 46.02227590785803],
        zoom: 15,
        coordinates: [
            [51.536342356116286, 46.02227590785803]
        ],
    },
    getState() {
        return this._state
    },
    getMedokMap() {
        return this._medokMap
    },

    addEmail(emailValue) {
        let newEmail = {
            email: emailValue
        }
        this._state.emailData.push(newEmail)
        console.log(this._state.emailData)
    },
}

export default store;
window.store = store
