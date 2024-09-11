import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MapContextProvider from './context/MapContext.jsx'
import PaymentContextProvider from './context/PaymentContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapContextProvider>
      <PaymentContextProvider>
        <App />
      </PaymentContextProvider>
    </MapContextProvider>
  </React.StrictMode>,
)
