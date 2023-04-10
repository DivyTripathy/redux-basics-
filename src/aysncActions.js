const redux= require("redux");
const createStore = redux.createStore;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCHED_USERS_REQUESTED= 'FETCHED_USERS_REQUESTED';
const FETCHED_USERS_SUCCEEDED= 'FETCHED_USERS_SUCCEEDED';
const FETCHED_USERS_FAILED= 'FETCHED_USERS_FAILED';

const fetchUsersRequest = () =>{
    return{
        type:FETCHED_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) =>{
    return{
        type:FETCHED_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailure = (error) =>{
    return{
        type: FETCHED_USERS_FAILED,
        payload: error
    }
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCHED_USERS_REQUESTED:
        return{
            ...state,
            loading: true
        }
        case FETCHED_USERS_SUCCEEDED:
        return{
            loading: false,
            users: action.payload,
            error:''
        }
        case FETCHED_USERS_FAILED:
        return{
            loading: false,
            users:[],
            error: action.payload
        }
    }
}

const store = createStore(reducer)