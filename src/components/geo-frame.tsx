"use client";
import ReactSrcDocIframe from "react-srcdoc-iframe";

export default function GeoMapFrame() {
	return (
		<Iframe
			display='block'
			url='https://www.google.com/maps/d/u/0/embed?mid=1O9X8teAMyN77a57CFBMzCGQzzH3Cmgk&ehbc=2E312F&noprof=1'
			width='480'
			height='480'
			className='w-full h-full'
		/>
	);
}
