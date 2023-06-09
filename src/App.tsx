import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import SubscribeModal from "./pages/Projects/subscribeModal/subscribeModal";
import MessageBox from "./pages/Projects/messageBox/messageBox";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/SubscribeModal" element={<SubscribeModal />} />
        <Route path="/projects/messageBox" element={<MessageBox />} />
      </Routes>
    </div>
  );
}

export default App;
