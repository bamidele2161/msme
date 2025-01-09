import React from "react";
import Footer from "./components/Footer";
import WhyAttend from "./components/WhyAttend";
import Header from "./components/Header";
import image from "./assets/banner.jpg";
import image1 from "./assets/per.jpg";
import image2 from "./assets/per2.jpg";
import image3 from "./assets/per3.jpg";
import image4 from "./assets/per4.jpg";
import image5 from "./assets/per5.jpg";
const KogiMSMEConference = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Header />

      <section id="home" className="py-16 bg-[#FBF7FB] text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#352F36]">
            Crystallizing Economic & Financial Inclusion Efforts
          </h2>
          <p className="mt-4 text-lg text-[#777777]">
            Date 📅 : 30th January 2025 | Venue📍 : Glass House, Lokoja, Kogi
            State
          </p>
          <p className="mt-4 text-xl text-[#352F36]">
            Empowering MSMEs, Artisans, and Youth Entrepreneurs for a Prosperous
            Kogi State!
          </p>
        </div>
      </section>

      <div className="relative bg-gradient-to-r from-secColor-Lighter to-secColor text-white py-16 justify-center items-center w-full border flex flex-col gap-6 md:flex-row px-6 md:px-28">
        <section className="w-full">
          <img
            src={image}
            alt="Conference Banner"
            className="w-[600px] h-[600px] object-cover"
          />
        </section>

        <section className="w-full px-6 md:px-10 text-center">
          <p className="text-base md:text-lg text-[#FBF7FB] mb-4">
            Don't miss the opportunity to empower your business and network with
            industry leaders. Join us in shaping a prosperous future!
          </p>
          <a
            className="bg-pryColor hover:bg-[#2C3E50] text-white py-3 px-6 rounded-lg shadow-lg font-semibold text-sm md:text-lg"
            href="https://kogikeda.ng/events/form.php"
          >
            Register Now
          </a>
        </section>
      </div>

      {/* Image Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-6 md:px-20">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-pryColor mb-8">
            Event Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                src: image1,
                alt: "Event Image 1",
                title: "His Excellency, Alh Yahaya Bello",
              },
              {
                src: image2,
                alt: "Event Image 2",
                title:
                  "Asiwaju Idris Asiru - Hon. Com. of Finance, Budget & economic Planning",
              },
              {
                src: image3,
                alt: "Event Image 3",
                title: "KOGI MSME",
              },
              {
                src: image4,
                alt: "Event Image 4",
                title: "Hon. Muhammed Muktar Shuaibu",
              },
              {
                src: image5,
                alt: "Event Image 5",
                title: "MD/CEO, Kogi Enterprise Development Agency (KEDA)",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="py-2">
                  <p className="text-sm font-medium text-gray-700">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <WhyAttend />

        <section className="bg-secColor text-white py-16 px-8 rounded-lg shadow-md">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              📢 Don’t Miss Out!
            </h2>

            <p className="text-lg md:text-xl text-secColor-Light mb-8 max-w-3xl mx-auto">
              Are you an artisan, trader, or aspiring entrepreneur? Unlock
              incredible opportunities, gain access to financial tools, and make
              lasting impacts in your community.
            </p>

            <a
              className="bg-pryColor hover:bg-secColor-Light text-white py-3 px-10 rounded-lg  shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
              href="https://kogikeda.ng/events/form.php"
            >
              Register Now
            </a>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-bold text-secondary text-center mb-4">
            📞 For Inquiries
          </h2>
          <p className="text-center text-lg">
            Call: <strong>08037184337</strong> or <strong>07057817208</strong>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KogiMSMEConference;
