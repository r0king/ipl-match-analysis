import logo from './logo.svg';
import './App.css';
import "animate.css/animate.min.css";
import Hero from './componets/Hero';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableBoard from './componets/TableBoard';
import Databoard from './componets/Databoard';
import Seasons from './componets/Seasons';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="IPL/" >
          <Route index element={<Hero />} />
          <Route path="table" element={<TableBoard/>}/>
          <Route path="dashboard" element={<Databoard/>}/>
          <Route path="s/:season" element={<Seasons/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}