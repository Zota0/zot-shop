import React from "react";
import CarouselElement from "@&/carousel";
import { CarouselProps } from "@type/carousel";

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
	
	return (
		<>
			<div className='div-c w-full h-full bg-secondary'>
				<AdvertisementCarousel />
			</div>
		</>
	);
}























