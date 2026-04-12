type Props = {
  search: string;
  setSearch: (value: string) => void;
};
export default function BlogHeaderExtras({ search, setSearch }: Props) {
  const categories = ["Bluestones", "Limestone", "Granite", "Paving"];

  return (
    <>
      <div className="mb-3 position-relative">
        <div className="search_box">
          <span className="search-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M19.0002 19L14.6602 14.66"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="position-relative blog-categories d-none">
        <div className="d-flex gap-2 blog-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className="btn btn-md btn-outline-primary btn-radius"
            >
              {cat}
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
                <path
                  d="M17 1L21 5L17 9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 5L21 5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
