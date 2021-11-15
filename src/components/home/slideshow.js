import React, { useState, useEffect } from 'react';
import './slideshow.css';

const SlideShow = () => {
	const [current, setCurrent] = useState(1);

	useEffect(() => {
		const switchSlides = setInterval(() => {
			if(current === 3 ){
				setCurrent(1)
			} else {
				setCurrent(current + 1);
			}
		}, 4000)


		return () => clearInterval(switchSlides);
	}, [current])

	return (
		<div className="homepage-carousel">
			{	current===1 &&
				<div className="bg-green-200 homepage-carousel-item border-rounded align-center">
                    <p className="text-white font-bold">
                        Having any <span className="text-orange-500">issues</span> with your order?
                    </p>
                    <button className="text-white font-medium bg-blue-400 border-0 border-rounded px-15 py-10">
                        Contact Us
                    </button>
                </div>	
			}
			{	current===2 &&
				<div className="bg-orange-500 homepage-carousel-item border-rounded align-center">
                    <p className="text-white font-bold">
                        Having any <span className="text-blue-400">issues</span> with your order?
                    </p>
                    <button className="text-white font-medium bg-green-400 border-0 border-rounded px-15 py-10">
                        Contact Us
                    </button>
                </div>
			}
			{	current===3 &&
				<div className="bg-blue-400 homepage-carousel-item border-rounded align-center">
                    <p className="text-white font-bold">
                        Having any <span className="text-green-200">issues</span> with your order?
                    </p>
                    <button className="text-white font-medium bg-orange-500 border-0 border-rounded px-15 py-10">
                        Contact Us
                    </button>
                </div>	
			}

		</div>
	)
}

export default SlideShow