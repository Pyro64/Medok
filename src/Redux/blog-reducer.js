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
const ADD_PAGE = 'ADD_PAGE';
const IS_FULL = 'IS_FULL';

let initialState = {
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
        {
            id: 10,
            img: blog1,
            title: "Anxiety disorder affects human life very badly,very badly",
            text: "There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 11,
            img: blog2,
            title: "Helping Children Deal With Trauma",
            text: "There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 12,
            img: blog3,
            title: "One Lorem ipsum dolor sit amet, consectetu",
            text: "There are many variations of passages of Lorem Ipsum available.There are",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 13,
            img: blog4,
            title: "A shadowy flight into the dangerous world",
            text: "There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available.",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 14,
            img: blog5,
            title: "Ultra nanoparticles kill cancer cells in unusual way",
            text: "There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 15,
            img: blog6,
            title: "Eye lens regeneration from own stem cells",
            text: "There are many variations of passages of Lorem Ipsum.",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 16,
            img: blog7,
            title: "Believe it or not its just me Come and listen",
            text: "There are many variations of passages of Lorem Ipsum available.",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 17,
            img: blog8,
            title: "Patient Forum School Patient Experience",
            text: "There are many variations of passages of Lorem Ipsum available.There are many variations",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
        {
            id: 18,
            img: blog9,
            title: "Washington Medical Science of Institute",
            text: "There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available.",
            avatar: avatar1,
            name: "Processing Ltd.",
            time: "2 Days Ago",
            read: "44 read"
        },
    ],
    pageSize: 6,
    step: 3,
    isFull: false,
};
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAGE:
            return {
                ...state,
                pageSize: action.value,
            };
        case IS_FULL:
            return {
                ...state,
                isFull: true,
            };
        default:
            return state;
    }
}
export const isFull = () => ({ type: IS_FULL })
export const addPage = (value) => ({ type: ADD_PAGE, value })

export default blogReducer;