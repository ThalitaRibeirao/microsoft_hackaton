import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Learn from "./pages/Learn";
import Conquest from "./pages/Conquest";
import Review from "./pages/Review";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/conquests" element={<Conquest />}></Route>
        <Route path="/review" element={<Review />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
