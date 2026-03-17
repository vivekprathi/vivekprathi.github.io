"use client";

import { Github, Linkedin, Mail, ExternalLink, Code2, Layout, Database } from 'lucide-react';
import Script from "next/script";

export default function PortfolioPage() {
    return (
        <>
        <Script
          referrerPolicy="no-referrer-when-downgrade"
          src="https://dev.visualwebsiteoptimizer.com/tag/3002003.js"
          id="vwoCode"
          strategy="beforeInteractive"
        />
        <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ededed', fontFamily: 'Inter, sans-serif' }}>
            {/* Header */}
            <header style={{ padding: '2rem 10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
                    ALEX.<span style={{ color: '#3b82f6' }}>DEV</span>
                </div>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#about" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}>About</a>
                    <a href="#work" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}>Work</a>
                    <a href="#contact" style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}>Contact</a>
                </nav>
            </header>

            {/* Hero */}
            <main style={{ padding: '8rem 10%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                    <h2 style={{ color: '#3b82f6', fontWeight: 600, fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Full-Stack Engineer
                    </h2>
                    <h1 style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '800px', margin: '0 0 2rem 0' }}>
                        Building digital products that <span style={{ color: '#a855f7' }}>scale</span>.
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#a3a3a3', maxWidth: '600px', lineHeight: 1.6, marginBottom: '3rem' }}>
                        I specialize in crafting high-performance, accessible, and stunning web applications using modern technologies.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button style={{ backgroundColor: '#ededed', color: '#0a0a0a', border: 'none', padding: '1rem 2rem', borderRadius: '4px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            View Projects <ExternalLink size={18} />
                        </button>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <a href="#" style={{ color: '#a3a3a3', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #262626', transition: 'all 0.2s' }}>
                                <Github size={20} />
                            </a>
                            <a href="#" style={{ color: '#a3a3a3', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #262626', transition: 'all 0.2s' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" style={{ color: '#a3a3a3', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #262626', transition: 'all 0.2s' }}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <section style={{ marginTop: '8rem' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}>My Expertise</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <Layout size={32} color="#3b82f6" />, title: 'Frontend Development', desc: 'React, Next.js, Vue, Tailwind CSS' },
                            { icon: <Database size={32} color="#10b981" />, title: 'Backend Systems', desc: 'Node.js, Python, PostgreSQL, Redis' },
                            { icon: <Code2 size={32} color="#f59e0b" />, title: 'Architecture', desc: 'Microservices, Serverless, Docker, AWS' }
                        ].map((service, i) => (
                            <div key={i} style={{ backgroundColor: '#171717', padding: '3rem 2rem', borderRadius: '8px', border: '1px solid #262626', transition: 'transform 0.3s', cursor: 'pointer' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{service.title}</h4>
                                <p style={{ color: '#a3a3a3', lineHeight: 1.6 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
        </>
    );
}
