import { createSlice } from "@reduxjs/toolkit";


const subscriptionListSlice = createSlice({
    name:"jobList",
    initialState : {
        jobList : [1,2,3,4],
        categoryListWithValues : {},
        sortedIntegrationListWithStatus:[],
    },
    reducers:{
        setJobList : (state , action)=> {
            state.jobList = action.payload.jobList;
        }
    }
})


export const {setJobList} = subscriptionListSlice.actions;

export default subscriptionListSlice.reducer;