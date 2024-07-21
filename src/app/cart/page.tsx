"use client";
import React, { useState, useEffect, Suspense } from "react"; 
import CurrentPathName from "@/components/dev/get/pathname"; 
import { CartData, CartItems, CartItem } from "@/types/cart";
import { Button } from '@&/ui/button';
import  * as icn from 'lucide-react';

const Page = () => {
	const [data, setData] = useState<CartData|null>({items: []});
	const [items, setItems] = useState<CartItems>([]);

	useEffect(() => {
		try {
			const localCart = localStorage.getItem('cart');
			if(localCart != undefined && localCart != null && localCart.length > 0) {
				setData(JSON.parse(localCart));
			} else {
				setData({items: []})
			}
		} catch (error) {
			console.error(error);
			alert(`${error}`);
        }
	}, []);	
	
	useEffect(() => (
		setItems(data?.items || [])
	), [data])

	const products = [
        {
			id: 0,
			title: "Product 1",
			price: 10,
			short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, libero?" 
		},
        {
			id: 1,
			title: "Product 2",
			price: 20,
			short_desc:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, libero?"
		},
		{
			id: 2,
            title: "Product 3",
            price: 30,
			short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, libero?"
		},
		{
			id: 3,
            title: "Product 4",
            price: 40,
			short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, libero?"
		},
		{
			id: 4,
            title: "Product 5",
            price: 50,
			short_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, libero?"
		}
	]

	const RemoveIdfromCart = (id: number) => {
		let newItems: CartItems;
		async function Remove(id_to_remove: number) {
			newItems = await items.filter(
				(item: CartItem) => item.id !== id_to_remove
			);
			const newData = { ...data, items: [...newItems] };
			setData(newData);	
		}
		async function Update() {
			await Remove(id);
			localStorage.setItem("cart", JSON.stringify(newItems))
		};
		Update();
	}

	return (
		<div className='div-c w-[95%] h-36 flex-col gap-y-4'>
			{items && items.length > 0
				? items.map((item: CartItem) => (
						<div
							className='div-c bg-secondary text-accent-foreground font-semibold rounded-2xl text-xl h-56 w-full justify-between gap-x-8 py-4'
							key={item.id}
						>
							<div className='div-c flex-col gap-y-2'>
								<span className='text-md w-full text-left title'>
									{products[item.id].title}
								</span>
								<span className='text-sm w-full'>
									{products[item.id].short_desc}
								</span>
							</div>
							<span>quantity: {item.q}</span>
							<span>
								{(
									products[item.id].price * item.q
								).toLocaleString("PL-pl", {
									style: "currency",
									currency: "PLN",
									maximumFractionDigits: 2,
									minimumFractionDigits: 2,
									currencyDisplay: "code",
								})}
							</span>
							<span>
								<Button
									variant={"ghost"}
									onClick={() => RemoveIdfromCart(item.id)}
								>
									<icn.LucideTrash2 />
								</Button>
							</span>
						</div>
				)): null
			}
		</div>
	);
};

export default Page;
