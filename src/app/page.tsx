import CultureParalax from "@/components/CultureParalax";
import CustomerStories from "@/components/CustomerStories";
import FaqContact from "@/templates/Home/FaqContact";
import HomeBanner from "@/components/Home/HomeBanner";
import WhoWeAre from "@/components/WhoWeAre";
import StepProcess from "@/components/common/StepProcess";
import VerticalTabSliderStripe from "@/components/common/VerticalTabSliderStripe";
import type { Metadata } from "next";

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
		`${process.env.NEXT_PUBLIC_CREATIVATE_URI}/pages?slug=home&acf_format=standard`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Home() {
	const pageData = await getData();
	const data = pageData[0].acf;

	return (
		<>
			<HomeBanner
				data={data?.home_banner}
				logoSlider={data?.logo_slider}
			/>
			<WhoWeAre data={data?.who_we_are} />
			<CultureParalax data={data?.our_culture} />
			<VerticalTabSliderStripe
				data={data?.what_we_do}
				sectionId={"work"}
			/>
			<StepProcess
				data={data?.our_3_step_process}
				sectionId={"service"}
			/>
			<CustomerStories
				data={data?.client_feedback}
				sectionId={"story"}
				logoSlider={data?.logo_slider}
			/>
			<FaqContact
				sectionId={"contact-us"}
				questionsList={data?.frequent_questions}
				contactForm={data?.contact_form}
				social_links={data?.social_links}
			/>
		</>
	);
}
