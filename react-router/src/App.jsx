import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Quotes from "./pages/Quotes";

import "./App.css";
import BottomBar from "./components/BottomBar";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/events" element={<Events />} />
                <Route path="/interest" element={<Interest />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/quotes" element={<Quotes />} />
            </Routes>
            <BottomBar />
        </Router>
    );
}

export default App;
