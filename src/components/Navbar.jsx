function Navbar({ favoriteCount, showFavoritesOnly, onToggleFavorites, onGoHome }) {
  return (
    <header className="topbar">
      <button className="brand-button" onClick={onGoHome} aria-label="Kembali ke beranda">
        <span className="brand-mark">s.</span>
        <span className="brand-name">sora<span>stationery</span></span>
      </button>
      <nav className="main-nav" aria-label="Navigasi utama">
        <button onClick={onGoHome}>Home</button>
        <a href="#catalog">Shop</a>
        <a href="#footer">About</a>
      </nav>
      <button className={`favorites-button ${showFavoritesOnly ? 'is-active' : ''}`} onClick={onToggleFavorites}>
        <span>♡</span> Favorites <b>{favoriteCount}</b>
      </button>
    </header>
  )
}

export default Navbar