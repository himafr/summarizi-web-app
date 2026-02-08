import clsx from "clsx";
import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPageList = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];

    const start = Math.max(currentPage - 2, 1);
    const end = Math.min(currentPage + 2, totalPages - 1); // Exclude last page for now

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    if (pages.includes(totalPages)) {
      pages.splice(pages.length - 1, 0, "ellipsis");
    }
    return pages;
  };

  return (
    <div className=" flex justify-center items-center  p-5">
      <div className="flex justify-center items-center mt-8 text-xs">
        <button
          className="bg-transparent text-gray-700 dark:text-gray-200 font-semibold border border-gray-300 rounded-md px-2 py-1  focus:outline-none dark:border-none"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage == 1} >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path d="M10 18l-8-8 8-8 1.414 1.414L4.828 10l6.586 6.586L10 18z" />
          </svg>
        </button>

        <div className="flex md:mx-4 mx-1 gap-2">
          {getPageList().map((p) =>
            p != "ellipsis" ? (
              <button
                className={clsx(
                  "bg-transparent  font-semibold min-w-[20px] md:min-w-[40px] border border-gray-300 rounded-md px-2 py-1  focus:outline-none",
                  currentPage == p && "text-primary border-primary"
                )}
                onClick={() => onPageChange(p)} >
                {p}
              </button>
            ) : (<span key={p} className="px-2">
                ...
              </span> )
          )}
        </div>

        <button
          className="bg-transparent text-gray-700 dark:text-gray-200 font-semibold border border-gray-300 rounded-md px-2 py-1  focus:outline-none dark:border-none"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage == 500} >
          <svg className="h-6 w-6  fill-current" viewBox="0 0 20 20">
            <path d="M10 2l8 8-8 8-1.414-1.414L15.172 10l-6.586-6.586L10 2z" />
          </svg>
        </button>
        <input
          type="number"
          onBlur={(e) => onPageChange(Number(e.target.value))}
          className="border-gray-200 border rounded-2xl w-20 px-2.5 py-1 ml-4 "
          placeholder="25.." />
      </div>
    </div>
  );
};
export default Pagination;
