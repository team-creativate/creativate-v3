import ImageLoader from "@/utils/ImageLoader";

const Logo = () => {
	return (
		<div className="flex items-center justify-center md:mr-[25px] xl:mr-[45px] 2xl:mr-[55px] transition-all duration-300 ease-in-out">
			<ImageLoader
				src={"/images/logo.svg"}
				width={163}
				height={34}
				alt="Logo"
				style={{
					width: "auto",
				}}
				priority
				className="max-w-[126px] md:max-w-[135px] xl:max-w-[163px]"
			/>
		</div>
	);
};

export default Logo;
