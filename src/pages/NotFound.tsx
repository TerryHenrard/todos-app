import React from "react";
import { NavLink } from "react-router";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Oops! Page not found.</h2>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the page you’re looking for. It might have been removed or is
        temporarily unavailable.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transit"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
