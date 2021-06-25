import {Link} from 'react-router-dom';

const ItemTab = ({id, image, price, name, stock}) => {

	return(
		<Link className="item-tab" to={{
			pathname: `/item/${id}`,
		}}>
		 	<img alt='' src={image} />
		 	<div className='text-grey font-semibold'>{name}</div>
		 	<div className='font-bold'>{price}</div>
		 	<div className='text-grey font-semibold'>{`MOQ ${stock}(pieces)`}</div>
		</Link>
	)
}

export default ItemTab;