import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificates from "./pages/Certificates";
import Conquest from "./pages/Conquest";
import Home from "./pages/home";
import Learn from "./pages/Learn";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import Review from "./pages/Review";
<<<<<<< HEAD
=======
import Profile from "./pages/Profile";

// import Review from "./pages/Review";
>>>>>>> 88d0469e5d9dda73011991c466dac1708116ec66


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/certificates" element={<Certificates />}></Route>
        <Route path="/conquests" element={<Conquest />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
<<<<<<< HEAD
        <Route path="/review" element={<Review />}></Route>
=======
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/review" element={<Review />}></Route> */}
>>>>>>> 88d0469e5d9dda73011991c466dac1708116ec66
      </Routes>
    </Router>
  );
};
export default App;
