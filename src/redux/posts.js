const initialState = {
    items: [],
    loading: false,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'posts/load/start':
            return{
                ...state,
                loading: true,
            };

        case 'posts/load/success':
            return {
                ...state,
                items: action.payload,
                loading: false,
            };

        default:
            return state;
    }
}

export default postsReducer;