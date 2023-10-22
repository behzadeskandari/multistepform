import { UpdateInputAction } from "../actions/InputAction/UpdateInputAction";
import { UPDATE_INPUT } from "../constants/UPDATE_INPUT";

export interface InputState{
  inputValue: string;
}


const initialState: InputState = {
  inputValue: '',
}

type InputAction = UpdateInputAction;



function InputReducer(state: InputState,action:InputAction): InputState {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        inputValue: action.payload
      }
    default:
      return state;
  }
}

export default InputReducer;