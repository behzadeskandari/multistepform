import { UPDATE_INPUT } from "../../constants/UPDATE_INPUT";

export interface UpdateInputAction{
  type: typeof UPDATE_INPUT;
  payload: string;
}


function UpdateInputReducer(value:string) : UpdateInputAction {
  return {
    type: UPDATE_INPUT,
    payload: value,
  }
}


export default UpdateInputReducer;