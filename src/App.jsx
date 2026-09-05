import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  Crown,
  Headphones,
  Menu,
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
    subtitle: 'Giải trí không giới hạn',
    price: '79.000đ',
    cadence: '/ tháng',
    accent: 'red',
    icon: Play,
    features: ['Không quảng cáo', 'Phát trong nền', 'Kèm YouTube Music'],
  },
  {
    id: 'spotify',
    name: 'Spotify Premium',
    subtitle: 'Âm nhạc theo cách của bạn',
    price: '59.000đ',
    cadence: '/ tháng',
    accent: 'green',
    icon: Headphones,
    features: ['Nghe nhạc offline', 'Âm thanh Lossless', 'Bỏ qua không giới hạn'],
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
        Mua ngay <ArrowRight size={17} />
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
        <button className="close-button" onClick={onClose} aria-label="Đóng cửa sổ thanh toán">
          <X size={20} />
        </button>

        <div className="modal-icon"><Icon size={28} /></div>
        <p className="modal-kicker">Sẵn sàng nâng cấp</p>
        <h2 id="checkout-title">{product.name}</h2>
        <p className="modal-description">Xác nhận gói Premium của bạn và nhận hướng dẫn kích hoạt ngay qua tin nhắn.</p>

        <div className="summary">
          <div>
            <span>Gói đã chọn</span>
            <strong>{product.name}</strong>
          </div>
          <div>
            <span>Thanh toán hôm nay</span>
            <strong>{product.price}<em>{product.cadence}</em></strong>
          </div>
        </div>

        <a className="payment-button" href="https://t.me/" target="_blank" rel="noreferrer">
          <ShoppingBag size={18} /> Thanh toán qua Zalo/Telegram
        </a>
        <p className="secure-note"><ShieldCheck size={15} /> Hỗ trợ kích hoạt nhanh sau thanh toán</p>
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
        <a className="brand" href="#top" aria-label="Premium Pass - Trang chủ">
          <span className="brand-mark"><Crown size={16} fill="currentColor" /></span>
          <span>Premium Pass</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#goi-dich-vu" onClick={() => setMenuOpen(false)}>Gói dịch vụ</a>
          <a href="#ve-chung-toi" onClick={() => setMenuOpen(false)}>Về chúng tôi</a>
        </div>
        <button className="cart-button" aria-label="Giỏ hàng" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={20} /> : <><ShoppingBag size={20} /><span>0</span></>}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-content">
          <div className="announcement"><Sparkles size={14} /> Gói Premium chọn lọc</div>
          <h1>Nâng tầm trải nghiệm <span>giải trí.</span></h1>
          <p>Truy cập những dịch vụ yêu thích của bạn theo cách mượt mà, không giới hạn và đầy cảm hứng.</p>
          <a className="hero-button" href="#goi-dich-vu">Khám phá gói dịch vụ <ArrowRight size={18} /></a>
        </div>
        <div className="hero-stat" aria-label="Hơn 1000 khách hàng tin dùng">
          <div className="avatar-stack"><i /><i /><i /></div>
          <div><strong>1.000+</strong><span>khách hàng tin dùng</span></div>
        </div>
      </section>

      <section className="products-section" id="goi-dich-vu">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Lựa chọn của bạn</p>
            <h2>Đơn giản. Đúng gu. <span>Premium.</span></h2>
          </div>
          <p>Chọn một gói phù hợp với nhịp sống số của bạn — kích hoạt nhanh, hỗ trợ tận tâm.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} onBuy={setSelectedProduct} />)}
        </div>
      </section>

      <section className="trust-section" id="ve-chung-toi">
        <div><ShieldCheck size={21} /><span>Giao dịch minh bạch</span></div>
        <div><Sparkles size={21} /><span>Kích hoạt nhanh chóng</span></div>
        <div><Crown size={21} /><span>Hỗ trợ tận tâm</span></div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark"><Crown size={14} fill="currentColor" /></span><span>Premium Pass</span></a>
        <p>© 2026 Premium Pass. Trải nghiệm tốt hơn, mỗi ngày.</p>
      </footer>

      {selectedProduct && <CheckoutModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </main>
  )
}

export default App
