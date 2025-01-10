import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pryColor-Light py-10">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 gap-6">
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-bold text-gray-800 mb-2">About</h2>
          <p className="text-sm text-gray-700">
            The Kogi State MSME & Financial Inclusion Conference 2025 is a
            transformative initiative designed to foster economic growth and
            financial inclusion for traders, artisans, and emerging
            entrepreneurs.
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Venue</h2>
          <p className="text-sm text-gray-700">
            Glass House, Government House, <br />
            Lokoja, Kogi State.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            📅 <strong>Date:</strong> 30th January 2025
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Contact</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              📧{" "}
              <a
                href="mailto:info@kogiconference.org"
                className="hover:underline"
              >
                info@kogiconference.org
              </a>
            </li>
            <li>📞 08037184337</li>
            <li>📞 07057817208</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-300 pt-4 text-center">
        <p className="text-sm text-gray-600">
          © 2025 Kogi State MSME & Financial Inclusion Conference. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
