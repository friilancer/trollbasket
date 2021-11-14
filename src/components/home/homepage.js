import './homepage.css';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import products from '../../data/mockData';
import ItemTab from '../item/itemtab';
import { useSelector } from 'react-redux';

const HomePage = () => {
	const cart = useSelector(state => state.cart.items);
	return(
		<>
		 	<h3 className="homepage-h3">Trollbasket</h3>
		 	<nav className="homepage-nav">
		 		<div className="homepage-nav-item homepage-nav-item-border">
		 			<i className="fas fa-map-marker-alt text-blue-400 bg-grey-100 border-rounded-full p-rect-y-circular"></i>
		 			<div className="font-semibold">
		 				Lagos
		 			</div>
		 			<i className="fa fa-chevron-down"></i>
		 		</div>
		 		<div className="homepage-nav-item homepage-nav-item-border">
		 			<i className="fas fa-calendar-day bg-grey-100 text-purple-400 border-rounded-full p-rect-y-circular"></i>
		 			<div className="font-semibold">
		 				My Orders
		 			</div>
		 		</div>
		 		<div className="homepage-nav-item cart-nav-group">
		 			<Link to='/cart' className="link group-icon">
		 				<i className="fa fa-shopping-cart text-black bg-grey-100 border-rounded-full p-4"></i>
		 				<span className="border-rounded-full bg-orange-500 font-semibold text-white font-small">{cart.length}</span>
		 			</Link>
		 			<div className="font-semibold">
		 				Cart
		 			</div>
		 		</div>
		 	</nav>

		 	<div className='homepage-search-container'>
		 		<input 
		 			placeholder="Search merchbuy"
		 			type='text'
		 		/>
		 		<i className="fas fa-search"></i>
		 	</div>

		 	<div className="homepage-carousel">
				 	<div className="bg-green-200 homepage-carousel-item border-rounded align-center">
						 <p className="text-white font-bold">
							 Having any <span className="text-orange-500">issues</span> with your order?
						 </p>
						 <button className="text-white font-medium bg-blue-400 border-0 border-rounded px-15 py-10">
							 Contact Us
						 </button>
					</div>	
					<div className="bg-orange-500 homepage-carousel-item border-rounded align-center">
						 <p className="text-white font-bold">
							 Having any <span className="text-blue-400">issues</span> with your order?
						 </p>
						 <button className="text-white font-medium bg-green-400 border-0 border-rounded px-15 py-10">
							 Contact Us
						 </button>
					</div>	
					<div className="bg-blue-400 homepage-carousel-item border-rounded align-center">
						 <p className="text-white font-bold">
							 Having any <span className="text-green-200">issues</span> with your order?
						 </p>
						 <button className="text-white font-medium bg-orange-500 border-0 border-rounded px-15 py-10">
							 Contact Us
						 </button>
					</div>	
						
		 	</div>

		 	<div className="homepage-sec-nav">
		 		<div className="homepage-sec-nav-item">
		 			<div className='sec-nav-icon border-rounded bg-blue-400'>
		 				<i className="fas fa-poll-h text-white"></i>
		 			</div>
		 			<div className="sec-nav-label text-grey font-semibold font-medium">
		 				Product<br />
		 				Categories
		 			</div>
		 		</div>
		 		<div className="homepage-sec-nav-item">
		 			<div className='sec-nav-icon border-rounded bg-orange-500'>
		 				<i className="fas fa-fire-alt text-white"></i>
		 			</div>
		 			<div className="sec-nav-label text-grey font-semibold font-medium">
		 				Popular<br />
		 				Products
		 			</div>
		 		</div>
		 		<div className="homepage-sec-nav-item">
		 			<div className='sec-nav-icon border-rounded bg-purple-400'>
		 				<i className="far fa-thumbs-up text-white"></i>
		 			</div>
		 			<div className="sec-nav-label text-grey font-semibold font-medium">
		 				Recommended<br />
		 				Products
		 			</div>
		 		</div>
		 		<div className="homepage-sec-nav-item">
		 			<div className='sec-nav-icon border-rounded bg-green-400'>
		 				<i className="fas fa-store text-white"></i>
		 			</div>
		 			<div className="sec-nav-label text-grey font-semibold font-medium">
		 				Shops<br/>
		 				&nbsp;
		 			</div>
		 		</div>

		 	</div>
		 	<div className="homepage-items-container">
		 		{
		 			products.map(({id, image, name, price, stock}) => 
			 			<ItemTab
			 				key={id} 
			 				image={image}
			 				name={name}
			 				stock={stock}
			 				id={id}
			 				price={price}
			 			/>
			 		)
		 		}
		 	</div>

		 	<nav className="homepage-primary-nav">
		 		<Link className="homepage-primary-nav-item text-grey" to='/'>
		 			<i className="fas fa-home"></i>
		 			<div className="font-semibold">Home</div>
		 		</Link>
		 		<Link className="homepage-primary-nav-item text-grey" to='/cart'>
		 			<i className="fa fa-shopping-cart"></i>
		 			<div className="font-semibold">Buy</div>
		 		</Link>
		 		<Link className="homepage-primary-nav-item text-grey" to='/'>
		 			<i className="fas fa-tag"></i>
		 			<div className="font-semibold">Deals</div>
		 		</Link>
		 		<Link className="homepage-primary-nav-item text-grey" to='/'>
		 			<i className="fas fa-wallet"></i>
		 			<div className="font-semibold">Wallet</div>
		 		</Link>
		 		<Link className="homepage-primary-nav-item text-grey" to='/'>
		 			<i className="fa fa-bars"></i>
		 			<div className="font-semibold">More</div>
		 		</Link>
		 	</nav>
		</>
	);
}

export default HomePage;