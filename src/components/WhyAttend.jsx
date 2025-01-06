const WhyAttend = () => {
  // Card Data
  const cards = [
    {
      id: 1,
      title: "✅ Access to Financial Support",
      description:
        "Explore flexible loan options tailored for MSMEs to help your business grow.",
      icon: "fas fa-hand-holding-usd",
    },
    {
      id: 2,
      title: "✅ Capacity Building Programs",
      description:
        "Gain essential skills, strategies, and mentorship to scale your enterprise.",
      icon: "fas fa-lightbulb",
    },
    {
      id: 3,
      title: "✅ Innovation Showcase",
      description:
        "Present your talents and business ideas to government leaders, investors, and stakeholders.",
      icon: "fas fa-chart-line",
    },
    {
      id: 4,
      title: "✅ Expert-Led Sessions",
      description:
        "Learn from policymakers, financial institutions, and thought leaders shaping the economy.",
      icon: "fas fa-user-tie",
    },
    {
      id: 5,
      title: "✅ Networking Opportunities",
      description:
        "Build strategic partnerships and connect with key players in your industry.",
      icon: "fas fa-network-wired",
    },
  ];

  return (
    <section className="bg-secColor-Lighter py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-pryColor text-center mb-6">
          Why You Should Attend
        </h2>
        <p className="text-center text-pryColor-Light text-lg mb-12">
          Unlock opportunities, gain practical knowledge, and network with key
          stakeholders to propel your business forward!
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <i
                  className={`${card.icon} text-secColor text-4xl`}
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-xl font-semibold text-pryColor mb-2">
                {card.title}
              </h3>
              <p className="text-pryColor-Light">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
