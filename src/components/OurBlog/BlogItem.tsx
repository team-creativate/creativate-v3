import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

const BlogItem = ({ featImage, title, blogLink, className }: any) => {
	return (
		<article
			className={`max-w-[390px] mx-auto mb-[32px] md:mb-0 md:mx-0 md:max-w-[640px] md:max-h-[620px] px-0 md:p-[24px] lg:p-[40px] relative w-full md:w-1/2 ${
				className ? className : ""
			}`}>
			<div className="opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out cursor-pointer">
				<Link
					href={`${process.env.NEXT_PUBLIC_HOST_URI}/our-blog/${blogLink}`}>
					<div className="relative pt-[58.2%] rounded-[12px] overflow-hidden mb-[16px]">
						<ImageLoader
							src={featImage}
							fill
							alt={title}
						/>
					</div>
				</Link>
				<Link
					href={`${process.env.NEXT_PUBLIC_HOST_URI}/our-blog/${blogLink}`}
					className="text-[24px] leading-[28px] font-[500] lg:leading-[36px] text-[#E6E6E6] mb-[10px]">
					{title}
				</Link>
			</div>
		</article>
	);
};

export default BlogItem;
