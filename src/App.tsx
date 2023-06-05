import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import SubscribeModal from "./pages/Projects/subscribeModal/subscribeModal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/SubscribeModal" element={<SubscribeModal />} />
      </Routes>
    </div>
  );
}

export default App;
