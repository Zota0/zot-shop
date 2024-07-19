/* eslint-disable @next/next/no-img-element */
import { ItemData, Short_ItemData } from "@type/item";
import { Button } from "@&/ui/button";
import { EMPTY_DISCOUNT } from "@type/item";

const GridItem = ({
	data,
	width,
	height,
}: {
	data: ItemData;
	width: number;
	height: number;
}) => {
	const item: Short_ItemData = {
		brand: data.brand || "ZotShop",
		model: data.model || "",
		avai: data.available || false,
		avai_q: data.available_quantity || 0,
		price: data.price || "N/A",
		title: data.title || `${data.brand} ${data.model}` || "Not found",
		imgs: data.images || [process.env.ImgNotFound] || "",
		thumb_id: data.thumbnail_id || 0,
		s_desc: data.short_description || "",
		rate: data.rating || { value: 0, count: 0 },
		disc: data.discount || undefined,
		cat_id: data.category_id || 0,
		id: data.id,
		url: `product/${data.id}`,
		promos: data.promos || undefined,
	};


	return (
		<div
			aria-label='Grid Product'
			className={`relative z-10 m-0 p-0 flex flex-col justify-center text-center align-middle gap-0 overflow-hidden w-[${width}px] h-[${height}px] bg-background`}
		>
			<span className='relative div-c z-[1] min-w-full min-h-full w-full h-full flex-col'>
				<div className='relative top-0 div-c z-[10] w-full flex h-full'>
					<img src={item.imgs[item.thumb_id || 0]} alt='' />
				</div>

				<div className='relative bg-transparent pb-48 h-0 top-[4.5%] z-[50] div-c flex-row gap-8'>
					<Button
						size='lg'
						variant={"secondary"}
						className='capitalize px-8 py-8 text-2xl'
					>
						buy now
					</Button>
					<Button
						size='lg'
						variant={"default"}
						className='capitalize px-8 py-8 text-2xl'
					>
						add to cart
					</Button>
					<span className='div-c text-4xl font-bold'>
						<span aria-label='price'>
							{item.price.toLocaleString("pl-PL", {
								style: "currency",
								currency: "PLN",
								maximumFractionDigits: 2,
								minimumFractionDigits: 0,
								currencyDisplay: "code",
							})}
						</span>
					</span>
				</div>
			</span>
			{item.disc && item.disc !== undefined ? (
				<span className='relative z-[20] left-[84%] -top-[93.5%] '>
					<div className='flex align-middle justify-center  text-center overflow-hidden bg-re-primary rounded-full w-28 h-28'>
						<span className='relative top-[25%] inline-block text-5xl w-full h-full font-extrabold'>
							{item.disc}
						</span>
					</div>
				</span>
			) : null}
		</div>
	);

};

export default GridItem;
