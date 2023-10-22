import { combineReducers } from 'redux';

import  InputReducer  from './InputReducer';


const rootReducer = combineReducers({
  Inputed :InputReducer
})


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;