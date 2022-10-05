import { Reducer } from "@reduxjs/toolkit";

export interface IInitialState {
    id: number;
    advice: string;
}

const initialState : IInitialState = {
    id: 0,
    advice: "Get your advice",
};

const adviceReducer : Reducer<IInitialState> = (state = initialState, action) => {
  
    switch (action.type) {
        case "SET_ADVICE":
            return { id: action.payload.id, advice: action.payload.advice}
        default:
            return { ...state }
    }
};

export default adviceReducer;