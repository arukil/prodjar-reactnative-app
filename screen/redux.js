import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialMyCourse = {
    MyCourse:[]
}

const myCourseReducer = (state = initialMyCourse, action) => {

    switch (action.type) {
        case 'GET_COURSE_LIST':
            return {
                ...state,
                MyCourse: action.payload
            };
        default:
            return state;
    }

}

const initialCourseDetail = {
    courseDetail: {}
}


const courseDetailReducer = (state = initialCourseDetail, action) => {
    switch (action.type) {
        case 'GET_COURSE_DETAIL':
            return {
                ...state,
                courseDetail: action.payload
            };
        case 'DELETE_MY_COURSE_DETAILS':
            return{
                ...state,
                courseDetail:action.payload
            }
        default:
            return state;
    }
}


const reducer = combineReducers({
    myCourseReducer,
    courseDetailReducer
});



const store = createStore(reducer , applyMiddleware(thunk));

export default store;


