import WorkDetailsBanner from "@/components/OurWork/Details/WorkDetailsBanner";
import WorkDetailsRecommendation from "@/components/OurWork/Details/WorkDetailsRecommendation";
import SectionLayout from "@/templates/SectionLayout";
import { Metadata } from "next";

export async function generateStaticParams() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/our-work?acf_format=standard`,
		{ next: { revalidate: 60 } }
	);
	const data = await res.json();

	return data.map((work: any) => ({
		slug: work.slug,
	}));
}

async function getData(params: string) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/our-work/?slug=${params}&acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

async function getWorkData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/our-work?acf_format=standard&_fields=id,slug,title,excerpt,acf`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export async function generateMetadata({
	params,
}: {
	params: any;
}): Promise<Metadata> {
	const pageData = await fetch(
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/our-work/?slug=${params.slug}&acf_format=standard`,
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

const WorkDetails = async ({ params }: { params: { slug: string } }) => {
	const pageData = await getData(params.slug);
	const data = pageData[0];

	const allWork = await getWorkData();
	const filteredPosts = allWork
		.filter((post: any) => data?.acf.other_works.includes(post.id))
		.slice(0, 2);

	return (
		<div className="pt-[100px] pb-[40px] md:pt-[160px] md:pb-[100px] bg-primaryDark">
			<SectionLayout>
				<WorkDetailsBanner
					title={data?.title?.rendered}
					bannerImage={data?.acf?.banner_image}
					clientDetails={data?.acf.about_client}
				/>
				{data?.content?.rendered && (
					<div
						className="blog-details mt-[64px] md:mt-[130px] max-w-[1000px] mx-auto"
						dangerouslySetInnerHTML={{
							__html: data?.content?.rendered,
						}}
					/>
				)}
				<WorkDetailsRecommendation
					sectionTitle={"Other Works"}
					data={filteredPosts}
				/>
			</SectionLayout>
		</div>
	);
};

export default WorkDetails;
