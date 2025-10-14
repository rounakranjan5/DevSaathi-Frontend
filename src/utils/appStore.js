import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionsReducer from './connectionsSlice'
import receivedConnections from './receivedConnectionsSlice'

const appStore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connections:connectionsReducer,
        receivedConnections:receivedConnections
    }
})

export default appStore