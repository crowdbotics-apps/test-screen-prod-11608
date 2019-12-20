import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */
import { EmailAuthReducer } from "../features/EmailAuth/redux/reducers";
import { CalendarReducer } from "../features/Calendar/redux/reducers";
//@BlueprintReduxImportInsertion
import { Dashboard1BlueprintReducer } from '../features/Dashboard1Blueprint/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },
  EmailAuth: EmailAuthReducer,
  Calendar: CalendarReducer,
  //@BlueprintReduxCombineInsertion
Dashboard1Blueprint: Dashboard1BlueprintReducer,

});