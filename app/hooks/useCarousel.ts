'use client';

import { useState } from 'react';

interface UseCarouselProps {
    totalItems: number;
    pageSize: number;
}

export const useCarousel = ({ totalItems, pageSize }: UseCarouselProps) => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1);

    const totalPages = Math.ceil(totalItems / pageSize);

    const paginate = (dir: number) => {
        const newPage = page + dir;
        if (newPage >= 0 && newPage < totalPages) {
            setDirection(dir);
            setPage(newPage);
        }
    };

    const goToPage = (pageIndex: number) => {
        setDirection(pageIndex > page ? 1 : -1);
        setPage(pageIndex);
    };

    const currentItemsRange = [page * pageSize, page * pageSize + pageSize];

    return {
        page,
        direction,
        totalPages,
        paginate,
        goToPage,
        currentItemsRange,
        canPrev: page > 0,
        canNext: page < totalPages - 1,
    };
};
