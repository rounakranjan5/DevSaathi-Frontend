import { createSlice } from "@reduxjs/toolkit";

const receivedConnectionsSlice=createSlice({
    name:"receivedConnections",
    initialState:null,
    reducers:{
        addReceivedConnections:(state,action)=>{
            return action.payload;
        },
        removeReceivedConnections:()=>{
            return null;
        }
    }
})


export const {addReceivedConnections,removeReceivedConnections}=receivedConnectionsSlice.actions;

export default receivedConnectionsSlice.reducer