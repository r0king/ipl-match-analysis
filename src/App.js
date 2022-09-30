import logo from './logo.svg';
import './App.css';
import "animate.css/animate.min.css";
import Hero from './componets/Hero';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import TableBoard from './componets/TableBoard';
import Databoard from './componets/Databoard';
import Seasons from './componets/Seasons';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route basemname={`/${process.env.PUBLIC_URL}`} >
          <Route index element={<Hero />} />
          <Route path={`/${process.env.PUBLIC_URL}/table`} element={<TableBoard/>}/>
          <Route path={`/${process.env.PUBLIC_URL}/dashboard`} element={<Databoard/>}/>
          <Route path={`/${process.env.PUBLIC_URL}/s/:season`} element={<Seasons/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}