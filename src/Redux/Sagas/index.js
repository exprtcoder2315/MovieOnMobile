import { takeEvery, put, all, takeLatest, call } from 'redux-saga/effects';
import axios from "axios";
import auth from '@react-native-firebase/auth';

const baseUrl = `https://api.themoviedb.org/3/`

export function* productSaga(data) {
    console.log('=-=-=-=--=-=-=-=de')
    yield takeEvery("SERVER_REQUEST", apiCall)
    yield takeEvery("LOGIN_REQUEST", loginRequestApi)
    yield takeEvery("SIGNUP_REQUEST", signupRequestApi)

}

export function* apiCall(data) {
    const result = yield call(requestServer, data);
    yield put({ type: "SERVER_RESPONSE", payload: result })

}

export function* loginRequestApi(data) {
    const result = yield call(loginFirebase, data);
    if(result?.result){
        yield put({ type: "SERVER_RESPONSE", payload: result })

    }else{
        yield put({ type: "SERVER_ERROR", payload: result })
    }
}

export function* signupRequestApi(data) {
    const result = yield call(signupFirebase, data);

    if(result?.result){
        yield put({ type: "SERVER_RESPONSE", payload: result })

    }else{
        yield put({ type: "SERVER_ERROR", payload: result })
    }
}

function requestServer(data) {
    return new Promise((res, rej) => {
        var data_obj = {}
        axios.get(`${baseUrl}${data?.payload?.endPoint}`)
            .then(function (response) {
                console.log("-------API_RESPONSE---------");
                data_obj = {
                    data: data?.payload?.responseType ? response?.data : response?.data?.results,
                    key: data.payload.key,
                }
                res(data_obj)

            })
            .catch(function (error) {
                data_obj = {
                    data: error,
                    key: data.payload.key,
                }
                console.log('------error-------');
                rej(data_obj)
            });
    });

};

function loginFirebase(data) {
    return new Promise((res, rej) => {
        var data_obj = {}

        auth().signInWithEmailAndPassword(data?.payload?.email, data?.payload?.password).
            then((user) => {
                console.log("-------FIRE_BASE_LOGIN--------");
                data_obj = {
                    data: user?.user,
                    key: data.payload.key,
                    result:true
                }
                res(data_obj)
                
            }).catch((error) => {
                console.log('------error-------');
                data_obj = {
                    data: error,
                    key: data.payload.key,
                    result:false
                }
                res(data_obj)
            })

    })
};


function signupFirebase(data) {

    return new Promise((response, rej) => {
        var data_obj = {}
        auth().createUserWithEmailAndPassword(data?.payload?.email, data?.payload?.password).
            then((userCredentials) => {
                if (userCredentials.user) {
                    data_obj = {
                        data: userCredentials.user,
                        key: data.payload.key,
                        result:true
                    }
                    response(data_obj)
                }
            }).catch((error) => {
                data_obj = {
                    data: error,
                    key: data.payload.key,
                    result:false
                }
                response(data_obj)
            })

    })
};
