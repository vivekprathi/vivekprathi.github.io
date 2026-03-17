import { ShoppingCart, Star, Shield, Zap } from 'lucide-react';
import Script from "next/script";

export default function ProductPage() {
  return (
    <>
    <Script
      referrerPolicy="no-referrer-when-downgrade"
      src="https://dev.visualwebsiteoptimizer.com/tag/3002002.js"
      id="vwoCode"
      strategy="beforeInteractive"
    />
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#fff', backgroundColor: '#0f172a', minHeight: '100vh', margin: 0 }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid #1e293b' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          TechPro
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Features</a>
          <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Specs</a>
          <button style={{ backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>Buy Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', alignItems: 'center', gap: '4rem' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: '#1e293b', borderRadius: '9999px', color: '#8b5cf6', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>
            New Release v2.0
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            The Future of <span style={{ color: '#3b82f6' }}>Wireless Audio</span>.
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
            Experience crystal-clear sound with our next-generation noise cancellation technology. Designed for audiophiles.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 600, cursor: 'pointer' }}>
              <ShoppingCart size={20} />
              Add to Cart - $299
            </button>
            <button style={{ backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155', padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 600, cursor: 'pointer' }}>
              View Details
            </button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: '#94a3b8' }}>
            <div style={{ display: 'flex', color: '#fbbf24' }}>
              <Star fill="#fbbf24" size={20} />
              <Star fill="#fbbf24" size={20} />
              <Star fill="#fbbf24" size={20} />
              <Star fill="#fbbf24" size={20} />
              <Star fill="#fbbf24" size={20} />
            </div>
            <span>4.9/5 from over 2,000 reviews</span>
          </div>
        </div>

        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(15,23,42,0) 70%)', filter: 'blur(40px)', transform: 'scale(1.5)' }}></div>
          <div style={{ width: '100%', height: '500px', backgroundColor: '#1e293b', borderRadius: '2rem', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
             <p style={{ color: '#64748b', fontSize: '1.5rem', fontWeight: 600 }}>[Product Image]</p>
          </div>
        </div>
      </main>

      {/* Features */}
      <section style={{ backgroundColor: '#0b1120', padding: '5rem 2rem', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ padding: '2rem', backgroundColor: '#0f172a', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <Zap color="#3b82f6" size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ultra Fast Charging</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Get 5 hours of playback from just a 10-minute charge. Never run out of battery during your workouts again.</p>
          </div>
          <div style={{ padding: '2rem', backgroundColor: '#0f172a', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <Shield color="#8b5cf6" size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Premium Case</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Constructed from aerospace-grade aluminum. Keep your earbuds protected from the elements wherever you go.</p>
          </div>
          <div style={{ padding: '2rem', backgroundColor: '#0f172a', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <Star color="#fbbf24" size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lossless Audio</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Experience music exactly as the artist intended with our custom high-fidelity audio drivers.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
