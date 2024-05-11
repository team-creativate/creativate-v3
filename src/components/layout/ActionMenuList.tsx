import NavItems from "./NavItem";

const ActionMenuList = ({ data }: any) => {
	return (
		<nav className="flex flex-col md:flex-row items-center justify-center">
			{data?.length > 0 &&
				data?.map((item: any) => (
					<NavItems
						key={item.menu_label}
						menuText={item.menu_label}
						route={item.route_link}
						targetId={item.target_id}
						targetStripe={item.target_stripe}
						ctaMenu={item.cta_menu}
					/>
				))}
		</nav>
	);
};

export default ActionMenuList;
