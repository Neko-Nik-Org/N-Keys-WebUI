import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="app-layout">
      {/* You can add a sidebar or app header here */}
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;