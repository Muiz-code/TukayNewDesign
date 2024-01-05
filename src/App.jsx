import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SideBar from "./Components/SideBar";
import Insight from "./Pages/Insight";
import Profile from "./Pages/Profile";
import Notifications from "./Pages/Notifications";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="" element={<SideBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notifications />} />
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
