"use client"; 

import React, { useState, useEffect, Suspense } from "react"; 
import CurrentPathName from "@/components/dev/get/pathname"; 
import { CartData, CartItems, CartItem } from "@/types/cart";

const Page = () => {

	const data :CartData = JSON.parse(localStorage.getItem("Cart") ?? "{\n}") ?? {};
	const items :CartItems = data.items;

	console.log(data);
	console.log(items);

	return (
		<div>
			<Suspense fallback={<p>Loading...</p>}>
				{
					((items && items.length > 0) ? (
						items.map((item:CartItem) => (
							<div key={item.id}>{item.quantity}</div>
						)))
					:null )
				}
			</Suspense>
		</div>
	);
};

export default Page;
