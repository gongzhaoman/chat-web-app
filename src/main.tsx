import '@/styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import { loadCatalog } from '@/lib/i18n'

// load initial language, you can detect here a user language with your preferred method
await loadCatalog('en')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
