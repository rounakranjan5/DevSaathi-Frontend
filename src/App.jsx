import { BrowserRouter, Routes ,Navigate, Route} from "react-router";
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
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/ContactUs";
import TermsAndConditions from "./components/TermsCond";

const isAuthenticated = () => {
  return appStore.getState().user !== null;
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const app = () => {
  return (
    <>
       <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            
            <Route index element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feed"
              element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              }
            />
            <Route
              path="/connections"
              element={
                <ProtectedRoute>
                  <Connections />
                </ProtectedRoute>
              }
            />
            <Route
              path="/connections-requests"
              element={
                <ProtectedRoute>
                  <ConnectionsRequests />
                </ProtectedRoute>
              }
            />
            <Route
              path="/password"
              element={
                <ProtectedRoute>
                  <ManagePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/:targetUserId"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />

            <Route path="/about" element={<AboutUs/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/terms-conditions" element={<TermsAndConditions/>}/>

            <Route path="*" element={<ErrorPage />} />


          
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default app;