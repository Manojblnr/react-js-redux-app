import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList : [],
    selectedTask : {}
}

const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
        addTaskToList: (state, action) => {
            const num = Math.random() * 100 // random id generation
            const id = num.toFixed(0)
            let task = {...action.payload, id}
            state.tasksList.push(task)
        },
        removeTaskFromList: (state, action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)    
        },
        updateTaskFromList: (state, action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
        },
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload
        }

    }
})


export const { addTaskToList, removeTaskFromList, updateTaskFromList, setSelectedTask} = tasksSlice.actions
export default tasksSlice.reducer


// filter:
//      This method iterates through the each element of the array and evaluates condition.
//      It creates a new array containing only the elements that satisfy condition.
//      This method basically used for creating and deleting the elements.  

//      note: returns the new array of satisfied condition elements only
//        1. Finding Specific Item

// map
//       method is designed to transform each element of an array
//      For updating the element use map
//      note: returns the new array of all the elements
//      1. Updating Items
//      2. Displaying a List of Items