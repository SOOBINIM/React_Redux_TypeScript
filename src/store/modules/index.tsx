import { combineReducers } from "redux";
import counter from "./conter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
