export default function GridCartSkeleton() {
  return (
    <div className="pb-3 pt-0">
      <div className="row g-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="col-6 col-md-4 col-lg-3 position-relative mb-4 mt-0"
          >
            <div className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-title"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}