import { ActionTypes } from "../actionTypes"
import { 
    NotifyValidationErrorPayload,
    NotifyValidationErrorAction 
 } from "../types/index";

export const notifyValidationErrorActionCreator = (payload: NotifyValidationErrorPayload):NotifyValidationErrorAction=>{
    return {
       type: ActionTypes.NOTIFY,
       payload: payload
    }
}

