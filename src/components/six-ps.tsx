export default function SixPs() {
  const values = [
    {
      title: "People-First Values",
      description:
        "Quality. Integrity. Honesty. Heart. Friendliness. These are the People-First, People-Always Core Values hardwired to our company's DNA.",
    },
    {
      title: "Proven Process",
      description:
        'We strictly adhere to a proven process we follow to the "t" on every single job. This keeps your project sailing smoothly and keeps YOU happy rom start to finish.',
    },
    {
      title: "Precision Workmanship",
      description:
        'Our certified installers are focused on the details as well as your satisfaction with our process. "Above and beyond" is the bare minimum to the Roofweiler way',
    },
    {
      title: "Proactive Communication",
      description:
        "From the first call to the final walkthrough, you'll experience friendly, responsive, accommodating communication.",
    },
    {
      title: "Premium Materials",
      description:
        "We believe in quality without Compromise. That is why we will only install the materials we would use in our own homes.",
    },
    {
      title: "Passionate Company Culture",
      description:
        "Every single Roofweiler team member is PASSIONATE about helping you protect your home or business. We absolutely LOVE our craft.",
    },
  ];

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-[#ffde11] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Our 6 P's For Stress-Free, Worry Free
          </h1>
          <h2 className="text-[#ffffff] text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
            Roofing, Windows & Doors Remodeling
          </h2>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-3xl p-8 text-center shadow-lg"
            >
              <h3 className="text-[#000000] text-xl font-bold mb-4">
                {value.title}
              </h3>
              <p className="text-[#1a1a1a] text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
