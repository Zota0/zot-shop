"use client";
import React from "react";
import ReactSrcDocIframe from "react-srcdoc-iframe";
import Iframe from "react-iframe";
import { Button } from "@&/ui/button";
import { Input } from "@&/ui/input";
import { CarouselProps } from "@type/carousel";

type CarouselElementProps = {
	props: CarouselProps;
};

const CarouselElement: React.FC<CarouselElementProps> = ({ props }) => {
	const [current, setCurrent] = React.useState(0);

	const handlePrev = () => {
		setCurrent((prev) => (prev > 0 ? prev - 1 : props.length - 1));
	};

	const handleNext = () => {
		setCurrent((prev) => (prev < props.length - 1 ? prev + 1 : 0));
	};

	const handleChange = (index: number) => {
		setCurrent(index);
	};

	const Frame = React.memo(() => (
		(props[current].srcdoc && props[current].srcdoc != "" && props[current].srcdoc != undefined) ?
		<ReactSrcDocIframe
			src={"about:blank?theme=dark"}
			srcDoc={props[current]?.srcdoc}
			title={props[current]?.title}
			className='object-contain w-full h-full z-0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; nocookie;'
			allowFullScreen
			
		/>
		:
		<Iframe
			url={`${props[current]?.url}?theme=${'dark'}`}
			title={props[current]?.title}
			className='object-contain w-full h-full z-0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
			allowFullScreen
		/>
	));
	Frame.displayName = "CarouselFrame";

	const Selector: React.FC<{ index: number }> = ({ index }) => (
		<label className='m-0 p-0'>
			<Input
				checked={current === index}
				onChange={() => handleChange(index)}
				name='CarouselExact'
				value={index}
				type='radio'
				className='m-0 p-0'
			/>
		</label>
	);
	Selector.displayName = "CarouselSelector";

	const ExactSelector = React.memo(() => (
		<div
			className='m-0 p-0 mt-8 pb-4 div-c w-full gap-4'
			aria-label='ExactSelectionGroup'
		>
			{props.map((item, index) => (
				<>
					<Selector key={index} index={index} />
				</>
			))}
		</div>
	));
	ExactSelector.displayName = "CarouselExactSelector";

	return (
		<>
			<div className='div-c flex-col'>
				<div className='div-c h-svh w-full flex items-center justify-center relative z-[1] aspect-video -mb-24'>
					<Button
						size='lg'
						className='text-9xl font-bold font-mono rounded-2xl px-8 py-24'
						variant={"ghost"}
						onClick={handlePrev}
					>
						&lt;
					</Button>
					<div className='div-c w-[90%] h-[90%] overflow-hidden rounded-3xl'>
						<Frame />
					</div>
					<Button
						size='lg'
						className='text-9xl font-bold font-mono rounded-2xl px-8 py-24'
						variant={"ghost"}
						onClick={handleNext}
					>
						&gt;
					</Button>
				</div>
				<div className="div-c w-full mt-4 z-[2]">
					<ExactSelector />
				</div>
			</div>
		</>
	);
};

export default React.memo(CarouselElement);
