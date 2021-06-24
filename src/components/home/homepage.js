import './homepage.css';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import products from '../../data/mockData';

const HomePage = () => {
	const {
		image,
		name,
		price,
		stock
	} = products[0]
	return(
		<>
		 	<h3 className="homepage-h3">Trollbasket</h3>
		 	<nav className="homepage-nav">
		 		<div className="homepage-nav-item homepage-nav-item-border">
		 			<i className="fas fa-map-marker-alt bg-grey-100 border-rounded-full p-rect-y-circular"></i>
		 			<div className="font-semibold">
		 				Lagos
		 			</div>
		 			<i className="fa fa-chevron-down"></i>
		 		</div>
		 		<div className="homepage-nav-item homepage-nav-item-border">
		 			<i className="fas fa-map-marker-alt bg-grey-100 border-rounded-full p-rect-y-circular"></i>
		 			<div className="font-semibold">
		 				My Orders
		 			</div>
		 		</div>
		 		<div className="homepage-nav-item">
		 			<div className="group-icon">
		 				<i className="fa fa-shopping-cart bg-grey-100 border-rounded-full p-4"></i>
		 				<span className="border-rounded-full bg-orange-500 p-2 font-semibold text-white font-small">9</span>
		 			</div>
		 			<div className="font-semibold">
		 				My Orders
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

		 	<div className="homepage-carousel bg-grey-100">
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
		 		<Link className="item-tab" to='/item'>
		 			<img alt='' src={image} />
		 			<span className='text-grey font-semibold'>{name}</span>
		 			<div className='font-bold'>{price}</div>
		 			<div className='text-grey font-semibold'>{`MOQ ${stock}(pieces)`}</div>
		 		</Link>
		 		<Link className="item-tab" to='/item'>
		 			<img alt='' src={image} />
		 			<div className='text-grey font-semibold'>{name}</div>
		 			<div className='font-bold'>{price}</div>
		 			<div className='text-grey font-semibold'>{`MOQ ${stock}(pieces)`}</div>
		 		</Link>
		 		<Link className="item-tab" to='/item'>
		 			<img alt='' src={image} />
		 			<div className='text-grey font-semibold'>{name}</div>
		 			<div className='font-bold'>{price}</div>
		 			<div className='text-grey font-semibold'>{`MOQ ${stock}(pieces)`}</div>
		 		</Link>
		 		<Link className="item-tab" to='/item'>
		 			<img alt='' src={image} />
		 			<span className='text-grey font-semibold'>{name}</span>
		 			<div className='font-bold'>{price}</div>
		 			<div className='text-grey font-semibold'>{`MOQ ${stock}(pieces)`}</div>
		 		</Link>
		 		<Link className="item-tab" to='/item'>
		 			<img alt='' src={image} />
		 			<div className='text-grey font-semibold'>{name}</div>
		 			<div className='font-bold'>{price}</div>
		 			<div className='text-grey font-semibold'>{`MOQ ${stock}(pieces)`}</div>
		 		</Link>
		 		<Link className="item-tab" to='/item'>
		 			<img alt='' src={image} />
		 			<div className='text-grey font-semibold'>{name}</div>
		 			<div className='font-bold'>{price}</div>
		 			<div className='text-grey font-semibold'>{`MOQ ${stock}(pieces)`}</div>
		 		</Link>
		 	</div>

		 	<nav className="homepage-primary-nav">
		 		<Link className="homepage-primary-nav-item text-grey" to='/'>
		 			<i className="fas fa-home"></i>
		 			<div className="font-semibold">Home</div>
		 		</Link>
		 		<Link className="homepage-primary-nav-item text-grey" to='/'>
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