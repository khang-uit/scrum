import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Sort from "./pages/Details/Sort/Sort";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/sort" element={<Sort/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
