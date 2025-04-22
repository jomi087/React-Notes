import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name : "todo",
    initialState : {
        task : []
    },
    reducers: {
        addTodo: (state, action) => {
            const task = {
                id: Date.now(),
                text : action.payload
            }
            state.task.push(task)
        },

        removeTodo: (state, action) => {
            state.task = state.task.filter((task)=>task.id != action.payload)
        }
    }
})

export const { addTodo , removeTodo} = taskSlice.actions
export default taskSlice.reducer


// import { createSlice } from '@reduxjs/toolkit'

// const Slice = createSlice({
//     name: 'slice',
//     initialState: {
//         count : 0
//     },
//     reducers: {
//         inc: (state)=>{
//             state.count = state.count+1
//         },
//         dec: (state) => {
//             state.count = state.count-1
//         }
//     }
// })

// export const {inc , dec } = Slice.actions
// export default Slice.reducer
