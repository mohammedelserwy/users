import { Fetch_Users } from "./action";


const initialState = {
    users: []
};


export const usersReducer = function (state = initialState, action) {
    switch (action.type) {
        case Fetch_Users:
            return {
                users: action.users,
            };
        default:
            return state;
    }
};