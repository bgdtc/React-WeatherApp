// IMPORT MODULES
import axios from 'axios';

// IMPORT ACTION TYPES
import { GET_PREVISIONS_DATA } from './ActionTypes'


// ACTIONS

export const getPrevisions = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=ff492d0fda7208c6ff614fc2128813b0");
            dispatch({ type: GET_PREVISIONS_DATA, payload: response.data });
        } catch (err) {
            return console.log(err);
        }
    }
}