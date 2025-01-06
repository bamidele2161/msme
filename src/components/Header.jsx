import React from "react";

const Header = () => {
  return (
    <header className="bg-[#2C3E50] text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl md:text-3xl font-semibold">
          Kogi State MSME & Financial Inclusion Conference 2025🌟
        </div>
        <nav>
          <ul className="md:flex space-x-6">
            <li>
              <a href="#home" className="hover:text-[#8E44AD]">
                Home
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-[#8E44AD]">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
