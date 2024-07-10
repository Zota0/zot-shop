"use client";
import React, {Suspense, useEffect} from "react";
import GeoMap from './geo';

function Footer() {

	return (
		<>
			<div className='div-c w-full h-full flex-col'>
				<h3 className='text-4xl font-mono uppercase font-bold'>
					Contact
				</h3>
				<br />
				<ul className='div-c flex-col gap-2'>
					<li className='text-2xl'>
						Phone: <a href='tel:+48666666666'>+48 666-666-666</a>
					</li>
					<li className='text-2xl'>
						E-mail:{" "}
						<a href='mailto:zota0.dev+contact@gmail.com'>
							zota0.dev@gmail.com
						</a>
					</li>
				</ul>
			</div>
			<div className='div-c w-[200%] h-full'>
				{/* <GeoMap /> */}
			</div>
		</>
	);
};
export default Footer;