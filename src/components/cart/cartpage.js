import './cartpage.css';
import products from '../../data/mockData';
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaystackButton } from 'react-paystack';
import { deleteItem, decrementItem, incrementItem, clearItems } from '../../redux/actions/cartActions';
import ItemTab from '../item/itemtab'

const PaywithPaystack = ({totalPrice, submitPayment}) => {	
	let user = {
		name: "John Doe",
		email: "john@xyz.com"
	}

	let config = {
		email: user.email,
		amount: totalPrice*100,
		metadata:user,
		publicKey: "pk_test_f6bfd988dcd72193ceddeb2ae4f6aaf500d269bc"
	}
	
	const onPaymentSuccess = (reference) => {
		let {trxref, transaction} = reference;
		submitPayment({trxref, transaction, totalPrice})
	}

	const onPaymentClose = () => {
		return ;
	}
	
	let componentProps = {
		...config,
		text: 'Checkout',
		onSuccess: (reference) => onPaymentSuccess(reference),
		onClose: onPaymentClose
	}

	return (
		<div className="flex space-around">
			<PaystackButton
				className="cartpage-checkout-button border-rounded bg-blue-400 text-white font-semibold" 
				{...componentProps}
			/> 
		</div>
	)
}

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

	const submitPayment = () => {
		history.push("/")
		dispatch(clearItems())
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
				<i onClick={() => history.push('/')} className="fa fa-home pointer font-lg "></i>
			</nav>
			<section>
				<div className="bg-grey-50 cartpage-items-container">
					{
						cart.length === 0 && 
						<p className="text-grey text-center font-bold"> Sorry, no items in cart to display yet </p>
					}
					{ 
						cart.map(({id, quantity, name, image, price}) => 
							<div key={id} className="cartpage-cartItem bg-white p-4">
								<div className="cartpage-cartItem-header">
									<img alt='' src={image} />
									<p className="font-semibold">
										{name} <br />
										<strong>{Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Math.floor(price))}</strong>
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
							{Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Math.floor(totalPrice))}
						</div>
					</div>
					<div className="cartpage-totalDisplay">
						<div className="text-grey font-semibold">
							Total
						</div>
						<div className="font-bold">
							{Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Math.floor(totalPrice))}
						</div>
					</div>
					<PaywithPaystack submitPayment={submitPayment} totalPrice={totalPrice}/>
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