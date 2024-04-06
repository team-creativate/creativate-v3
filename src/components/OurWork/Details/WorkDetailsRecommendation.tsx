import React from "react";
import WorkItem from "../WorkItem";

const WorkDetailsRecommendation = ({ sectionTitle, data }: any) => {
	return (
		<div className="pt-[32px] md:pt-[40px]">
			<h3 className="text-[32px] leading-[38px] font-[500] text-center text-[#F4F4F4] mb-[32px] lg:mb-[40px] lg:text-[40px] lg:leading-[48px]">
				{sectionTitle}
			</h3>
			<div className="md:flex md:items-center md:justify-start md:flex-wrap">
				{data?.map((item: any, index: number) => {
					return (
						<React.Fragment key={index}>
							<WorkItem
								featImage={item?.acf?.featured_image}
								blogLink={item?.acf?.current_blog_url}
								title={item?.title?.rendered}
								websiteLink={
									item?.acf?.about_client?.website_url
								}
								shortDesc={item?.excerpt?.rendered}
								className={``}
							/>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default WorkDetailsRecommendation;
