import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/variable.css';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
