import {createStore} from 'redux'
const defaultState ={
    cityName: null,
    temp: null,
    isLoading: false,
    err: false
}

const reducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { cityName:null, temp: null, isLoading: true, err: false};
        case 'FETCH_SUCCESS':
            return { cityName:action.cityName, temp: action.temp, isLoading: false, err: false};
        case 'FETCH_ERR':
            return { cityName:null, temp: null, isLoading: false, err: true};
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;