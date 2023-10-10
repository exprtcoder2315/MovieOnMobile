let initialState = {
    respponse: {},
    status: false,
    loading: true
};

const MovieData = (state = initialState, action) => {
    console.log('action---', action);
    switch (action.type) {
        case "SERVER_RESPONSE":

            state = {
                [action.payload.key]: {
                    response: action.payload.data,
                    status: true,
                    loading: false
                }
            }
            return state

        case "SERVER_ERROR":

            state = {
                [action.payload.key]: {
                    error: action.payload.data,
                    status: false,
                    loading: false
                }
            }
            return state


        default:
            return state
    }
}

export default MovieData;