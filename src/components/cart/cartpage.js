import './cartpage.css';
import products from '../../data/mockData';
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, decrementItem, incrementItem } from '../../redux/actions/cartActions';
import ItemTab from '../item/itemtab'

const CartPage = () => {
	const [recentlyViewed, setRecentlyViewed] = useState([])

	const cart = useSelector(state => state.cart.items);
	const views = useSelector(state => state.views)
	const dispatch = useDispatch();
	const history = useHistory()
	const [totalPrice, setTotalPrice] = useState(0)

	const handleDelete = (id) => {
		dispatch(deleteItem(id))
	}

	const handleIncrement = (id) => {
		dispatch(incrementItem(id))
	}

	const handleDecrement = (id) => {
		dispatch(decrementItem(id))
	}

	useEffect(() => {
		const getTotalPrice = (cart) => {
			let total = 0
			for(let item of cart){
				total += item.price * item.quantity
			}
			setTotalPrice(total)
		}

		getTotalPrice(cart)
	}, [cart])

	useEffect(() => {
		const getRecentlyViewedProducts = () => {
			let items = products.filter(({id}) => views.includes(id))
			setRecentlyViewed(items)
		}
		getRecentlyViewedProducts()
	}, [views])

	return(
		<>
			<nav className="cartpage-nav">
				<i onClick={history.goBack} className="fas fa-chevron-left pointer bg-grey-100 p-4"></i>
				<h3 className="cartpage-nav-header font-bold text-grey">Cart</h3>
				<i></i>
			</nav>
			<section>
				<div className="bg-grey-50 cartpage-items-container">
					{
						cart.map(({id, quantity, name, image, price}) => 
							<div key={id} className="cartpage-cartItem bg-white p-4">
								<div className="cartpage-cartItem-header">
									<img alt='' src={image} />
									<p className="font-semibold">
										{name} <br />
										<strong>{price}</strong>
									</p>
								</div>
								<div className="cartpage-cartItem-controls">
									<div className="cartItem-controls-delete">
										<button className="fas fa-trash text-red-200 bg-white pointer" onClick={() => handleDelete(id)}></button>
										<div className="font-semibold text-grey font-medium">Delete</div>	
									</div>
									<div className="cartItem-controls-quantity">
										<button className="fas fa-minus border-rounded-full p-rect-y-circular text-blue-400 bg-white pointer" onClick={() =>handleDecrement(id)}></button>
										<div className="font-semibold text-grey font-medium">{quantity}</div>
										<button className="fas fa-plus border-rounded-full p-rect-y-circular text-blue-400 bg-white pointer" onClick={() => handleIncrement(id)} ></button>
									</div>
								</div>
							</div>
						)
					}
				</div>
			</section>
			<section>
				<div className="cartpage-checkout-container">
					<div className="cartpage-totalDisplay">
						<div className="text-grey font-semibold">
							Subtotal
						</div>
						<div className="text-grey font-semibold">
							{totalPrice}
						</div>
					</div>
					<div className="cartpage-totalDisplay">
						<div className="text-grey font-semibold">
							Total
						</div>
						<div className="font-bold">
							{totalPrice}
						</div>
					</div>
					<button className="cartpage-checkout-button border-rounded bg-blue-400 text-white font-semibold">Checkout</button>
				</div>

				<div className="cartpage-view-container">
					<div className="views-header">
						<div className="font-semibold">Recently Viewed</div>
						<div className="text-blue-400 font-semibold">View All</div>
					</div>
					<div className="homepage-items-container">
			 			{
						 	recentlyViewed.map(({id, image, name, price, stock}) => 
								<ItemTab 
									key={id} 
									image={image}
									name={name}
									id={id}
									price={price}
								/>
							)
						}
			 		</div>
				</div>
			</section>
		</>
	);
}


export default CartPage;