const categories = ['Semua', 'Buku & Jurnal', 'Pulpen & Pensil', 'Highlighter & Marker', 'Perlengkapan Belajar']

function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="category-filter" aria-label="Filter kategori">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? 'category-chip active' : 'category-chip'}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter