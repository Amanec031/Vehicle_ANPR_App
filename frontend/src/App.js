import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUploader from "./UploadForm/ImageUploader";
import NotRegistered from "./NotRegistered/NotRegistered";
import Suspicious from "./Suspicious/Suspicious";
import Successful from "./success/Successful";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ImageUploader />} />
          <Route path="/notregistered" element={<NotRegistered />} />
          <Route path="/suspicious" element={<Suspicious />} />
          <Route path="/successful" element={<Successful />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
