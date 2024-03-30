import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "~scss/style.scss";
import { glacialIndifference, poppins } from "@/assets/fonts/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={``}>
			<body
				className={`${poppins.variable} ${glacialIndifference.variable}`}>
				<Header />
				<main className="">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
