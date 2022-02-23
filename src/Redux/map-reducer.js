

let initialState = {
    medokMap: {
        center: [51.536342356116286, 46.02227590785803],
        zoom: 15,
        coordinates: [
            [51.536342356116286, 46.02227590785803]
        ],
    },
};
const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default mapReducer;