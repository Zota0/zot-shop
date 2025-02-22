"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ItemsArray, ItemData } from "@type/item";

const Page = () => {
	const [page, setPage] = useState<number>(0);
	const [maxPerPage, setMaxPerPage] = useState<number>(5);
	const [categories, setCategories] = useState<number[] | string>("all"); // Now accepts numbers or "all"
	const [products, setProducts] = useState<ItemsArray | null>(null);
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number | null>(null);
	const [search, setSearch] = useState<string | null>(null);

	useEffect(() => {
		const testProducts: ItemsArray = [
			{
				id: 1,
				title: "Product 1",
				price: 100,
				available: true,
				category_id: 1, // Category ID is now a number
				images: [],
				available_quantity: 10,
				brand: "ZotShop",
				model: "ZotShop",
				short_description: "ZotShop",
				rating: { value: 0, count: 0 },
				discount: "-10%",
			},
			{
				id: 2,
				title: "Product 2",
				price: 350,
				available: true,
				category_id: 1, // Category ID is now a number
				images: [],
				available_quantity: 10,
				brand: "ZotShop",
				model: "ZotShop",
				short_description: "ZotShop - item",
				rating: { value: 0, count: 0 },
				discount: "-80%",
			},
			{
				id: 3,
				title: "Product 3",
				price: 500,
				available: true,
				category_id: 1, // Category ID is now a number
				images: [],
				available_quantity: 10,
				brand: "zot",
				model: "Shop",
				short_description: "ZotShop",
				rating: { value: 0, count: 0 },
				discount: "-20%",
			},
		];
		setProducts(testProducts);
	}, []);

	async function QueryElement() {
		const params = useSearchParams();

		if (params && params !== undefined && params !== null) {
			if (
				params.get("search") !== null &&
				params.get("search") !== undefined
			) {
				setSearch(params.get("search"));
			}

			if (
				params.get("page") !== null &&
				params.get("page") !== undefined
			) {
				setPage(parseInt(params.get("page")!));
			}

			// Assuming you're passing category IDs as numbers in query params
			if (
				params.getAll("cat") !== null &&
				params.getAll("cat") !== undefined
			) {
				setCategories(params.getAll("cat").map(Number)); // Parse string IDs to numbers
			}
		} else {
			console.log("no params");
		}

		return products && products.length > 0
			? products
					.filter((product: ItemData) => product.available !== false)
					.filter(
						(product: ItemData) =>
							typeof product.price === "number" &&
							product.price >= minPrice
					)
					// Category filtering: Now filtering by number
					.filter(
						(product: ItemData) =>
							(Array.isArray(categories) &&
								categories.includes(product.category_id)) ||
							categories === "all"
					)
					.filter(
						(product: ItemData) =>
							maxPrice === null ||
							(typeof product.price === "number" &&
								product.price <= maxPrice)
					)
					.filter(
						(product: ItemData) =>
							search === null ||
							(search &&
								product.title &&
								product.title
									.toLowerCase()
									.includes(search.toLowerCase()))
					)
					.slice(page * maxPerPage, (page + 1) * maxPerPage)
					.map((prod: ItemData, indx: number) => (
						<div key={indx}>{prod.title}</div>
					))
			: null;
	}

	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<QueryElement />
			</Suspense>
		</div>
	);
};

export default Page;
