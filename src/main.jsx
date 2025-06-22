import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { AppContextProvider } from './Context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'  // 👈 Qo'shish kerak

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <BrowserRouter> {/* ✅ Buni qo‘shish kerak */}
          <App />
        </BrowserRouter>
      </AppContextProvider>
    </Provider>
  </StrictMode>
)
