import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import SixPs from "./six-ps";

export default function ContactUs() {
  return (
    <section className="bg-[#858584] pt-16">
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Header */}
        <h2 className="text-5xl font-bold text-white text-center mb-18">
          CONTACT US
        </h2>

        <div className="grid md:grid-cols-2 items-start">
          {/* Left side - Contact Information */}
          <div className="space-y-12 text-white mx-auto mt-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <p className="text-2xl font-bold">8555 NW 29TH ST,</p>
                <p className="text-2xl font-bold">DORAL FL 33122</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 flex-shrink-0" />
              <a
                href="mailto:info@roofweiler.com"
                className="text-2xl font-bold underline hover:text-[#ffde11] transition-colors"
              >
                info@roofweiler.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 flex-shrink-0" />
              <a
                href="tel:+19547873535"
                className="text-2xl font-bold underline hover:text-[#ffde11] transition-colors"
              >
                (954) 787-3535
              </a>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="max-w-[500px] shadow-2xl border border-gray-500">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a]">
        <SixPs />
      </div>

      {/* Map Section */}
      <div className="bg-[#858584]">
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8904.86699618064!2d-80.3383952741853!3d25.79878707601046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b96f79f20cbd%3A0xf1cf0e9d75cfdd53!2s8555%20NW%2029th%20St%2C%20Doral%2C%20FL%2033122%2C%20USA!5e0!3m2!1sen-US!2sus!4v1760477671303!5m2!1sen-US!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Roofweiler Location Map"
          />
        </div>
      </div>
    </section>
  );
}
