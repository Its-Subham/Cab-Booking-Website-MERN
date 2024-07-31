import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./pages/Header"
import Home from "./pages/Home"
// import CarCard from "./components/CarCard"
import CarSlider from "./components/CarSlider"
import Footer from "./components/Footer"
import Counter from "./components/Counter"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <CarSlider/>
    </BrowserRouter>
    </>
  )
}
