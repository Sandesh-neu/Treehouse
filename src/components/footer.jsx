import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">This is a footer.</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Your Company Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
