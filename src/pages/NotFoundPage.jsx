import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-lg mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="text-blue-500 underline cursor-pointer">
        Go to Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
