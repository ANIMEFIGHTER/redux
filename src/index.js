import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    tasks: [],
}

export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            console.log("Xuita")
            return {...state, tasks: [...state.tasks, action.payload] }
        default:
            return state
    }
}

const store = createStore(taskReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);