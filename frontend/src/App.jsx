import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
// import CarCard from "./components/CarCard"
import CarSlider from "./components/CarSlider"
import Footer from "./components/Footer"
import Counter from "./components/Counter"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
import Booking from "./pages/Booking"
import PaymentCompleted from "./components/Payment/PaymentCompleted"
import BookingHistory from "./components/BookingHistory/BookingHistory"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/cab-book" element={<Booking />} />
          <Route path="/payment-completed" element={<PaymentCompleted />} />
          <Route path="/booking-history" element={<BookingHistory />} />
        </Routes>
        <CarSlider />
      </BrowserRouter>
      <Counter />
      <Footer />
    </>
  )
}
