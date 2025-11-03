import React from 'react';
import { Link } from 'react-router';

const NotFoundMinimal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-2xl max-w-md w-full">
        <div className="card-body items-center text-center">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <h2 className="card-title text-2xl mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="card-actions">
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundMinimal;