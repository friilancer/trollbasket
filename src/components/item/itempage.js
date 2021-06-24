import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './itempage.css';
import products from '../../data/mockData';

const ItemPage = () => {
	const {
		image,
		name,
		price,
		stock,
		description
	} = products[5]

	return(
		<>
			<nav className="itempage-nav">
				<i className="fas fa-chevron-left bg-grey-100 p-4"></i>
				<div className="itempage-nav-header font-bold text-grey">Details</div>
				<div className="itempage-nav-tail">
					<i className="fas fa-search bg-grey-100 border-rounded-full p-4"></i>
					<div className="group-icon">
			 			<i className="fa fa-shopping-cart bg-grey-100 border-rounded-full p-4"></i>
			 			<span className="border-rounded-full bg-orange-500 p-2 font-semibold text-white font-small">9</span>
			 		</div>
				</div>
			</nav>
			<div className='itempage-jumbotron bg-grey-50'>
				<img alt='shoe' src={image} />
			</div>
			<section className="itempage-body">
				<div className="font-semibold">{name}</div>
				<div className="text-grey font-semibold">{description}</div>
				<p className="font-bold">
					{`${price}/piece`}
				</p>
				<div className="itempage-body-productDescription">
					<div className="font-semibold">Product Description</div>
					<i className="fas fa-chevron-right"></i>
				</div>
				<div>
					<div className="itempage-body-productReviews">
						<div className="font-semibold">Reviews and ratings</div>
						<div className="link text-blue-400 font-bold">View all</div>
					</div>
					<div className="product-stars-container">
						<div className="product-stars">
							<i className="fas fa-star font-small starred"></i>
							<i className="fas fa-star font-small starred"></i>
							<i className="fas fa-star font-small starred"></i>
							<i className="fas fa-star font-small text-grey"></i>
							<i className="fas fa-star font-small text-grey"></i>
						</div>
						<div className="text-grey font-medium font-bold">3.0</div>
					</div>
					<p>
					This is the best product I have used in a long while and the size fits perfectly
					and I love the colors!!!
				</p>
				</div>
				
			</section>
		</>
	);
}

export default ItemPage