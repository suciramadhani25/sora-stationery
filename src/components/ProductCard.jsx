function ProductCard({ product, isFavorite, onToggleFavorite, onViewDetails, formatPrice }) {
  return (
    <article className="product-card">
      <div className={`product-art ${product.color}`}>
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button
          className={`favorite-icon ${isFavorite ? 'selected' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? 'Hapus dari favorit' : 'Tambahkan ke favorit'}
          aria-pressed={isFavorite}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
        <span className="product-emoji" role="img" aria-label={product.name}>{product.icon}</span>
        <span className="art-decoration decoration-one">✳</span>
        <span className="art-decoration decoration-two">· · ·</span>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="product-card-bottom">
          <strong>{formatPrice(product.price)}</strong>
          <button onClick={() => onViewDetails(product)}>Details <span>↗</span></button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard