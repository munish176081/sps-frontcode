"use client";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const getPages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);

            if (currentPage > 3) pages.push("...");

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) pages.push(i);

            if (currentPage < totalPages - 2) pages.push("...");

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <nav className="d-flex justify-content-center align-items-center my-md-5 my-4">
            <ul className="pagination mb-0 gap-2">

                {/* FIRST */}
                <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                    <button className="page-link" onClick={() => onPageChange(1)}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.39398 8L9.33398 7.06L6.28065 4L9.33398 0.94L8.39398 -1.56241e-07L4.39398 4L8.39398 8Z" fill="#333333" />
                            <path d="M4.00141 8L4.94141 7.06L1.88807 4L4.94141 0.94L4.00141 -1.56241e-07L0.00140585 4L4.00141 8Z" fill="#333333" />
                        </svg>
                    </button>
                </li>

                {/* PREV */}
                <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.99945 8L4.93945 7.06L1.88612 4L4.93945 0.94L3.99945 -1.56241e-07L-0.00054727 4L3.99945 8Z" fill="black" />
                        </svg>
                    </button>
                </li>

                {/* PAGES */}
                {getPages().map((page, i) => (
                    <li
                        key={i}
                        className={`page-item ${page === currentPage ? "active" : ""}`}
                    >
                        {page === "..." ? (
                            <span className="dots">…</span>
                        ) : (
                            <button className="page-link" onClick={() => onPageChange(page as number)}>
                                {page}
                            </button>
                        )}
                    </li>
                ))}

                {/* NEXT */}
                <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.94 0L0 0.94L3.05333 4L0 7.06L0.94 8L4.94 4L0.94 0Z" fill="black" />
                        </svg>
                    </button>
                </li>

                {/* LAST */}
                <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
                    <button className="page-link" onClick={() => onPageChange(totalPages)}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.94 0L0 0.94L3.05333 4L0 7.06L0.94 8L4.94 4L0.94 0Z" fill="black" />
                            <path d="M5.33258 0L4.39258 0.94L7.44591 4L4.39258 7.06L5.33258 8L9.33258 4L5.33258 0Z" fill="black" />
                        </svg>
                    </button>
                </li>

            </ul>
        </nav>
    );
}
