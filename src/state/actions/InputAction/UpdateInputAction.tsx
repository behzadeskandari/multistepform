import { UPDATE_INPUT,UPDATE_INPUTEMAIL,UPDATE_INPUTCOUNTRY } from "../../constants/UPDATE_INPUT";
import { Action } from "redux";
export interface UpdateInputAction extends Action {
  type: typeof UPDATE_INPUT | typeof UPDATE_INPUTEMAIL | typeof UPDATE_INPUTCOUNTRY;
  payload: string | null;
}


function UpdateInput(value:string) : UpdateInputAction {
  return {
    type: UPDATE_INPUT,
    payload: value,
  }
}

export function UpdateInputEmail(value:string) : UpdateInputAction {
  return {
    type: UPDATE_INPUTEMAIL,
    payload: value,
  }
}


export function UpdateInputCountry(value:string| null) : UpdateInputAction {
  return {
    type: UPDATE_INPUTCOUNTRY,
    payload: value,
  }
}

export default UpdateInput;