const initialState = {
    id: 0,
    advice: "",
};

const adviceReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case "SET_ADVICE":
            return { id: action.payload.id, advice: action.payload.advice}
        default:
            return { ...state }
    }
};

export default adviceReducer;