import { combineReducers } from "redux";
import entities from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
    entities: entities,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});

export default rootReducer;