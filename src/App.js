import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Create from "./pages/create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
