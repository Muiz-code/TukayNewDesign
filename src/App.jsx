import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import SideBar from "./Components/SideBar";
import Scheduler from "./Pages/Scheduler";
import Profile from "./Pages/Profile";
import Notifications from "./Pages/Notifications";
import Chats from "./Pages/Chats";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="" element={<SideBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/chat" element={<Chats />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="bg-[#113a2f]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
