"use client";

import { ShoppingCart, Star, Shield, Zap, X, Tag } from 'lucide-react';
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

export default function ProductPage() {
  const CART_KEY = "next-showcase:product-cart:v1";
  const COUPON_KEY = "next-showcase:product-coupon:v1";

  const [variant, setVariant] = useState({ color: "Midnight", storage: "256GB" });
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  const [coupon, setCoupon] = useState(() => {
    try { return localStorage.getItem(COUPON_KEY) || ""; } catch { return ""; }
  });
  const [couponInput, setCouponInput] = useState("");

  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(COUPON_KEY, coupon);
  }, [coupon]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const unitPrice = useMemo(() => {
    const base = 299;
    const storageUp = variant.storage === "512GB" ? 50 : variant.storage === "1TB" ? 120 : 0;
    return base + storageUp;
  }, [variant.storage]);

  const cartCount = useMemo(() => cart.reduce((s, l) => s + l.qty, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((s, l) => s + l.unitPrice * l.qty, 0), [cart]);
  const discount = useMemo(() => {
    const c = coupon.trim().toUpperCase();
    if (c === "SAVE10") return Math.round(subtotal * 0.10);
    if (c === "FREESHIP") return 15;
    return 0;
  }, [coupon, subtotal]);
  const total = useMemo(() => Math.max(0, subtotal - discount), [subtotal, discount]);

  function addToCart() {
    const id = `${variant.color}|${variant.storage}`;
    setCart((prev) => {
      const i = prev.findIndex((x) => x.id === id);
      if (i === -1) return [{ id, ...variant, unitPrice, qty }, ...prev];
      const next = [...prev];
      next[i] = { ...next[i], qty: next[i].qty + qty, unitPrice };
      return next;
    });
    setCartOpen(true);
  }

  function setLineQty(id, nextQty) {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: Math.max(1, nextQty) } : x))
        .filter((x) => x.qty > 0)
    );
  }

  function removeLine(id) {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }

  function applyCoupon() {
    const c = couponInput.trim().toUpperCase();
    if (!c) return;
    setCoupon(c);
    setCouponInput("");
  }

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
          <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none' }}>Features</a>
          <a href="#specs" style={{ color: '#94a3b8', textDecoration: 'none' }}>Specs</a>
          <button
            onClick={() => setCartOpen(true)}
            style={{ backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155', padding: '0.5rem 0.75rem', borderRadius: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
          >
            Cart ({cartCount})
          </button>
          <button
            onClick={addToCart}
            style={{ backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 700, cursor: 'pointer' }}
          >
            Buy Now
          </button>
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
            <button
              onClick={addToCart}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 700, cursor: 'pointer' }}
            >
              <ShoppingCart size={20} />
              Add to Cart - ${unitPrice}
            </button>
            <button
              onClick={() => alert("Tip: pick a color/storage, set quantity, then add to cart. Apply coupon SAVE10 in cart.")}
              style={{ backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155', padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 700, cursor: 'pointer' }}
            >
              How it works
            </button>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8', fontWeight: 700 }}>Color</span>
              {["Midnight", "Starlight", "Ocean"].map((c) => (
                <button
                  key={c}
                  onClick={() => setVariant((v) => ({ ...v, color: c }))}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '9999px',
                    border: `1px solid ${variant.color === c ? '#60a5fa' : '#334155'}`,
                    backgroundColor: variant.color === c ? 'rgba(96,165,250,0.18)' : '#0b1120',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8', fontWeight: 700 }}>Storage</span>
              {["256GB", "512GB", "1TB"].map((s) => (
                <button
                  key={s}
                  onClick={() => setVariant((v) => ({ ...v, storage: s }))}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '9999px',
                    border: `1px solid ${variant.storage === s ? '#a78bfa' : '#334155'}`,
                    backgroundColor: variant.storage === s ? 'rgba(167,139,250,0.18)' : '#0b1120',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8', fontWeight: 700 }}>Qty</span>
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                style={{ width: 38, height: 38, borderRadius: 12, border: '1px solid #334155', backgroundColor: '#0b1120', color: 'white', cursor: 'pointer', fontWeight: 900 }}
              >
                -
              </button>
              <div style={{ minWidth: 34, textAlign: 'center', fontWeight: 900 }}>{qty}</div>
              <button
                onClick={() => setQty((q) => q + 1)}
                style={{ width: 38, height: 38, borderRadius: 12, border: '1px solid #334155', backgroundColor: '#0b1120', color: 'white', cursor: 'pointer', fontWeight: 900 }}
              >
                +
              </button>
            </div>
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
      <section id="features" style={{ backgroundColor: '#0b1120', padding: '5rem 2rem', borderTop: '1px solid #1e293b' }}>
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

      <section id="specs" style={{ padding: '3rem 2rem', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#0b1120', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.25rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Selected configuration</h3>
            <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>
              <strong style={{ color: 'white' }}>{variant.color}</strong> • <strong style={{ color: 'white' }}>{variant.storage}</strong> • <strong style={{ color: 'white' }}>${unitPrice}</strong>
            </p>
            <button
              onClick={() => { setVariant({ color: "Midnight", storage: "256GB" }); setQty(1); }}
              style={{ marginTop: '0.75rem', backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155', padding: '0.6rem 0.9rem', borderRadius: '0.75rem', cursor: 'pointer', fontWeight: 700 }}
            >
              Reset selection
            </button>
          </div>
          <div style={{ backgroundColor: '#0b1120', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.25rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Try a coupon</h3>
            <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>Open cart and apply <code style={{ color: 'white' }}>SAVE10</code> (10% off) or <code style={{ color: 'white' }}>FREESHIP</code> ($15 off).</p>
            <button
              onClick={() => setCartOpen(true)}
              style={{ marginTop: '0.75rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '0.6rem 0.9rem', borderRadius: '0.75rem', cursor: 'pointer', fontWeight: 800 }}
            >
              Open cart
            </button>
          </div>
        </div>
      </section>
    </div>

    {cartOpen && (
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "grid",
          gridTemplateColumns: "1fr min(460px, 92vw)",
          backdropFilter: "blur(6px)",
          zIndex: 50,
        }}
      >
        <div onClick={() => setCartOpen(false)} aria-label="Close overlay" />
        <div style={{ background: "rgba(10,12,18,0.94)", borderLeft: "1px solid rgba(255,255,255,0.12)", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: 12, borderBottom: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "grid", gap: 2 }}>
              <strong>Cart</strong>
              <span style={{ color: "#94a3b8", fontSize: 12 }}>{cartCount} item(s)</span>
            </div>
            <button onClick={() => setCartOpen(false)} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.18)", color: "white", borderRadius: 12, padding: "8px 10px", cursor: "pointer" }}>
              <X size={18} />
            </button>
          </div>

          <div style={{ padding: 12, overflow: "auto", display: "grid", gap: 10 }}>
            {cart.length === 0 ? (
              <div style={{ color: "#94a3b8" }}>Cart is empty. Add a configuration from the product page.</div>
            ) : (
              <>
                {cart.map((l) => (
                  <div key={l.id} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 10, background: "rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 900 }}>{l.color} • {l.storage}</div>
                      <div style={{ color: "#94a3b8", fontSize: 12 }}>${l.unitPrice} each</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <button onClick={() => setLineQty(l.id, l.qty - 1)} style={{ width: 34, height: 34, borderRadius: 12, border: "1px solid rgba(255,255,255,0.18)", background: "transparent", color: "white", cursor: "pointer", fontWeight: 900 }}>-</button>
                      <div style={{ minWidth: 22, textAlign: "center", fontWeight: 900 }}>{l.qty}</div>
                      <button onClick={() => setLineQty(l.id, l.qty + 1)} style={{ width: 34, height: 34, borderRadius: 12, border: "1px solid rgba(255,255,255,0.18)", background: "transparent", color: "white", cursor: "pointer", fontWeight: 900 }}>+</button>
                      <button onClick={() => removeLine(l.id)} style={{ marginLeft: 4, borderRadius: 12, border: "1px solid rgba(251,113,133,0.45)", background: "rgba(251,113,133,0.12)", color: "white", cursor: "pointer", padding: "7px 10px", fontWeight: 900 }}>Remove</button>
                    </div>
                  </div>
                ))}

                <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 10, background: "rgba(255,255,255,0.03)", display: "grid", gap: 8 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <Tag size={16} color="#a78bfa" />
                    <input
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon (SAVE10 or FREESHIP)"
                      style={{ flex: 1, padding: "10px 10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.16)", background: "rgba(0,0,0,0.15)", color: "white", outline: "none" }}
                    />
                    <button onClick={applyCoupon} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.18)", background: "transparent", color: "white", cursor: "pointer", padding: "9px 10px", fontWeight: 900 }}>
                      Apply
                    </button>
                  </div>
                  {coupon ? (
                    <div style={{ color: "#94a3b8", fontSize: 12 }}>Applied coupon: <strong style={{ color: "white" }}>{coupon}</strong> <button onClick={() => setCoupon("")} style={{ marginLeft: 8, border: "none", background: "transparent", color: "#60a5fa", cursor: "pointer", fontWeight: 900 }}>clear</button></div>
                  ) : (
                    <div style={{ color: "#94a3b8", fontSize: 12 }}>No coupon applied.</div>
                  )}
                </div>

                <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 12, background: "rgba(255,255,255,0.04)", display: "grid", gap: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#94a3b8" }}>Subtotal</span><strong>${subtotal}</strong></div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#94a3b8" }}>Discount</span><strong>${discount}</strong></div>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.12)", margin: "6px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#94a3b8" }}>Total</span><strong>${total}</strong></div>
                  <button
                    onClick={() => alert("Checkout simulated (static site). This is where you'd integrate Stripe/etc.")}
                    style={{ marginTop: 8, backgroundColor: "#3b82f6", border: "none", color: "white", padding: "12px 12px", borderRadius: 14, cursor: "pointer", fontWeight: 900 }}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
