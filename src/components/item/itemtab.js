import {Link} from 'react-router-dom';

const ItemTab = ({id, image, price, name, stock =""}) => {

	return(
		<Link className="item-tab" to={{
			pathname: `/item/${id}`,
		}}>
		 	<img alt='' src={image} />
		 	<div className='text-grey font-semibold'>{name}</div>
		 	<div className='font-bold'>{Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Math.floor(price))}</div>
		 	<div className='text-grey font-semibold'>{stock === "" ? "" : `MOQ ${stock}(pieces)`}</div>
		</Link>
	)
}

export default ItemTab;