import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "100px auto" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
