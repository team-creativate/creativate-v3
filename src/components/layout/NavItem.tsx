"use client";

import { NavItemsParams } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({
	route,
	menuText,
	targetId,
	targetStripe,
	ctaMenu,
	className,
}: NavItemsParams) => {
	const pathname = usePathname();

	const menuClassName = `group cursor-pointer tracking-wide ${
		!ctaMenu
			? `mb-3 md:mb-0 shrink-0 md:mr-[20px] last:mr-0 relative font-[500] text-[18px] leading-[20px] text-primaryLight`
			: `bg-primaryBlue border-[2px] border-solid border-primaryBlue hover:opacity-75 flex items-center justify-center rounded-[8px] text-primaryLight text-center px-[10px] text-[16px] leading-[22px] xl:px-[20px] xl:text-[20px] xl:leading-[24px]  w-full h-[40px] xl:h-[45px]`
	} cursor-pointer transition-all duration-300 ease-in-out capitalize`;

	return (
		<>
			{targetStripe ? (
				<Link
					href={`#${targetId}`}
					className={`${menuClassName}`}>
					{menuText}
					{!ctaMenu && (
						<span
							className={`h-[1px] inline-block bg-primaryLight md:bg-primaryDark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
								className ? className : ""
							}`}>
							&nbsp;
						</span>
					)}
				</Link>
			) : (
				<p
					className={`${menuClassName}`}
					data-target={targetId ? targetId : undefined}>
					<span className={`${!ctaMenu ? "" : `shrink-0`}`}>
						{menuText}
					</span>
					{!ctaMenu && (
						<span
							className={`h-[1px] inline-block bg-primaryLight md:bg-primaryDark absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 ${
								className ? className : ""
							}`}>
							&nbsp;
						</span>
					)}
				</p>
			)}
		</>
	);
};

export default NavItems;
