import ProductCard from './ProductCard'

function ProductList({ products, favorites, onToggleFavorite, onViewDetails, formatPrice, onReset }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span>🔎</span>
        <h3>Oops, nothing found!</h3>
        <p>Coba kata kunci atau kategori yang berbeda, ya.</p>
        <button className="button-primary" onClick={onReset}>Reset filters</button>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
          onViewDetails={onViewDetails}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  )
}

export default ProductList