import { UpdateInputAction } from "../actions/InputAction/UpdateInputAction";
import { UPDATE_INPUT,UPDATE_INPUTCOUNTRY,UPDATE_INPUTEMAIL } from "../constants/UPDATE_INPUT";

export interface InputState{
  inputValue: string | null;
  EmailValue: string | null;
  COUNTRYValue: string | null | any;
}


const initialState: InputState = {
  inputValue: '',
  EmailValue: '',
  COUNTRYValue: '',
}

type InputAction = UpdateInputAction;



function InputReducer(state: InputState = initialState,action:InputAction): InputState {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      }
      case UPDATE_INPUTEMAIL:
        return {
          ...state,
          EmailValue: action.payload
      }
      
      case UPDATE_INPUTCOUNTRY:
        return {
          ...state,
          COUNTRYValue: action.payload
        }
    default:
      return state;
  }
}

export default InputReducer;