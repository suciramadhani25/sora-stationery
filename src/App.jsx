import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import './App.css'


const products = [
  { id: 1, name: 'Cloud Nine Notebook', category: 'Buku & Jurnal', price: 28000, icon: '📓', color: 'lavender', tag: 'Bestseller', description: 'Notebook dengan kertas tebal yang nyaman untuk mencatat materi kuliah, ide, dan rencana harian. Desain minimalis untuk menemani aktivitas belajar.' },
  { id: 2, name: 'Pastel Gel Pen Set', category: 'Pulpen & Pensil', price: 32000, icon: '🖊️', color: 'pink', tag: 'Favorit', description: 'Set pulpen gel dengan warna lembut dan tinta yang mengalir halus. Cocok untuk catatan, journaling, dan membuat rangkuman.' },
  { id: 3, name: 'Sunny Highlighter', category: 'Highlighter & Marker', price: 18000, icon: '🖍️', color: 'yellow', tag: 'New', description: 'Highlighter berwarna soft yang membantu menandai poin penting tanpa membuat halaman terlihat terlalu ramai.' },
  { id: 4, name: 'Daily Planner Pad', category: 'Buku & Jurnal', price: 24000, icon: '🗒️', color: 'mint', tag: '', description: 'Lembar planner harian untuk menyusun prioritas, jadwal, dan to-do list agar kegiatan belajar lebih teratur.' },
  { id: 5, name: 'Color Pop Sticky Notes', category: 'Perlengkapan Belajar', price: 15000, icon: '🗂️', color: 'peach', tag: '', description: 'Sticky notes warna ceria untuk penanda halaman, pengingat singkat, dan catatan kecil di buku.' },
  { id: 6, name: 'Wooden Pencil Duo', category: 'Pulpen & Pensil', price: 12000, icon: '✏️', color: 'blue', tag: '', description: 'Dua pensil kayu yang nyaman digenggam untuk menulis, membuat sketsa, atau mengerjakan latihan.' },
  { id: 7, name: 'Study Buddy Pouch', category: 'Perlengkapan Belajar', price: 35000, icon: '👝', color: 'lilac', tag: 'Popular', description: 'Pouch simpel untuk menyimpan alat tulis favorit agar meja dan tas tetap rapi.' },
  { id: 8, name: 'Marker Mini Set', category: 'Highlighter & Marker', price: 26000, icon: '🖌️', color: 'green', tag: '', description: 'Marker mini aneka warna untuk lettering, membuat mind map, dan mempercantik catatan.' },

  { id: 9, name: 'Aesthetic Binder', category: 'Buku & Jurnal', price: 38000, icon: '📔', color: 'lavender', tag: 'New', description: 'Binder aesthetic untuk menyimpan catatan kuliah, materi belajar, dan lembar tugas agar lebih rapi.' },
  { id: 10, name: 'Mechanical Pencil', category: 'Pulpen & Pensil', price: 22000, icon: '✏️', color: 'pink', tag: 'Popular', description: 'Pensil mekanik yang nyaman digunakan untuk menulis, menggambar, dan mengerjakan latihan.' },
  { id: 11, name: 'Pastel Eraser', category: 'Perlengkapan Belajar', price: 10000, icon: '🧽', color: 'mint', tag: '', description: 'Penghapus berwarna pastel untuk membantu menghapus tulisan pensil dengan praktis.' },
  { id: 12, name: 'Rainbow Paper Clips', category: 'Perlengkapan Belajar', price: 14000, icon: '📎', color: 'peach', tag: 'Cute', description: 'Paper clips warna-warni untuk menyatukan dokumen, lembar catatan, dan tugas.' },
  { id: 13, name: 'Pastel Ruler Set', category: 'Perlengkapan Belajar', price: 16000, icon: '📏', color: 'blue', tag: '', description: 'Set penggaris dengan warna pastel untuk kebutuhan belajar dan membuat garis yang rapi.' },
  { id: 14, name: 'Cute Pencil Case', category: 'Perlengkapan Belajar', price: 42000, icon: '👝', color: 'lilac', tag: 'Bestseller', description: 'Tempat pensil praktis untuk menyimpan perlengkapan sekolah dan kuliah agar mudah dibawa.' },
  { id: 15, name: 'Soft Color Marker', category: 'Highlighter & Marker', price: 29000, icon: '🖍️', color: 'green', tag: 'New', description: 'Marker dengan pilihan warna lembut untuk mempercantik catatan, lettering, dan mind map.' },
]


const formatPrice = (price) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
}).format(price)

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [favorites, setFavorites] = useState([])
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory
    const matchesFavorite = !showFavoritesOnly || favorites.includes(product.id)
    return matchesSearch && matchesCategory && matchesFavorite
  }), [searchTerm, activeCategory, showFavoritesOnly, favorites])

  function toggleFavorite(productId) {
    setFavorites((current) => current.includes(productId)
      ? current.filter((id) => id !== productId)
      : [...current, productId])
  }

  function resetFilters() {
    setSearchTerm('')
    setActiveCategory('Semua')
    setShowFavoritesOnly(false)
  }

  return (
    <div className="app-shell">
      <Navbar
        favoriteCount={favorites.length}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavorites={() => setShowFavoritesOnly((value) => !value)}
        onGoHome={resetFilters}
      />

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> YOUR LITTLE STUDY CORNER</span>
            <h1>Make every study day<br /><span>a little more lovely.</span></h1>
            <p>Temukan teman belajar yang bikin kamu makin semangat menuangkan ide dan meraih mimpi.</p>
            <a className="hero-link" href="#catalog">Explore collection <span>↗</span></a>
          </div>
          <div className="hero-art" aria-label="Ilustrasi perlengkapan alat tulis">
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✦</div>
            <div className="art-circle circle-back" />
            <div className="art-paper">
              <div className="paper-lines" />
              <span className="paper-sticker">✿</span>
              <span className="paper-title">little<br />by little</span>
            </div>
            <div className="art-pencil">✏️</div>
            <div className="art-flower">🌼</div>
            <div className="art-note">good things<br />take time ♡</div>
          </div>
          <div className="hero-bottom-note"><span>✳</span> Everything you need for your study</div>
        </section>

        <section className="catalog-section" id="catalog">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COLLECTION</span>
              <h2>Find your study essentials<span>.</span></h2>
              <p>Small things, big inspiration.</p>
            </div>
            <div className="result-count"><strong>{filteredProducts.length.toString().padStart(2, '0')}</strong><span> items<br />to explore</span></div>
          </div>

          <div className="catalog-tools">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
          </div>

          {showFavoritesOnly && (
            <div className="favorites-notice">
              <span>♡</span> Showing your favorite picks
              <button onClick={() => setShowFavoritesOnly(false)}>Show all products</button>
            </div>
          )}

          <ProductList
            products={filteredProducts}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onViewDetails={setSelectedProduct}
            formatPrice={formatPrice}
            onReset={resetFilters}
          />
        </section>

        <section className="quote-strip">
          <span>✳</span>
          <p>“A little progress each day adds up to big results.”</p>
          <span>✳</span>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-brand"><span className="brand-mark">s.</span><div><strong>sora stationery</strong><small>Everything You Need for Your Study</small></div></div>
        <p>Made for curious minds & creative days.</p>
        <div className="student-info"><strong>Suci Ramadhani Siregar</strong><span>NIM:1247050143</span></div>
      </footer>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isFavorite={favorites.includes(selectedProduct.id)}
          onClose={() => setSelectedProduct(null)}
          onToggleFavorite={toggleFavorite}
          formatPrice={formatPrice}
        />
      )}
    </div>
  )
}

export default App