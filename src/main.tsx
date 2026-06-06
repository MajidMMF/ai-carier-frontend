import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

export const server = "https://ai-carier-backend.onrender.com"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <GoogleOAuthProvider clientId='110713270450-iq2kt16vcgqkusl4j8p78k4f3vnj8dcl.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </AppProvider>
  </StrictMode>,
)
