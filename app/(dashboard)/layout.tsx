"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useSetAtom, useAtomValue } from "jotai";
import { userAtom, csrfTokenAtom } from "@/store/authStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  interface UserType {
    name?: string | null;
    email?: string | null;
    [key: string]: unknown;
  }

  const [user, setUserLocal] = useState<UserType | null>(null); // Hydration safety

  const setUser = useSetAtom(userAtom);
  const setCsrfToken = useSetAtom(csrfTokenAtom);
  const jotaiUser = useAtomValue(userAtom);

  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => {
      if (active) {
        setUserLocal(jotaiUser);
      }
    });
    return () => {
      active = false;
    };
  }, [jotaiUser]);

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const confirmLogout = () => {
    // Clear Jotai Store (localStorage)
    setUser(null);
    setCsrfToken(null);
    // Clear the auth token cookie so middleware redirects to login
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
    router.refresh(); 
  };

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1121] flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white dark:bg-[#131c2c] border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center z-20">
        <div className="font-bold text-lg text-brand-primary">N-Keys Dashboard</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 
        fixed md:sticky top-0 left-0 z-10 w-64 h-screen bg-white dark:bg-[#131c2c] border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-in-out flex flex-col
      `}>
        <div className="p-6 hidden md:block">
          <div className="font-extrabold text-xl tracking-tight text-brand-primary">N-Keys Dashboard</div>
        </div>

        <nav className="flex-1 px-4 py-4 md:py-0 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="px-3 py-2 mb-2 flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
              {user ? user.name : 'Loading...'}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {user ? user.email : ''}
            </span>
          </div>
          <button
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl">
        {/* Top Navbar / Header area (could be added here if needed, but for now just content) */}
        <div className="w-full">
          {children}
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-0 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#131c2c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Confirm Logout</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Are you sure you want to end your session?</p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setIsLogoutModalOpen(false)}
                className="px-4 py-2 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmLogout}
                className="px-4 py-2 rounded-xl font-medium text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
