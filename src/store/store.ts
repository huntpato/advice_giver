import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import adviceReducer from "../reducers/adviceReducer";


// const rootReducer = combineReducers({
    
// });

// export type IRootState = ReturnType<typeof rootReducer>;
// export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

const store = createStore(adviceReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
