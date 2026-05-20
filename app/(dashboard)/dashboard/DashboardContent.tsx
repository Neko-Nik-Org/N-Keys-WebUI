"use client";

import { useState, useEffect } from "react";
import { Server, Shield, Activity, RefreshCw } from "lucide-react";

// Dummy API call function
const fetchDashboardStats = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
        activeEnvs: 12,
        totalKeys: 148,
        syncEvents: 3492,
        systemStatus: "Healthy",
        recentActivity: [
            { id: 1, action: "Key updated in Production", time: "2 mins ago" },
            { id: 2, action: "New environment 'Staging-EU' created", time: "1 hour ago" },
            { id: 3, action: "Sync event triggered by CI/CD", time: "3 hours ago" },
            { id: 4, action: "API Key rotated for Service-A", time: "5 hours ago" },
        ]
    };
};

export default function DashboardContent() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const loadStats = async () => {
        setLoading(true);
        const data = await fetchDashboardStats();
        setStats(data);
        setLoading(false);
    };

    useEffect(() => {
        loadStats();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back! Here's what's happening with your environments.</p>
                </div>
                <button 
                    onClick={loadStats} 
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-pulse">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-32 bg-slate-200 dark:bg-slate-800/50 rounded-xl"></div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Environments</h3>
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                <Server className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">{stats.activeEnvs}</div>
                        <div className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium flex items-center">
                            <span>+2 from last month</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total API Keys</h3>
                            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                                <Shield className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">{stats.totalKeys}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium flex items-center">
                            <span>Across all environments</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Sync Events (30d)</h3>
                            <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg">
                                <Activity className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">{stats.syncEvents.toLocaleString()}</div>
                        <div className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium flex items-center">
                            <span>System Status: {stats.systemStatus}</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h2>
                </div>
                
                {loading ? (
                    <div className="p-6 space-y-4 animate-pulse">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-12 bg-slate-200 dark:bg-slate-800/50 rounded-lg"></div>
                        ))}
                    </div>
                ) : (
                    <div className="divide-y divide-slate-200 dark:divide-slate-800">
                        {stats.recentActivity.map((activity: any) => (
                            <div key={activity.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{activity.action}</span>
                                </div>
                                <span className="text-sm text-slate-500 dark:text-slate-400">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
