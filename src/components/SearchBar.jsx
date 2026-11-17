function SearchBar({ value, onChange }) {
  return (
    <label className="search-box">
      <span className="search-icon">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search your favorite stationery..."
        aria-label="Cari produk alat tulis"
      />
      {value && <button type="button" onClick={() => onChange('')} aria-label="Hapus pencarian">×</button>}
    </label>
  )
}

export default SearchBar