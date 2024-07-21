"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
    const params = useSearchParams();

    const [page, setPage] = useState<number>(0);
    const [maxPerPage, setMaxPerPage] = useState<number>(5);
    const [categories, setCategories] = useState<object|string>('all');
    const [products, setProducts] = useState<object>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number|null>(null);
    const [search, setSearch] = useState<string|null>(null);

    async function query() {
        if (params && params !== undefined && params !== null) {
            if(params.get('search') !== null && params.get('search') !== undefined) {
                console.log("search param: ", params.get('search'));
            }

            if(params.get('page') !== null && params.get('page') !== undefined) {

            }
        } else {
            console.log("no params");
        }
    }
    query();

    return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
                {params.get('search')}
            </Suspense>
		</div>
	);
};
export default Page;