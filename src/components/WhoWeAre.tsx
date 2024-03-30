import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import AnimateInView from "@/templates/animateInView";

const WhoWeAre = ({ data }: { data: any }) => {
	const CtaButton = ({ text, link }: { text: string; link: string }) => {
		return (
			<div className="block text-center lg:text-left">
				<Link
					href={`${link ?? "#"}`}
					className={`inline-block w-full sm:w-auto text-[24px] leading-[30px] font-[400] text-center max-h-[80px] rounded-[8px] border border-solid border-primaryLight px-[32px] py-[16px] bg-primaryLight text-primaryBlue break-words lg:mx-auto`}>
					{text}
				</Link>
			</div>
		);
	};
	return (
		<section
			className={`py-[50px] lg:py-[100px] 2xl:pb-[135px] 2xl:pt-[100px] bg-primaryBlue`}>
			<SectionLayout
				className={`flex flex-col lg:flex-row justify-between`}>
				<div className="w-full max-md:max-w-[350px] max-md:mx-auto lg:w-[40%] text-center mb-[16px] md:mb-[32px] lg:mb-0 lg:flex lg:flex-col justify-between">
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}>
						<SectionTitle className={`text-primaryLight`}>
							{data?.title}
						</SectionTitle>
					</AnimateInView>
					<div className="max-lg:hidden">
						<AnimateInView
							reset={false}
							animation={"translateFromBottom"}>
							<CtaButton
								text={data?.button_text}
								link={data?.button_link}
							/>
						</AnimateInView>
					</div>
				</div>
				<div className="w-full mx-auto max-w-[600px] lg:ml-auto lg:mr-0 lg:max-w-[750px] lg:w-[60%]">
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}>
						<p className="text-[20px] leading-[24px] text-primaryLight font-[400] text-center lg:text-[26px] lg:leading-[32px] lg:text-left transition-all duration-300 ease-in-out mb-[16px] md:mb-[32px] lg:mb-0">
							{data?.description}
						</p>
					</AnimateInView>
					<div className="lg:hidden">
						<AnimateInView
							reset={false}
							animation={"translateFromBottom"}>
							<CtaButton
								text={data?.button_text}
								link={data?.button_link}
							/>
						</AnimateInView>
					</div>
				</div>
			</SectionLayout>
		</section>
	);
};

export default WhoWeAre;
