import { FaRoad } from "react-icons/fa6";
import Home from "./pages/Home";
import Header from "./pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}