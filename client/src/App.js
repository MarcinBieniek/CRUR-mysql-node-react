import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './pages/Update';
import Add from './pages/Add';
import Books from './pages/Books';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
