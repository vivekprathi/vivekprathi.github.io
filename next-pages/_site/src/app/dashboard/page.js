import { BarChart, Users, Activity, Settings, Bell, Search, Menu } from 'lucide-react';
import Script from "next/script";

export default function DashboardPage() {
    return (
        <>
        <Script
          referrerPolicy="no-referrer-when-downgrade"
          src="https://dev.visualwebsiteoptimizer.com/tag/3002001.js"
          id="vwoCode"
          strategy="beforeInteractive"
        />
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Inter, sans-serif', color: '#0f172a' }}>
            {/* Sidebar */}
            <aside style={{ width: '256px', backgroundColor: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Activity color="white" size={20} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>AnalyticsPro</span>
                </div>

                <nav style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem', paddingLeft: '0.75rem' }}>OVERVIEW</p>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', backgroundColor: '#eff6ff', color: '#1d4ed8', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 500 }}>
                        <BarChart size={20} />
                        Dashboard
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: '#64748b', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 500 }}>
                        <Users size={20} />
                        Audience
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: '#64748b', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 500 }}>
                        <Activity size={20} />
                        Performance
                    </a>

                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginTop: '1.5rem', marginBottom: '0.5rem', paddingLeft: '0.75rem' }}>SYSTEM</p>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', color: '#64748b', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 500 }}>
                        <Settings size={20} />
                        Settings
                    </a>
                </nav>

                <div style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#cbd5e1', borderRadius: '50%' }}></div>
                    <div>
                        <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>Jane Doe</p>
                        <p style={{ color: '#64748b', fontSize: '0.75rem' }}>Admin</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Menu size={24} color="#64748b" style={{ cursor: 'pointer' }} />
                        <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Overview</h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                            <input type="text" placeholder="Search..." style={{ padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '9999px', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: '#f8fafc', fontSize: '0.875rem' }} />
                        </div>
                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <Bell size={24} color="#64748b" />
                            <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '10px', height: '10px', backgroundColor: '#ef4444', borderRadius: '50%', border: '2px solid white' }}></div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                    {/* Stats Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                        {['Total Users', 'Revenue', 'Active Sessions', 'Bounce Rate'].map((item, i) => (
                            <div key={item} style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                                <p style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>{item}</p>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>{['24.8K', '$12.5K', '1.2K', '42%'][i]}</h3>
                                    <span style={{ color: i === 3 ? '#ef4444' : '#22c55e', fontSize: '0.875rem', fontWeight: 600 }}>
                                        {i === 3 ? '+2.4%' : '+12.5%'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                        {/* Main Chart */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h3 style={{ fontWeight: 600 }}>Revenue Overview</h3>
                                <select style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '0.875rem' }}>
                                    <option>Last 30 Days</option>
                                    <option>This Year</option>
                                </select>
                            </div>
                            <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingTop: '2rem', borderBottom: '1px solid #e2e8f0' }}>
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} style={{ flex: 1, backgroundColor: i % 2 === 0 ? '#3b82f6' : '#93c5fd', height: `${Math.random() * 80 + 20}%`, borderRadius: '0.25rem 0.25rem 0 0' }}></div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                            </div>
                        </div>

                        {/* Sidebar Widget */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Recent Activity</h3>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ width: '32px', height: '32px', backgroundColor: '#e0e7ff', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: '#4f46e5', borderRadius: '50%' }}></div>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>User signed up</p>
                                            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{i * 15} minutes ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button style={{ width: '100%', padding: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: '#475569', cursor: 'pointer', marginTop: '1rem' }}>
                                View All Activity
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    );
}
