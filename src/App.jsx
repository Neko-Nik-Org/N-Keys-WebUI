import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import FeaturesPage from './pages/FeaturesPage'
import WaitlistPage from './pages/WaitlistPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import HomePage from './pages/HomePage'
import RoadmapPage from './pages/RoadmapPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="waitlist" element={<WaitlistPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
