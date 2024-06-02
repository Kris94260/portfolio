import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Documents from "./components/Documents.jsx"
import Haproxy from "./components/Haproxy.jsx";
import Snort from "./components/Snort.jsx";
import IA from "./components/IA.jsx";
import OrdiQuantiques from "./components/OrdiQuantiques.jsx";
import Tp from "./components/Tp.jsx";




export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/haproxy" element={<Haproxy />} />
        <Route path="/snort" element={<Snort />} />
        <Route path="/IA" element={<IA />} />
        <Route path="/tp" element={<Tp />} />
        <Route path="/Ordinateurs-quantiques" element={<OrdiQuantiques />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);