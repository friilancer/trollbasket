import {Fragment, useState, useEffect} from 'react';
import './itempage.css';
import products from '../../data/mockData';
import user from '../../img/7.png'
import {Link, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementItem } from '../../redux/actions/cartActions';
import { addView } from '../../redux/actions/viewActions';

const ItemPage = () => {
	const {id} = useParams()
	const [product, setProduct] = useState({});
	const history = useHistory()

	const cart = useSelector(state => state.cart.items);
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = () => {
			let temp = products.filter(item => item.id === id)
			setProduct(...temp)
		}
		getProduct()
	},[])

	useEffect(() => {
		dispatch(addView(id))
	}, [])

	const handleAdd = () => {
		let check = cart.filter(item => item.id === id)
		if(check.length > 0){
			dispatch(incrementItem(id))
		}else {
			dispatch(addItem({
				id,
				image:product.image,
				name:product.name,
				price:product.price,
				quantity: 1
			}))
		}
		history.push('/cart')
	}

	return(
		<>
			<nav className="itempage-nav">
				<i onClick={history.goBack} className="fas fa-chevron-left bg-grey-100 p-4 pointer"></i>
				<h3 className="itempage-nav-header font-bold text-grey">Details</h3>
				<div className="itempage-nav-tail">
					<i className="fas fa-search bg-grey-100 border-rounded-full p-4"></i>
					<Link to='/cart' className="link group-icon">
			 			<i className="fa fa-shopping-cart text-black bg-grey-100 border-rounded-full p-4"></i>
			 			<span className="border-rounded-full bg-orange-500 p-2 font-semibold text-white font-small">{cart.length}</span>
			 		</Link>
				</div>
			</nav>
			<div className='itempage-jumbotron bg-grey-50'>
				<img alt='shoe' src={product.image} />
			</div>
			<section className="itempage-body">
				<div className="font-semibold">{product.name}</div>
				<div className="text-grey font-semibold">{product.description}</div>
				<p className="font-bold">
					{`${product.price}/piece`}
				</p>
				<div className="itempage-body-productDescription">
					<div className="font-semibold">Product Description</div>
					<i className="fas fa-chevron-right"></i>
				</div>
				<div className="itempage-body-reviewsContainer">
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

					<div className="productReviews-userComment">
						<img src={user} alt='reviewer' />
						<div className="font-semibold font-bold text-grey">Segun Arinze</div>
					</div>
				</div>

				<div className="item-actions">
					<button className="addToCart bg-blue-400 font-bold text-white" onClick={() => handleAdd()}>Add to Cart</button>
					<button className="addToWishlist font-bold text-grey">Wishlist</button>
				</div>				
			</section>
		</>
	);
}

export default ItemPage