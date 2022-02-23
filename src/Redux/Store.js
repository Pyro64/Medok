import { combineReducers, createStore } from "redux";
import blogReducer from "./blog-reducer";
import contactsReducer from "./contacts-reducer";
import doctorsReducer from "./doctor-reducer";
import mapReducer from "./map-reducer";
import subscribeReducer from "./subscribe-reducer";

let reducers = combineReducers({
    doctorPage: doctorsReducer,
    blogPage: blogReducer,
    customMap: mapReducer,
    subscribe: subscribeReducer,
    contacts: contactsReducer,
});

let store = createStore(reducers);
window.store = store
export default store