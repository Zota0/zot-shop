import React from 'react';
import Link from 'next/link';
import * as icn from 'lucide-react';
import { Input } from '@&/ui/input';

const Header = () => {
	const pageName = process.env.PAGE_NAME;

	return (
		<>
			<div className='div-c flex-grow-[5]'>{pageName}</div>
			<form
				className='div-c flex-grow-[4] gap-2 bg-re-secondary pl-1 pr-3'
				method='get'
				action='/search'
			>
				<Input
					name='search'
					className='rounded-l-xl bg-re-secondary rounded-r-lg'
					type='text'
					accessKey='q'
					placeholder='Search products'
				/>
				<button
					className='bg-re-secondary'
					title='search button'
					type='submit'
				>
					<icn.Search size={24} color='#c8e' strokeWidth={3} />
				</button>
			</form>
			<div
				className='div-c flex-grow-[5] gap-8 flex-row uppercase font-extrabold text-2xl'
				role='list'
				aria-label='Site navigation'
			>
				<div role='listitem'>
					<Link title='Home page' href='/'>
						Home
					</Link>
				</div>
				<div role='listitem'>
					<Link title='Products' href='/products'>
						Products
					</Link>
				</div>
				<div role='listitem'>
					<Link title='Categories' href='/categories'>
						Categories
					</Link>
				</div>
			</div>
			<div
				className='div-c flex-grow-[4] gap-6 flex-row'
				role='list'
				aria-label='Client actions'
			>
				<div role='listitem'>
					<Link title='Home page' href='/cart'>
						<icn.ShoppingBasket
							size={32}
							color='#c8e'
							strokeWidth={3}
						/>
					</Link>
				</div>
				<div role='listitem'>
					<Link title='Categories' href='/account'>
						<icn.UserRound size={32} color='#c8e' strokeWidth={3} />
					</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
