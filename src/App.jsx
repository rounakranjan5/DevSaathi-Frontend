import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import ErrorPage from "./components/ErrorPage";
import Connections from "./components/Connections";
import ConnectionsRequests from "./components/ConnectionsRequests";
import ManagePassword from "./components/ManagePassword";
import Chat from "./components/Chat";

const app = () => {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/feed' element={<Feed />} />
              <Route path='/connections' element={<Connections />} />
              <Route path='/connections-requests' element={<ConnectionsRequests/>} />
              <Route path='/password' element={<ManagePassword/>} />
              <Route path='/chat/:targetUserId' element={<Chat/>} />
              <Route path='/error-page' element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default app;