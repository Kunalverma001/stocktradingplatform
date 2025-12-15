import React from 'react';
import './NotFoundPage.css';
function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
}

export default NotFoundPage;
