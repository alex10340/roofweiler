import ContactUs from "@/components/contact-us";

export const metadata = {
	title: "Contact Us - Roofweiler",
	description:
		"Get in touch with Roofweiler for your roofing, windows, and doors needs. Contact us for a free estimate.",
	alternates: {
		canonical: "/contact",
	},
};

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-[#1a1a1a]">
			<ContactUs />
		</div>
	);
}
