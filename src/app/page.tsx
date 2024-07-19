import React from "react";
import CarouselElement from "@&/carousel";
import { CarouselProps } from "@type/carousel";
import GridItem from "@&/view/griditem";
import { ItemsArray, ItemsData } from "@/types/item";
import { EMPTY_DATETIME } from '@type/time';
import { EMPTY_DISCOUNT } from '@type/item';

export default function Home() {
	const view: CarouselProps = [
		{
			title: "Video 4",
			srcdoc: (
				<div className='h-full border-2 rounded-3xl border-primary div-c gap-8 flex-col'>
					Hello World
					<br />
					<a title='Home Page' href={process.env.HOME_PAGE_URL}>
						Zot Shop
					</a>
				</div>
			),
		},
		{
			title: "Video 4",
			srcdoc: (
				<div className='h-full border-2 rounded-3xl border-primary div-c gap-8 flex-col'>
					Hello World
					<br />
					<a title='Home Page' href={process.env.HOME_PAGE_URL}>
						Some Page
					</a>
				</div>
			),
		},
		{
			title: "Video 4",
            srcdoc: <div className="h-full border-2 rounded-3xl border-primary div-c gap-8 flex-col">Hello World<br/><a title="Not Page" href={process.env.HOME_PAGE_URL}>Not Shop</a></div>,
		},
	];
	const AdvertisementCarousel = React.memo(() => (
		<CarouselElement props={view} />
	));
	AdvertisementCarousel.displayName = "AdvertisementCarousel";
	
	const exampleProducts: ItemsArray = [
		{
			id: 1,
			brand: "ZotShop",
			model: "ZotShop",
			category_id: 1,
			short_description: "ZotShop",
			price: 100000.25,
			available: true,
			available_quantity: 100,
			images: [process.env.ImgNotFound || ''],
			thumbnail_id: 0,
			promos: [1],
			special_codes: [1],
			rating: { value: 0, count: 0 },
			discount: EMPTY_DISCOUNT,
			long_description: "ZotShop",
			title: "ZotShop",
		}
	];

	return (
		<>
			<div className='div-c w-full h-full bg-secondary flex-col mb-48'>
				<AdvertisementCarousel />
				<div className='div-c w-full h-full bg-primary overflow-hidden py-24'> 
					<GridItem
						data={exampleProducts[0]}
						width={512}
						height={512}
					/>
				</div>
			</div>
		</>
	);
}
























