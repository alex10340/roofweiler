import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Us Section */}
      <section className="bg-[#6e6e6e] px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-white">
            About Us
          </h1>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-white">
            <p>
              Welcome to Roofweiler, your ultimate protector for roofing,
              windows, and doors. Founded on the principles of professionalism,
              reliability, and trustworthiness, we are dedicated to providing
              top-tier service to both homeowners and business owners. Our
              mission is rooted in a simple yet powerful belief: everyone
              deserves access to quality construction services that not only
              meet but exceed their expectations.
            </p>

            <p>
              At Roofweiler, we are not just another construction company. We
              are innovators in a field that has long been resistant to change.
              By integrating cutting-edge technology into our operational
              framework, we aim to revolutionize the industry, enhancing
              customer service and expanding customer knowledge. From the
              initial consultation to the final installation, our technological
              approach ensures a seamless, transparent, and efficient experience
              for all our clients.
            </p>

            <p>
              Our slogan, "The Ultimate Protector for Your Roof, Windows, and
              Doors," reflects our commitment to safeguarding what matters most
              to you—your home or business. Whether you're looking to upgrade
              your home's appearance, improve energy efficiency, or protect
              against the elements, our expert team is equipped to deliver
              solutions that are tailored to your specific needs.
            </p>

            <p>
              The foundation of Roofweiler is deeply rooted in a legacy of
              construction excellence. Growing up in a family dedicated to the
              construction trade, our founder's passion for the industry was
              ignited at an early age. However, recognizing the importance of
              staying ahead in an ever-evolving world, he ventured into the
              realm of technology after college. This unique blend of
              experiences, from working in a family-run construction company to
              a department at one of the industry's leading distributors to
              embracing the hands-on craftsmanship passed down through
              generations, has culminated in the birth of Roofweiler.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Layout for Mission, Vision, Values */}
      <div className="grid md:grid-cols-2">
        {/* Worker Image */}
        <div className="relative h-[200px] sm:h-[600px]">
          <Image
            src="/assets/about-us1.webp"
            alt="Roofweiler workers on roof"
            fill
            className="object-cover"
          />
        </div>

        {/* Mission Section */}
        <section className="bg-[#1a1a1a] px-8 py-16 md:px-12 lg:px-16">
          <div className="flex h-full flex-col justify-center">
            <h2 className="mb-6 text-center text-3xl font-bold text-white">
              Mission
            </h2>
            <p className="text-center text-sm md:text-base leading-relaxed text-white">
              Roofweiler is dedicated to protecting and enhancing your most
              valuable asset—your home. By providing exceptional roofing,
              windows, and doors services, we ensure homeowners and businesses
              in hurricane prone Florida feel safe and secure. Driven by a
              passion for excellence and innovation, we offer streamlined
              processes and remarkable prices, while guiding our clients every
              step of the way. Our commitment is to leave you with a smile,
              knowing you've made the right choice for your home or business.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-[#1a1a1a] px-8 py-16 md:px-12 lg:px-16">
          <div className="flex h-full flex-col justify-center">
            <h2 className="mb-6 text-center text-3xl font-bold text-white">
              Vision
            </h2>
            <p className="text-center text-sm md:text-base leading-relaxed text-white">
              Roofweiler envisions becoming Florida's leading provider for
              roofing and window solutions, setting new standards in customer
              service and knowledge sharing. Through strategic partnerships and
              technological integration, we aim to make quality home and
              business protection More accessible. As industry leaders and
              innovators, we are committed to evolving with our customers'
              needs, ensuring they always feel 100% comfortable and informed in
              their decisions. Roofweiler will be synonymous with trust,
              excellence, and innovation in home improvement.
            </p>
          </div>
        </section>

        {/* House Image */}
        <div className="relative h-[200px] sm:h-[600px]">
          <Image
            src="/assets/about-us2.webp"
            alt="House with quality roofing"
            fill
            className="object-cover"
          />
        </div>

        {/* Roofer Working Image */}
        <div className="relative h-[200px] sm:h-[600px]">
          <Image
            src="/assets/about-us3.webp"
            alt="Roofer installing roof"
            fill
            className="object-cover"
          />
        </div>

        {/* Values Section */}
        <section className="bg-[#1a1a1a] px-8 py-16 md:px-12 lg:px-16">
          <div className="flex h-full flex-col justify-center">
            <h2 className="mb-8 text-center text-3xl font-bold text-white">
              Values
            </h2>
            <ul className="space-y-4 text-sm md:text-base text-white">
              <li>
                <span className="font-semibold">Honesty:</span> Transparent and
                genuine in all our interactions.
              </li>
              <li>
                <span className="font-semibold">Commitment:</span> Dedicated to
                excellence in service and quality.
              </li>
              <li>
                <span className="font-semibold">Friendliness:</span>{" "}
                Approachable and supportive, treating customers and employees
                like family.
              </li>
              <li>
                <span className="font-semibold">Responsibility:</span>{" "}
                Accountable for our actions and their impact on businesses,
                homes and lives.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
