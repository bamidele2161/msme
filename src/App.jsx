import React from "react";
import Footer from "./components/Footer";
import WhyAttend from "./components/WhyAttend";
import Header from "./components/Header";
import image from "./assets/banner.jpg";
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

      <div className="relative bg-gradient-to-r from-secColor-Lighter to-secColor text-white py-16 justify-center items-center w-full border flex px-28">
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
          <button className="bg-pryColor hover:bg-[#2C3E50] text-white py-3 px-6 rounded-lg shadow-lg font-semibold text-sm md:text-lg">
            Register Now
          </button>
        </section>
      </div>

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

            <button className="bg-pryColor hover:bg-secColor-Light text-white py-3 px-10 rounded-lg  shadow-lg text-lg font-semibold transition-transform transform hover:scale-105">
              Register Now
            </button>
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
