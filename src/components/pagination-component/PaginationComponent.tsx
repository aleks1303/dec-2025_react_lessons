


import {useSearchParams} from "react-router-dom";
//
//
// const PaginationComponent = () => {
//     const [query, setQuery] = useSearchParams({page: '1'});
//     const page = query.get('page');
//     const pageNum = Number(page);
//     const totalPages = 49
//
//     const onClickPrev = () => {
//         if(page) {
//             let current = Number(page);
//             current--
//             setQuery({page: current.toString()})
//         }
//     }
//     const onClickNext = () => {
//         if(page) {
//             let current = Number(page);
//             current++
//             setQuery({page: current.toString()})
//         }
//     }
//     const onClickNumbers = (num: number) => {
//         setQuery({page: num.toString()})
//     }
//
//     const baseClass = 'border-1 w-12 m-2'
//     const disabledClass = 'opacity-50'
//     const activeClass = 'bg-blue-500 text-white'
//
//
//     return (
//         <div>
//             <button disabled={pageNum <= 1} className={`${baseClass} ${pageNum <= 1 ? disabledClass : ''}`} onClick={onClickPrev}>prev</button>
//             {[...Array(totalPages)].map((_, i) => {
//                 const num = i + 1
//                 return (
//                     <button key={num} className={`${baseClass} ${pageNum === num ? activeClass: ''}}`} onClick={() => onClickNumbers(num)}
//                     >{num}</button>
//                 )
//             })}
//             <button disabled={pageNum >= totalPages} className={`${baseClass} ${pageNum >= totalPages ? disabledClass : ''}`} onClick={onClickNext}>next</button>
//         </div>
//     );
// };
//

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });
    const page = Number(query.get('page') || '1');
    const totalPages = 49;

    const setPage = (num: number) => {
        setQuery({ page: num.toString() });
    };

    const baseClass = 'border-1 w-12 m-1';
    const disabledClass = 'opacity-50';
    const activeClass = 'bg-blue-500 text-white';

    const renderPageNumbers = () => {
        const pages = [];

        // завжди показуємо 1
        if (page !== 1) {
            pages.push(<button key={1} className={baseClass} onClick={() => setPage(1)}>1</button>);
        } else {
            pages.push(<button key={1} className={`${baseClass} ${activeClass}`} disabled>1</button>);
        }

        if (page > 4) {
            pages.push(<span key="start-dots">...</span>);
        }

        for (let i = page - 1; i <= page + 1; i++) {
            if (i > 1 && i < totalPages) {
                pages.push(
                    <button
                        key={i}
                        className={`${baseClass} ${i === page ? activeClass : ''}`}
                        onClick={() => setPage(i)}
                    >
                        {i}
                    </button>
                );
            }
        }

        if (page < totalPages - 3) {
            pages.push(<span key="end-dots">...</span>);
        }

        if (page !== totalPages) {
            pages.push(
                <button key={totalPages} className={baseClass} onClick={() => setPage(totalPages)}>
                    {totalPages}
                </button>
            );
        } else {
            pages.push(
                <button key={totalPages} className={`${baseClass} ${activeClass}`} disabled>
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center mt-4">
            <button
                className={`${baseClass} ${page <= 1 ? disabledClass : ''}`}
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
            >
                Prev
            </button>

            {renderPageNumbers()}

            <button
                className={`${baseClass} ${page >= totalPages ? disabledClass : ''}`}
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
            >
                Next
            </button>
        </div>
    );
};
export default PaginationComponent;