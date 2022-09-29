import logo from './logo.svg';
import './App.css';
import "animate.css/animate.min.css";
import Hero from './componets/Hero';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataBoard from './componets/DataBoard';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="IPL/" >
          <Route index element={<Hero />} />
          <Route path="data" element={<DataBoard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}