import React from "react";
import CarouselElement from "@&/carousel";
import { CarouselProps } from "@type/carousel";

export default function Home() {
	const view: CarouselProps = [
		{
			title: "Video 1",
			url: "https://example.com",
		},
		{
			title: "Video 2",
			url: "https://youtube.com",
		},
		{
			title: "Video 3",
            url: "https://vimeo.com",
		},
		{
			title: "Video 4",
            srcdoc: "<div>Hello World<br/><a href='/'>Home</a></div>",
		}
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






















