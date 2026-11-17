function ProductDetail({ product, isFavorite, onClose, onToggleFavorite, formatPrice }) {
  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Tutup detail">×</button>
        <div className={`modal-art product-art ${product.color}`}>
          <span className="product-emoji" role="img" aria-label={product.name}>{product.icon}</span>
          <span className="art-decoration decoration-one">✳</span>
        </div>
        <div className="modal-content">
          <span className="product-category">{product.category}</span>
          <h2 id="modal-title">{product.name}</h2>
          <strong className="modal-price">{formatPrice(product.price)}</strong>
          <p>{product.description}</p>
          <button className="button-primary modal-favorite" onClick={() => onToggleFavorite(product.id)}>
            {isFavorite ? '♥ Remove from favorites' : '♡ Add to favorites'}
          </button>
          <span className="modal-note">✦ A little something for your study days.</span>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail