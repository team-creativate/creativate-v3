import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import SectionLayout from "@/templates/SectionLayout";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/pages?slug=home&acf_format=standard`,
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
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/pages?slug=privacy-policy&acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
const PrivacyPolicy = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	return (
		<>
			<div className="pt-[160px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<div
					className="blog-details py-[60px] md:pb-[100px] max-w-[1000px] mx-auto"
					dangerouslySetInnerHTML={{
						__html: pageData[0]?.content?.rendered,
					}}
				/>
			</div>
		</>
	);
};

export default PrivacyPolicy;
