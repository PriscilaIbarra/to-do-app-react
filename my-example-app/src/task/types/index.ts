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
}

export type TasksArray = Task[]


export type OnAddFunction = (task:Task)=>void

export type OnSaveFunction = (task:Task)=>void

export type OnCancelFunction = ()=>void

export interface TaskFormProps {
    onAdd : OnAddFunction;
    taskToEdit: Task;
    onSave: OnSaveFunction;
    onCancel: OnCancelFunction;
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

export interface Action {
    type: ActionTypes;
    payload: Task;
}

export interface FooterContainerProps {
    addButton : React.ReactNode;
    saveButton : React.ReactNode;
    cancelButton : React.ReactNode;
    editTask:boolean;
}