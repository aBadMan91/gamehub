import { Routes, Route } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
