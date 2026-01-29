export default function BlogHeaderExtras() {
  const categories = ["Bluestones", "Limestone", "Granite", "Paving"];

  return (
    <>
      {/* SEARCH */}
      <div className="mb-3 position-relative">
        <input
          type="search"
          className="form-control blog-search"
          placeholder="Search"
        />
        <span className="search-icon">⌕</span>
      </div>

      {/* CATEGORIES */}
      <div className="d-flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button key={cat} className="blog-category">
            {cat} →
          </button>
        ))}
      </div>
    </>
  );
}
