"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function ContactModal() {
	const { isOpen, closeModal } = useContactModal();

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	// Close modal on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		if (isOpen) {
			window.addEventListener("keydown", handleEscape);
		}
		return () => window.removeEventListener("keydown", handleEscape);
	}, [isOpen, closeModal]);

	if (!isOpen) return null;

	return (
		<>
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-black/60 z-50 animate-in fade-in duration-200"
				onClick={closeModal}
			/>

			{/* Modal */}
			<div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
				<div
					className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-in zoom-in-95 duration-200"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Header */}
					<div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
						<h2 className="text-2xl font-bold text-gray-900">
							Get Your Free Estimate
						</h2>
						<button
							onClick={closeModal}
							className="text-gray-400 hover:text-gray-600 transition-colors"
							aria-label="Close modal"
						>
							<X className="w-6 h-6" />
						</button>
					</div>

					{/* Content - Bitrix24 form will go here */}
					<div className="p-6">
						<div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
							<p className="text-gray-600">
								Bitrix24 contact form code will be inserted here
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
