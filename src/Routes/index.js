import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../components/pages/Home'
import PrivacyPage from '../components/pages/Privacy'
import ProtectDiscord from '../components/pages/ProtectDiscord'
import TermsPage from '../components/pages/Terms'

const RouteDistribuitor = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/discord' exact element={<ProtectDiscord />} />
        <Route path='/terms' exact element={<TermsPage />} />
        <Route path='/privacy' exact element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteDistribuitor
