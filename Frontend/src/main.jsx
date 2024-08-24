import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeCompo } from './context/themeContext.jsx';
import "animate.css/animate.compat.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeCompo>
       <App />
    </ThemeCompo>
  </StrictMode>
);
