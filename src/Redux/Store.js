import { combineReducers, createStore } from "redux";
import blogReducer from "./blog-reducer";
import contactsReducer from "./contacts-reducer";
import doctorsReducer from "./doctor-reducer";
import mapReducer from "./map-reducer";
import telemedReducer from "./telemed-reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    doctorPage: doctorsReducer,
    blogPage: blogReducer,
    customMap: mapReducer,
    contacts: contactsReducer,
    whatIsTelemed: telemedReducer,
    form: formReducer
});

let store = createStore(reducers);
window.store = store
export default store