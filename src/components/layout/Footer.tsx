import SectionLayout from "@/templates/SectionLayout";
import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

async function getData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/footer?acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const Footer = async () => {
	const footer = await getData();
	const data = footer[0].acf;

	return (
		<footer className="relative w-full font-[400] text-[15px] md:text-[16px] bg-primaryBlue pt-[60px] pb-[60px]">
			<SectionLayout
				className={`flex md:items-center justify-between max-md:max-w-[300px]`}>
				{data?.footer_top_menu.length > 0 && (
					<div
						className={`flex items-start md:items-center justify-center max-md:flex-col gap-[24px]`}>
						{data?.footer_top_menu?.map((item: any, index: any) => (
							<Link
								key={index}
								href={`${item?.target_id}`}
								target="_blank"
								className="text-[16px] leading-[20px] text-primaryLight font-[400]">
								{item?.menu_label}
							</Link>
						))}
					</div>
				)}
				<div className="flex items-center justify-center max-md:flex-col gap-[15px]">
					{data?.social_links?.facebook_link && (
						<Link
							href={`${data?.social_links?.facebook_link}`}
							className="max-w-[42px] max-h-[42px] md:max-w-[30px] md:max-h-[30px]">
							<svg
								width="40"
								height="40"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-full h-full">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M24 9C31.65 9 34.8705 9.864 36.504 11.4975C38.1375 13.131 39 16.35 39 24C39 31.65 38.1375 34.8705 36.504 36.504C34.8705 38.1375 31.65 39 24 39C16.35 39 13.1295 38.1375 11.496 36.504C9.8625 34.8705 9 31.65 9 24C9 16.35 9.8625 13.1295 11.496 11.4975C13.1295 9.864 16.35 9 24 9ZM42 24C42 9 39 6 24 6C9 6 6 9 6 24C6 39 9 42 24 42C39 42 42 39 42 24Z"
									fill="#F4F4F4"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M20.934 30.4995V42L26.2365 41.7715V30.4995H30.6585L31.3215 25.434H26.2365V22.1985C26.2365 20.7315 26.649 19.7325 28.7805 19.7325L31.5 19.731V15.1995C31.029 15.138 29.415 15 27.5385 15C23.6175 15 20.934 17.361 20.934 21.6975V25.434H16.5V30.4995H20.934Z"
									fill="#F4F4F4"
								/>
							</svg>
						</Link>
					)}

					{data?.social_links?.instagram_link && (
						<Link
							href={`${data?.social_links?.instagram_link}`}
							className="max-w-[42px] max-h-[42px] md:max-w-[30px] md:max-h-[30px]">
							<svg
								width="40"
								height="40"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-full h-full">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M24 9C31.65 9 34.8705 9.8625 36.504 11.496C38.1375 13.1295 39 16.35 39 24C39 31.65 38.1375 34.8705 36.504 36.504C34.8705 38.1375 31.65 39 24 39C16.35 39 13.1295 38.1375 11.496 36.504C9.8625 34.8705 9 31.65 9 24C9 16.35 9.8625 13.1295 11.496 11.496C13.1295 9.8625 16.35 9 24 9ZM24 6C39 6 42 9 42 24C42 39 39 42 24 42C9 42 6 39 6 24C6 9 9 6 24 6Z"
									fill="#F4F4F4"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M24 14.757C22.7862 14.757 21.5843 14.9961 20.4629 15.4606C19.3415 15.9251 18.3225 16.606 17.4642 17.4643C16.6059 18.3225 15.9251 19.3415 15.4606 20.4629C14.9961 21.5843 14.757 22.7862 14.757 24C14.757 25.2139 14.9961 26.4158 15.4606 27.5372C15.9251 28.6586 16.6059 29.6775 17.4642 30.5358C18.3225 31.3941 19.3415 32.075 20.4629 32.5395C21.5843 33.004 22.7862 33.243 24 33.243C25.2138 33.243 26.4157 33.004 27.5372 32.5395C28.6586 32.075 29.6775 31.3941 30.5358 30.5358C31.3941 29.6775 32.0749 28.6586 32.5394 27.5372C33.0039 26.4158 33.243 25.2139 33.243 24C33.243 22.7862 33.0039 21.5843 32.5394 20.4629C32.0749 19.3415 31.3941 18.3225 30.5358 17.4643C29.6775 16.606 28.6586 15.9251 27.5372 15.4606C26.4157 14.9961 25.2138 14.757 24 14.757ZM24 30C22.4087 30 20.8826 29.3679 19.7574 28.2427C18.6322 27.1175 18 25.5913 18 24C18 22.4087 18.6322 20.8826 19.7574 19.7574C20.8826 18.6322 22.4087 18 24 18C25.5913 18 27.1174 18.6322 28.2427 19.7574C29.3679 20.8826 30 22.4087 30 24C30 25.5913 29.3679 27.1175 28.2427 28.2427C27.1174 29.3679 25.5913 30 24 30ZM35.7675 14.3925C35.7675 14.6762 35.7116 14.9571 35.6031 15.2191C35.4945 15.4812 35.3354 15.7193 35.1349 15.9199C34.9343 16.1205 34.6962 16.2796 34.4341 16.3881C34.1721 16.4967 33.8912 16.5525 33.6075 16.5525C33.3239 16.5525 33.043 16.4967 32.7809 16.3881C32.5189 16.2796 32.2807 16.1205 32.0802 15.9199C31.8796 15.7193 31.7205 15.4812 31.6119 15.2191C31.5034 14.9571 31.4475 14.6762 31.4475 14.3925C31.4475 13.8197 31.6751 13.2703 32.0802 12.8652C32.4852 12.4601 33.0347 12.2325 33.6075 12.2325C34.1804 12.2325 34.7298 12.4601 35.1349 12.8652C35.5399 13.2703 35.7675 13.8197 35.7675 14.3925Z"
									fill="#F4F4F4"
								/>
							</svg>
						</Link>
					)}

					{data?.social_links?.dribble_link && (
						<Link
							href={`${data?.social_links?.dribble_link}`}
							className="max-w-[42px] max-h-[42px] md:max-w-[30px] md:max-h-[30px]">
							<svg
								width="40"
								height="40"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-full h-full">
								<path
									d="M34.8334 11.9834C30.5 19.5667 22.15 23.9167 13.45 23.1334L8.16669 22.6501"
									stroke="#F4F4F4"
									strokeWidth="2.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M13.1667 36.2834C17.5 28.7 25.85 24.35 34.55 25.1334L39.8334 25.6167"
									stroke="#F4F4F4"
									strokeWidth="2.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M24 40.6667C33.2047 40.6667 40.6666 33.2048 40.6666 24C40.6666 14.7953 33.2047 7.33337 24 7.33337C14.7952 7.33337 7.33331 14.7953 7.33331 24C7.33331 33.2048 14.7952 40.6667 24 40.6667Z"
									stroke="#F4F4F4"
									strokeWidth="2.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M16.7167 9L22.0167 15.5833C25.5667 19.9833 28.0833 25.1 29.4167 30.5833L31.4333 38.9"
									stroke="#F4F4F4"
									strokeWidth="2.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
					)}
				</div>
			</SectionLayout>
			<div className="w-full h-full py-[40px] lg:py-0 lg:h-[286px] max-w-[1440px] mx-auto relative transition-all duration-300 ease-in-out">
				<ImageLoader
					src={data?.footer_banner_image}
					alt="logo"
					className="z-[1]"
					width={1440}
					height={240}
				/>
				<ImageLoader
					src="./images/footer-logo-bg.svg"
					fill
					alt="logo"
					className="z-[2]"
				/>
			</div>
			<SectionLayout
				className={`flex items-center justify-between max-lg:flex-col pt-[20px] md:pt-0`}>
				<span className="text-[16px] leading-[20px] text-primaryLight font-[400]">
					{new Date().getFullYear()} &copy; All Rights Reserved.
				</span>

				<div className={`flex items-center justify-center gap-[24px]`}>
					{data?.footer_bottom_menu?.map((item: any, index: any) => (
						<Link
							key={index}
							href={`${item?.target_id}`}
							target="_blank"
							className="text-[16px] leading-[20px] text-primaryLight font-[400]">
							{item?.menu_label}
						</Link>
					))}
				</div>
			</SectionLayout>
		</footer>
	);
};

export default Footer;
