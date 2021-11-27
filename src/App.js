import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./pages/index";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
