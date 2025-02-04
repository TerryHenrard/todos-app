import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to our application! We are dedicated to providing the best user experience and
        high-quality features to make your life easier.
      </p>
      <img
        src="https://placehold.co/600x400/png"
        alt="About us"
        className="mx-auto rounded-lg shadow-lg"
      />
      <div className="mt-6">
        <p className="text-gray-700">
          Our mission is to create innovative solutions tailored to your needs.
        </p>
        <p className="text-gray-700">
          Thank you for choosing our platform. Feel free to contact us if you have any questions or
          suggestions.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
