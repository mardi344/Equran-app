import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Ayat from "./Pages/Ayat";
import Home from "./Pages/FrontPage";
import Viewsurat from "./Pages/Surat";
import Tafsir from "./Pages/Tafsir";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surat" element={<Viewsurat />} />
          <Route path="/surat/:suratid" element={<Ayat />} />
          <Route path="/tafsir/:suratid/:ayatid" element={<Tafsir />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
