"use client";

import ImageLoader from "@/utils/ImageLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ imageList, width, height }: any) => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{imageList.length > 0 &&
				imageList.map((item: any, i: number) => (
					<div
						key={i}
						className={`h-[200px] md:h-[320px] lg:h-[400px] w-full relative group rounded-lg overflow-hidden`}>
						<ImageLoader
							key={i}
							src={item.imgSrc}
							alt={`logo-1`}
							width={width}
							height={height}
						/>
					</div>
				))}
		</Slider>
	);
};

export default ImageSlider;
