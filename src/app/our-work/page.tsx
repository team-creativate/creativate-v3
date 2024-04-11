import OurWorkList from "@/components/OurWork/OurWorkList";
import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/pages?slug=work&acf_format=standard`,
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
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/pages?slug=work&acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

async function getWorkData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/our-work?&acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const OurWork = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	const workData = await getWorkData();
	const workList = workData;

	return (
		<>
			<div className="pt-[160px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<OurWorkList data={workList} />
			</div>
		</>
	);
};

export default OurWork;
