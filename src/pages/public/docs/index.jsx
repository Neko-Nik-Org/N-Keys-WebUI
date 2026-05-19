import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate, useLocation } from 'react-router-dom';
import SeoMeta from '@/components/SeoMeta';
import { docsCategories, getDocBySlug } from '@/data/docsData';

function Docs() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Default to the first doc if no slug is provided
    useEffect(() => {
        if (!slug && docsCategories.length > 0 && docsCategories[0].items.length > 0) {
            navigate(`/docs/${docsCategories[0].items[0].slug}`, { replace: true });
        }
    }, [slug, navigate]);

    // Close sidebar on navigation (mobile)
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location]);

    const currentDoc = getDocBySlug(slug) || (docsCategories[0]?.items[0]);

    if (!currentDoc) return null;

    return (
        <div className="flex flex-col min-h-[calc(100vh-73px)] bg-slate-50 dark:bg-transparent transition-colors duration-300 relative z-0">
            <SeoMeta
                title={`${currentDoc.title} | N-Keys Documentation`}
                description="Official documentation for N-Keys environment and configuration management."
            />

            {/* Mobile Header for Sidebar Toggle */}
            <div className="lg:hidden sticky top-[72px] z-30 flex items-center px-6 py-3 bg-white/90 dark:bg-[#0b1121]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors font-bold text-sm bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700"
                    aria-label="Open Docs Menu"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v16" />
                    </svg>
                    <span>Browse Topics</span>
                </button>
            </div>

            <div className="flex-1 w-full max-w-screen-2xl mx-auto flex">
                
                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <aside 
                    className={`fixed lg:sticky top-0 lg:top-[73px] self-start left-0 z-50 lg:z-10 w-[280px] h-full lg:h-[calc(100vh-73px)] bg-white lg:bg-transparent dark:bg-[#0b1121] lg:dark:bg-transparent border-r border-slate-200 dark:border-slate-800 overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
                >
                    {/* Mobile Sidebar Header with Close Button */}
                    <div className="lg:hidden flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
                        <span className="font-bold text-slate-900 dark:text-white tracking-wide">N-Keys Docs</span>
                        <button 
                            onClick={() => setIsSidebarOpen(false)} 
                            className="p-2 -mr-2 text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors"
                            aria-label="Close Docs Menu"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="p-6 lg:pt-16 lg:pb-10 space-y-8">
                        {docsCategories.map((category, idx) => (
                            <div key={idx}>
                                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 px-1">
                                    {category.title}
                                </h4>
                                <ul className="space-y-1">
                                    {category.items.map((item) => (
                                        <li key={item.slug}>
                                            <NavLink
                                                to={`/docs/${item.slug}`}
                                                className={({ isActive }) =>
                                                    `block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                                                        isActive
                                                            ? 'bg-brand-primary/10 text-brand-hover dark:text-brand-primary font-bold'
                                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white font-medium'
                                                    }`
                                                }
                                            >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 px-6 py-10 lg:px-12 lg:py-16 xl:px-20 relative overflow-hidden">
                    {/* Background styling for dark mode depth */}
                    <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
                    
                    <article className="max-w-4xl mx-auto">
                        <currentDoc.content />
                    </article>
                    
                    {/* Footer for Docs Navigation (Optional, can be added later) */}
                </main>
            </div>
        </div>
    );
}

export default Docs;
