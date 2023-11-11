import React from "react";
import { ActionTypes } from "../actionTypes";

export interface TaskGridLayoutProps {
    children: React.ReactNode
}

export interface TaskCrudContainerProps {
    children: React.ReactNode;
}

export interface Task {
    title:string;
    description:string;
    complete:boolean;
}

export type TasksArray = Task[]

export type OnAddFunction = (task:Task)=>void

export type OnSaveFunction = (task:Task)=>void

export type OnCancelFunction = ()=>void

export type OnNotifyFunction = (action:NotifyAction)=>void

export type TaskKey = string

export type TaskKeysArray = TaskKey[]

export interface TaskFormProps {
    onAdd : OnAddFunction;
    taskToEdit: Task;
    onSave: OnSaveFunction;
    onCancel: OnCancelFunction;
    onNotify?: OnNotifyFunction;
    editTask: boolean;
}

export interface TaskCrudTitleProps {
    title : string;
    type : string;
    className ?:string;
}

export interface TasksListContainerProps {
    children : React.ReactNode
}

export type OnActionFunction  = (action:Action)=>void

export interface TasksListProps {
    tasks: TasksArray ;
    onTaskAction: OnActionFunction;
}

export interface TaskCardProps {
    task: Task;
    onAction: OnActionFunction;
}

export interface TaskAction {
    type: ActionTypes;
    payload: Task ;
}

export interface NotifyValidationErrorPayload {
    msg: Message
}

export interface NotifyValidationErrorAction {
    type: ActionTypes;
    payload: NotifyValidationErrorPayload
}

export type NotifyAction = NotifyValidationErrorAction 

export type Action  = TaskAction 

export interface FooterContainerProps {
    addButton : React.ReactNode;
    saveButton : React.ReactNode;
    cancelButton : React.ReactNode;
    editTask : boolean;
}

export type severityQuantitySuccess = 0;
export type severityQuantityDanger = 1 ;

export type severityLevelSuccess = "success";
export type severityLevelDanger = "danger"; 

export interface SeveritySuccess {
    quantity: severityQuantitySuccess;
    level: severityLevelSuccess;
}

export interface SeverityDanger {
    quantity: severityQuantityDanger;
    level: severityLevelDanger;
}


export type Severity = SeveritySuccess |
                       SeverityDanger                        

export interface Message {
   content: string;
   severity: Severity; 
}

export interface TaskAlertProps {
   show: boolean;
   msg: Message;
}

export interface AlertProps {
    msg : Message
}