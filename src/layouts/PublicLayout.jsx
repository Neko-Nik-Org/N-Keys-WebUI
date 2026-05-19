import SiteFooter from '@/components/common/Footer';
import SiteNav from '@/components/navbar/public';
import { Outlet } from 'react-router-dom';

function PublicLayout() {
    return (
        <div className="site-shell">
            <SiteNav />
            <main>
                <Outlet />
            </main>
            <SiteFooter />
        </div>
    );
}

export default PublicLayout;