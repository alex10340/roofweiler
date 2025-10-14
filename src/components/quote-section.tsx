"use client"

import ContactForm from "@/components/contact-form"

export default function QuoteSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold">
                Get A <span className="text-[#ffde11]">FREE QUOTE</span>
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Fields marked with * are required.
              </p>
            </div>

            <div className="max-w-[500px]">
              <ContactForm />
            </div>
          </div>

          {/* Right side - Square Map */}
          <div className="w-full">
            <div className="aspect-square w-full max-w-[600px] mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8904.86699618064!2d-80.3383952741853!3d25.79878707601046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b96f79f20cbd%3A0xf1cf0e9d75cfdd53!2s8555%20NW%2029th%20St%2C%20Doral%2C%20FL%2033122%2C%20USA!5e0!3m2!1sen-US!2sus!4v1760477671303!5m2!1sen-US!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Roofweiler Location Map"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
