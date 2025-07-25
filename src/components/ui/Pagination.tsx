import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
    totalItems: number;
    perPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ totalItems, perPage, currentPage, onPageChange }: Props) {

    const totalPages = Math.ceil(totalItems / perPage);

    // Geração dos números de página
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            <div className="flex justify-end items-center gap-[2.1rem] mb-[1rem] p-[11px] text-[#0A2156] text-sm">

                {/* Total */}
                <span>{totalItems} Resultados</span>

                {/* Navegação */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-2 py-1 text-xl text-[#4070F4] disabled:opacity-30"
                    >
                        <FaChevronLeft className="text-[15px] cursor-pointer" />
                    </button>

                    {pages.slice(0, 3).map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`px-2 py-1 rounded ${
                            page === currentPage
                                ? "bg-[#4070F4] text-white hover:cursor-pointer"
                                : "text-[#0A2156] hover:bg-gray-200 hover:cursor-pointer"
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    {totalPages > 3 && <span className="text-gray-400">...</span>}

                    <button
                        onClick={() =>
                            currentPage < totalPages && onPageChange(currentPage + 1)
                        }
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 text-xl text-[#4070F4] disabled:opacity-30"
                    >
                        <FaChevronRight className="text-[15px] cursor-pointer" />
                    </button>
                </div>

            </div>
        </div>
    )
}
