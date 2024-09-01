import { createSlice } from "@reduxjs/toolkit";
import dataTask from '../data/dataTask.json'
import { ITask } from "../interface/interface";

export const taskSlice = createSlice({
    name: 'task',
    initialState: dataTask,
    reducers: {
        deleteTask: (state, action: {payload: number}) => {

            return state.filter((task: ITask) => {
                if (task.id == action.payload) return false;
                return true;
            })
        },
        addNewTask: (state, action: {payload: any}) => {
            state.unshift({...action.payload, id: state.length + 1})
        },
        changeImportant: (state, action: {payload: number})  => {
            state.filter((task: ITask) => {
                if(task.id == action.payload) task.important = !task.important
                return true
            })
        },
        changeCompleted: (state, action: {payload: number})  => {
            state.filter((task: ITask) => {
                if(task.id == action.payload) task.completed = !task.completed
                return true
            })
        }
    }
})

export const { deleteTask, changeImportant, changeCompleted, addNewTask } = taskSlice.actions

export default taskSlice.reducer