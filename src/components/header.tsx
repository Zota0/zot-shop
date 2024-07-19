import React from 'react';
import Link from 'next/link';
import * as icn from 'lucide-react';
import { Input } from '@&/ui/input';
import { Button } from './ui/button';

const Header = () => {
	const pageName = process.env.PAGE_NAME;

	const SearchInput = React.memo(
		() => (
			<Input
				name='search'
				className='rounded-l-xl bg-re-secondary rounded-r-lg'
				type='text'
				accessKey='q'
				placeholder='Search products'
			/>
		)
	);
	SearchInput.displayName = 'SearchInput';

	const SearchBtn = React.memo(() => (
		<Button
			className='bg-re-secondary'
			title='search button'
			type='submit'
		>
			<icn.Search size={24} color='#c8e' strokeWidth={3} />
		</Button>
	));
	SearchBtn.displayName = "SearchButton";

	const SearchForm = React.memo(
		() => (
			<form
				className='div-c flex-grow-[4] gap-2 bg-re-secondary pl-1 pr-3'
				method='get'
				action='/products'
			>
				<SearchInput />
				<SearchBtn />
			</form>
		)
	);
	SearchForm.displayName = 'SearchForm';

	return (
		<>
			<div className='div-c flex-grow-[5]'>{pageName}</div>
			<form
				className='div-c flex-grow-[4] gap-2 bg-re-secondary pl-1 pr-3'
				method='get'
				action='/products'
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
				className='div-c flex-grow-[5] gap-8 flex-row uppercase text-2xl text-[#c8e]'
				role='list'
				aria-label='Site navigation'
			>
				<div role='listitem'>
					<Link title='Home page' href='/'>
						<span className='h-link_style'>Home</span>
					</Link>
				</div>
				<div role='listitem'>
					<Link title='Products' href='/products'>
						<span className='h-link_style'>Products</span>
					</Link>
				</div>
				<div role='listitem'>
					<Link title='Categories' href='/categories'>
						<span className='h-link_style'>Categories</span>
					</Link>
				</div>
			</div>
			<div
				className='div-c flex-grow-[4] gap-6 flex-row'
				role='list'
				aria-label='Client actions'
			>
				<div role='listitem'>
					<Link title='Cart' href='/cart'>
						<icn.ShoppingBasket
							size={48}
							color='#c8e'
							strokeWidth={3}
							className='ui-btn'
						/>
					</Link>
				</div>
				<div role='listitem'>
					<Link
						title='Account'
						href='/account'
						className='*:hover:text-[#10d]'
					>
						<icn.UserRound
							size={48}
							color='#c8e'
							strokeWidth={3}
							className='ui-btn'
						/>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
