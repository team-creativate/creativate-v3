import OurBlogList from "@/components/OurBlog/OurBlogList";
import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/pages?slug=blog&acf_format=standard`,
		{ next: { revalidate: 60 } }
	).then((res) => res.json());

	return {
		title: pageData[0]?.acf?.metadata?.title ?? "Creativate",
		description:
			pageData[0]?.acf?.metadata?.description ??
			"Creativity and innonvation for Unstoppable Growth.",
		keywords: pageData[0]?.acf?.metadata?.keywords ?? "Creativity",
	};
}

async function getData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/pages?slug=blog&acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

async function getBlogData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/our-blog?&acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const OurBlog = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	const blogData = await getBlogData();
	const blogList = blogData;

	return (
		<>
			<div className="pt-[160px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<OurBlogList data={blogList} />
			</div>
		</>
	);
};

export default OurBlog;
