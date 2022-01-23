import User from "../model/User";

export const Fetch_Users = "Fetch_Users";
export const Register = "Register";
export const Log_in = "Log_In";

export const fetchUsers = function () {
    return async function (dispatch) {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const responseBody = await response.json();
        const users = responseBody.data;



        dispatch({ type: Fetch_Users, users: users });
    };
};
export const register = function (email, password) {
    return async function (dispatch) {
        const response = await fetch("https://reqres.in/api/register",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password }),
            }
        );
        const responseBody = await response.json();

const singUpToken = responseBody.token;

        await AsyncStorage.setItem('singUpToken', singUpToken);
        await AsyncStorage.setItem('singUpEmail', email);
        await AsyncStorage.setItem('singUpPassword', password);

        

        dispatch({ type: Register });
    };
};
export const logIn = function (email, password) {
    return async function (dispatch) {
        const response = await fetch("https://reqres.in/api/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password }),
            }
        );
        const responseBody = await response.json();



        console.log(responseBody);

        dispatch({ type: Log_in });
    };
};
