import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  Crown,
  Headphones,
  Music2,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react'

const products = [
  {
    id: 'youtube',
    name: 'YouTube Premium',
    subtitle: 'Entertainment, unlimited',
    price: '$2.99',
    cadence: '/ month',
    accent: 'red',
    icon: Play,
    features: ['Ad-free streaming', 'Background playback', 'Includes YouTube Music'],
  },
  {
    id: 'spotify',
    name: 'Spotify Premium',
    subtitle: 'Music, your way',
    price: '$2.49',
    cadence: '/ month',
    accent: 'green',
    icon: Headphones,
    features: ['Listen offline', 'Lossless audio', 'Unlimited skips'],
  },
]

function ProductCard({ product, onBuy }) {
  const Icon = product.icon
  const isYoutube = product.id === 'youtube'

  return (
    <article className={`product-card ${product.accent}`}>
      <div className="card-glow" />
      <div className="card-topline">
        <div className="product-icon" aria-hidden="true">
          <Icon size={24} strokeWidth={2.1} />
        </div>
        <span className="plan-badge">Premium</span>
      </div>

      <div className="product-copy">
        <p className="eyebrow">{product.subtitle}</p>
        <h3>{product.name}</h3>
        <div className="price">
          <span>{product.price}</span>
          <small>{product.cadence}</small>
        </div>
      </div>

      <div className="benefits">
        {product.features.map((feature) => (
          <div className="benefit" key={feature}>
            <span className="check"><Check size={14} strokeWidth={3} /></span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button className="buy-button" onClick={() => onBuy(product)}>
        Buy now <ArrowRight size={17} />
      </button>

      <div className={`abstract-art ${isYoutube ? 'youtube-art' : 'spotify-art'}`} aria-hidden="true">
        {isYoutube ? <Play fill="currentColor" size={40} /> : <Music2 size={42} />}
      </div>
    </article>
  )
}

function CheckoutModal({ product, onClose }) {
  const Icon = product?.icon

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!product) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`checkout-modal ${product.accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close checkout">
          <X size={20} />
        </button>

        <div className="modal-icon"><Icon size={28} /></div>
        <p className="modal-kicker">Ready to upgrade</p>
        <h2 id="checkout-title">{product.name}</h2>
        <p className="modal-description">Confirm your Premium plan and we'll send activation details straight to your inbox.</p>

        <div className="summary">
          <div>
            <span>Selected plan</span>
            <strong>{product.name}</strong>
          </div>
          <div>
            <span>Pay today</span>
            <strong>{product.price}<em>{product.cadence}</em></strong>
          </div>
        </div>

        <a className="payment-button" href="https://t.me/" target="_blank" rel="noreferrer">
          <ShoppingBag size={18} /> Pay via Telegram
        </a>
        <p className="secure-note"><ShieldCheck size={15} /> Fast activation after payment</p>
      </section>
    </div>
  )
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="Premium Pass - Home">
          <span className="brand-mark"><Crown size={16} fill="currentColor" /></span>
          <span>Premium Pass</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#plans" onClick={() => setMenuOpen(false)}>Plans</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why us</a>
        </div>
        <button className="cart-button" aria-label="Cart" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={20} /> : <><ShoppingBag size={20} /><span>0</span></>}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-content">
          <div className="announcement"><Sparkles size={14} /> Curated premium picks</div>
          <h1>Level up your <span>entertainment.</span></h1>
          <p>Unlock the services you love with a smoother, ad-free, boundless experience.</p>
          <a className="hero-button" href="#plans">Explore plans <ArrowRight size={18} /></a>
        </div>
        <div className="hero-stat" aria-label="More than 1,000 happy customers">
          <div className="avatar-stack"><i /><i /><i /></div>
          <div><strong>1,000+</strong><span>happy customers</span></div>
        </div>
      </section>

      <section className="products-section" id="plans">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Your pick</p>
            <h2>Simple. Refined. <span>Premium.</span></h2>
          </div>
          <p>Pick the plan that fits your digital rhythm — instant activation and dedicated support included.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} onBuy={setSelectedProduct} />)}
        </div>
      </section>

      <section className="trust-section" id="why-us">
        <div><ShieldCheck size={21} /><span>Transparent transactions</span></div>
        <div><Sparkles size={21} /><span>Lightning-fast activation</span></div>
        <div><Crown size={21} /><span>Support that cares</span></div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark"><Crown size={14} fill="currentColor" /></span><span>Premium Pass</span></a>
        <p>© 2026 Premium Pass. A better experience, every day.</p>
      </footer>

      {selectedProduct && <CheckoutModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </main>
  )
}

export default App
