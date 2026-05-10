import { Outlet } from 'react-router-dom'
import SiteFooter from './SiteFooter'
import SiteNav from './SiteNav'

function SiteLayout() {
  return (
    <div className="site-shell">
      <SiteNav />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
