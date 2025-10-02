import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import LayoutMain from "./layouts/LayoutMain";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
