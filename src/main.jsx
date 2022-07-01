import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from './pages/main/Main';
import Navbar from './components/navBar/Navbar'
import { Context } from './context/context';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
      <Navbar>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/dashboard" element={<Main/>} />
          </Routes>
      </Navbar>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
)
